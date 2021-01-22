const { MongoURI } = require('../../../../src/v1/database')

describe('Database', () => {
  it('When MongoURI is called', () => {
    expect(MongoURI).toBe(process.env.MONGO_URL)
  })
})
