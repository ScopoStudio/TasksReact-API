const { MongoOptions } = require('../../../../src/v1/database')

describe('Database', () => {
  it('When MongoOptions is called', () => {
    expect(MongoOptions).toEqual({
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  })
})
