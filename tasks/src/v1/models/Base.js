const AWS = require('aws-sdk')
const MongoDB = require('mongodb')
const { MongoURI, MongoOptions } = require('../database')

const MongoClient = MongoDB.MongoClient
const ObjectId = MongoDB.ObjectId

class Base {
  constructor(params = {}) {
    this.collection = ''
    this.createdAt = Date.now()
    this.updatedAt = Date.now()
    this.page = 0
    this.offset = 10
    this.sort = null
    this.search = null
    this.indexName = null
  }

  async _getMongoClientAndCollection() {
    const client = await MongoClient.connect(MongoURI, MongoOptions)
    const database = client.db()
    const collection = database.collection(this.collection)

    return { client, collection }
  }

  async insertOne(objectToInsert) {
    return new Promise(async (resolve, reject) => {
      const { client, collection } = await this._getMongoClientAndCollection()

      if (!collection) reject()

      collection.insertOne(objectToInsert, (error, document) => {
        if (error) reject(error)

        client.close()
        resolve(document.ops[0])
      })
    })
  }

  async findOne(queryFilter) {
    return new Promise(async (resolve, reject) => {
      const { client, collection } = await this._getMongoClientAndCollection()

      if (!collection) reject()

      collection.findOne(queryFilter, (error, document) => {
        if (error) reject(error)

        client.close()
        resolve(document)
      })
    })
  }

  async list() {
    return new Promise(async (resolve, reject) => {
      const { client, collection } = await this._getMongoClientAndCollection()

      if (!collection) reject()

      const { page, offset, sort, search } = this

      let customSearch = { deletedAt: { $exists: false } }

      if (search) {
        customSearch = {
          ...customSearch,
          $or: [
            { title: { $regex: search, $options: 'i' } },
            { subtitle: { $regex: search, $options: 'i' } },
            { desc: { $regex: search, $options: 'i' } },
            { _id: { $regex: search, $options: 'i' } }
          ]
        }
      }

      collection
        .find(customSearch)
        .sort(sort)
        .skip(page * offset)
        .limit(offset)
        .toArray((error, documents) => {
          if (error) reject(error)

          client.close()
          resolve(documents)
        })
    })
  }

  async listWithoutPagination(queryFilter = {}) {
    return new Promise(async (resolve, reject) => {
      const { client, collection } = await this._getMongoClientAndCollection()

      if (!collection) reject()

      collection.find(queryFilter).toArray((error, documents) => {
        if (error) reject(error)

        client.close()
        resolve(documents)
      })
    })
  }

  async updateOne(queryFilter, newValues) {
    return new Promise(async (resolve, reject) => {
      const { client, collection } = await this._getMongoClientAndCollection()

      if (!collection) reject()

      collection.findOneAndUpdate(queryFilter, { $set: newValues }, { returnOriginal: false }, (error, document) => {
        if (error) reject(error)

        client.close()
        resolve(document.value)
      })
    })
  }

  async update(queryFilter, newValues) {
    return new Promise(async (resolve, reject) => {
      const { client, collection } = await this._getMongoClientAndCollection()
      if (!collection) reject()
      collection.update(queryFilter, { $set: newValues }, { multi: true }, (error, document) => {
        if (error) reject(error)
        client.close()
        resolve(document.value)
      })
    })
  }

  _getLastDaysTime(days = 7) {
    const today = new Date(Date.now())

    today.setDate(today.getDate() - days)

    return today.getTime()
  }
  
  async delete() {
    const { id, paramsErrors } = this
    const selfDocument = await this.get()

    if (id && selfDocument) {
      const self = this.updateOne({ _id: id }, { deletedAt: Date.now() })
      return self
    } else {
      paramsErrors.push({ message: 'You must give the id.' })
      return false
    }
  }

  async countDocuments(queryFilter) {
    return new Promise(async (resolve, reject) => {
      const { client, collection } = await this._getMongoClientAndCollection()

      if (!collection) reject()

      collection.countDocuments(queryFilter, (error, documents) => {
        if (error) reject(error)

        client.close()
        resolve(documents)
      })
    })
  }

  async get() {
    const { id, paramsErrors } = this

    if (id) {
      const self = this.findOne({ _id: id })
      return self
    } else {
      paramsErrors.push({ message: 'You must give the id.' })
      return false
    }
  }

  async sendEmail({ to, subject, body }) {
    const { SES_AWS_REGION, SES_AWS_ACCESS_KEY, SES_AWS_SECRET_ACCESS_KEY } = process.env

    const SESSettings = {
      region: SES_AWS_REGION,
      accessKeyId: SES_AWS_ACCESS_KEY,
      secretAccessKey: SES_AWS_SECRET_ACCESS_KEY
    }

    const SES = new AWS.SES(SESSettings)

    const mailParams = {
      Source: 'no-reply@bonuz.it',
      Destination: {
        ToAddresses: [to]
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: body
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject
        }
      }
    }

    return await SES.sendEmail(mailParams).promise()
  }
}

module.exports = Base
