const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const Base = require('./Base')
const { safeObjectId } = require('../database')
const { validators } = require('../helpers')

class Task extends Base {
  constructor(params = {}) {
    super()
    this.id = params.id || null
    this.title = params.title || null
    this.subtitle = params.subtitle || null
    this.description = params.description || null
    this.paramsErrors = []
    this.collection = 'tasks'
    this.indexName = 'tasks_index'
  }

  errors() {
    const { paramsErrors } = this

    const errorMessages = paramsErrors.map(error => error.message).join(' ')

    return { errors: errorMessages, details: paramsErrors }
  }

  async isValid() {
    const {
      id,
      title,
      subtitle,
      description,
      paramsErrors
    } = this

    if (paramsErrors.length) return false

    if (!title || title.length <= 1) {
      paramsErrors.push({ param: 'title', message: 'Titulo é obrigatório e deve ser maior que um caractere.' })
    }

    if (!subtitle || subtitle.length <= 1) {
      paramsErrors.push({ param: 'subtitle', message: 'Subtitulo é obrigatório e deve ser maior que um caractere.' })
    }

    if (!description || description.length <= 1) {
      paramsErrors.push({ param: 'description', message: 'Descrição é obrigatório e deve ser maior que um caractere.' })
    }

    if (paramsErrors.length) {
      return false
    } else {
      return true
    }
  }

  async isValidToUpdate() {
    const {
      paramsErrors
    } = this

    if (paramsErrors.length) {
      return false
    } else {
      return true
    }
  }

  async save() {
    const {
      id,
      title,
      subtitle,
      description,
      createdAt,
      updatedAt
    } = this

    const isValidToSave = await this.isValid()

    if (isValidToSave) {
      let task

      if (id) {
        const newValuesObject = {
          title,
          subtitle,
          description,
          createdAt,
          updatedAt: Date.now()
        }

        task = await this.updateOne({ _id: id }, newValuesObject)

        return task
      } else {
        task = await this.insertOne({
          title,
          subtitle,
          description,
          createdAt,
          updatedAt
        })

        return task
      }
    } else {
      return isValidToSave
    }
  }
}

module.exports = Task
