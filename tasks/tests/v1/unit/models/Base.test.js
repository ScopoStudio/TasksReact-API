const faker = require('faker')
const { Base } = require('../../../../src/v1/models')

let base
let id

describe('Models', () => {
  describe('Base', () => {
    describe('When is valid', () => {
      beforeAll(() => {
        base = new Base()
        base.collection = 'base'
      })

      it('When _getMongoClientAndCollection is called', () => {
        _getMongoClientAndCollection = base._getMongoClientAndCollection

        expect(_getMongoClientAndCollection).toBeInstanceOf(Function)
      })

      it('When insertOne is called', async () => {
        const insertOne = base.insertOne
        const sentenceToInsert = faker.lorem.sentence()

        tryToInsertOne = await base.insertOne({ lorem: sentenceToInsert })
        id = tryToInsertOne._id

        expect(insertOne).toBeInstanceOf(Function)
        expect(tryToInsertOne).toEqual({
          _id: expect.any(Object),
          lorem: sentenceToInsert
        })
      })

      it('When findOne is called', async () => {
        const findOne = base.findOne
        const tryToFindOne = await base.findOne({ _id: id })

        expect(findOne).toBeInstanceOf(Function)
        expect(tryToFindOne).toEqual({
          _id: id,
          lorem: expect.any(String)
        })
      })

      it('When updateOne is called', async () => {
        const updateOne = base.updateOne
        const newValue = faker.lorem.word()
        const tryToUpdateOne = await base.updateOne({ _id: id }, { lorem: newValue })

        expect(updateOne).toBeInstanceOf(Function)
        expect(tryToUpdateOne).toEqual({
          _id: id,
          lorem: newValue
        })
      })

      it('When list is called', async () => {
        const list = base.list
        const documentsList = await base.list()

        expect(list).toBeInstanceOf(Function)
        expect(documentsList).toBeInstanceOf(Array)
        expect(documentsList).toEqual([
          {
            _id: expect.any(Object),
            lorem: expect.any(String)
          }
        ])
      })

      it('When countDocuments is called', async () => {
        const countDocuments = base.countDocuments
        const objects = await base.countDocuments()

        expect(countDocuments).toBeInstanceOf(Function)
        expect(objects).toEqual(1)
      })

      it('When deleteOne is called', async () => {
        const deleteOne = base.deleteOne
        const queryFilter = { _id: id }
        await base.deleteOne(queryFilter)
        const tryToFindDeletedObject = await base.findOne(queryFilter)

        expect(deleteOne).toBeInstanceOf(Function)
        expect(tryToFindDeletedObject).toBe(null)
      })
    })
  })
})
