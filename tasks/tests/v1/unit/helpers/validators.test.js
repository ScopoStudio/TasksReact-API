const faker = require('faker')
const { validators } = require('../../../../src/v1/helpers')

describe('Helpers', () => {
  describe('Validators', () => {
    it('When validateEmail is called', () => {
      const validEmail = faker.internet.email()
      const invalidEmail = faker.lorem.word()

      expect(validators.validateEmail(validEmail)).toBe(true)
      expect(validators.validateEmail(invalidEmail)).not.toBe(true)
    })

    it('When validateLinkedin is called', () => {
      const validLinkedinProfile = `https://www.linkedin.com/in/${faker.random.number()}`
      const invalidLinkedinProfile = faker.internet.url()

      expect(validators.validateLinkedin(validLinkedinProfile)).toBe(true)
      expect(validators.validateLinkedin(invalidLinkedinProfile)).not.toBe(true)
    })
  })
})
