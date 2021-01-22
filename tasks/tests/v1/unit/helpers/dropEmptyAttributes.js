const faker = require('faker')
const { dropEmptyAttributes } = require('../../../../src/v1/helpers')

describe('Helpers', () => {
  describe('Drop Empty Attributes', () => {
    it('When dropEmptyAttributes is called', () => {
      const name = faker.fake.name()

      const objectToTest = { name, age: null, sex: undefined, details: '', status: 0 }

      const result = dropEmptyAttributes(objectToTest)

      expect(result).toEqual({
        name,
        status: 0
      })
      expect(result.age).toBe(undefined)
      expect(result.sex).toBe(undefined)
      expect(result.details).toBe(undefined)
    })
  })
})
