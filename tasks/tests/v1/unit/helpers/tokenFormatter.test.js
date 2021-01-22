const faker = require('faker')
const { tokenFormatter } = require('../../../../src/v1/helpers')

describe('Helpers', () => {
  describe('Token formatter', () => {
    it('When tokenFormatter is called', () => {
      const randomWord = faker.lorem.word()
      const token = `Bearer ${randomWord}`

      const formattedToken = tokenFormatter(token)

      expect(formattedToken).toEqual(randomWord)
    })

    it('When tokenFormatter is called, but with no params', () => {
      const formattedToken = tokenFormatter()

      expect(formattedToken).toEqual('')
    })
  })
})
