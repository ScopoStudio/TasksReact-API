const faker = require('faker')
const ObjectId = require('mongodb').ObjectId
const { safeObjectId } = require('../../../../src/v1/database')

describe('Database', () => {
  it('When safeObjectId is called and sent a valid ObjectId', () => {
    const idToHandle = '5ce6cf9ece56b80cee5a3ad0'
    const id = safeObjectId(idToHandle)
    const objectId = ObjectId(idToHandle)

    expect(id).toEqual(objectId)
  })

  it('When safeObjectId is called and sent an invalid ObjectId', () => {
    const id = safeObjectId(faker.lorem.word())

    expect(id).toBe(false)
  })
})
