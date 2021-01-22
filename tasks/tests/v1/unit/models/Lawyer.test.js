const faker = require('faker')
const bcrypt = require('bcryptjs')
const { Lawyer } = require('../../../../src/v1/models')

describe('Models', () => {
  describe('Lawyer', () => {
    describe('Methods', () => {
      beforeAll(() => {
        process.env.JWT_SECRET = JWT_SECRET
        process.env.JWT_EXPIRATION_TIME = JWT_EXPIRATION_TIME
      })

      it('When encryptPassword is called', () => {
        const password = faker.internet.password()
        const encryptedPasswordToTest = bcrypt.hashSync(password, BCRYPT_ROUNDS)

        const lawyer = new Lawyer({ password })
        const encryptedPasswordToCompare = lawyer.encryptPassword()
        const encryptedPasswordToTestCompared = bcrypt.compareSync(password, encryptedPasswordToTest)
        const encryptedPasswordToCompareCompared = bcrypt.compareSync(password, encryptedPasswordToCompare)

        expect(encryptedPasswordToTest).toEqual(expect.any(String))
        expect(encryptedPasswordToCompare).toEqual(expect.any(String))
        expect(encryptedPasswordToTestCompared).toBe(true)
        expect(encryptedPasswordToCompareCompared).toBe(true)
      })

      describe('When is valid', () => {
        it('When params are valid', async () => {
          const firstName = faker.name.firstName()
          const lastName = faker.name.lastName()
          const personalEmail = faker.internet.email()
          const birthDate = faker.date.future()
          const professionalEmail = faker.internet.email()
          const professionalEmailConfirmation = professionalEmail
          const linkedinProfile = `https://www.linkedin.com/in/${faker.random.number()}`
          const expertises = [faker.random.number()]

          const lawyer = new Lawyer({
            firstName,
            lastName,
            personalEmail,
            birthDate,
            professionalEmail,
            professionalEmailConfirmation,
            linkedinProfile,
            expertises
          })

          expect(lawyer.firstName).toEqual(firstName)
          expect(lawyer.lastName).toEqual(lastName)
          expect(lawyer.personalEmail).toEqual(personalEmail)
          expect(lawyer.birthDate).toEqual(birthDate)
          expect(lawyer.professionalEmail).toEqual(professionalEmail)
          expect(lawyer.professionalEmailConfirmation).toEqual(professionalEmailConfirmation)
          expect(lawyer.linkedinProfile).toEqual(linkedinProfile)
          expect(lawyer.expertises).toEqual(expertises)
          expect(await lawyer.isValid()).toBe(true)
        })

        it('When _validatePassword is called', async () => {
          const password = faker.internet.password()
          const encryptedPassword = bcrypt.hashSync(password, BCRYPT_ROUNDS)

          const lawyer = new Lawyer({ password })
          const isValidPassword = lawyer._validatePassword(encryptedPassword)

          expect(lawyer._validatePassword).toBeInstanceOf(Function)
          expect(isValidPassword).toBe(true)
        })
      })

      describe('When is invalid', () => {
        it('When firstName is not sent', async () => {
          const lawyer = new Lawyer()
          const isValid = await lawyer.isValid()
          const errors = lawyer.errors()
          const tryToSaveUser = await lawyer.save()
          const authenticatedUser = await lawyer.authenticate()
          const authorizedUser = await lawyer.authorize()

          const includeCorrectError = errors.details.find(error => error.param === 'firstName')

          expect(isValid).not.toBe(true)
          expect(includeCorrectError).not.toBe(undefined)
          expect(errors).toEqual({
            errors: expect.any(String),
            details: expect.arrayContaining([
              expect.objectContaining({
                param: expect.any(String),
                message: expect.any(String)
              })
            ])
          })
          expect(errors).toEqual({
            errors: expect.any(String),
            details: expect.arrayContaining([
              expect.objectContaining({
                param: expect.any(String),
                message: expect.any(String)
              })
            ])
          })
          expect(tryToSaveUser).toEqual(false)
          expect(authenticatedUser).toBe(false)
          expect(authorizedUser).toBe(false)
        })

        it('When lastName is not sent', async () => {
          const firstName = faker.name.firstName()

          const lawyer = new Lawyer({ firstName })
          const isValid = await lawyer.isValid()
          const errors = lawyer.errors()
          const tryToSaveUser = await lawyer.save()
          const authenticatedUser = await lawyer.authenticate()
          const authorizedUser = await lawyer.authorize()

          const includeCorrectError = errors.details.find(error => error.param === 'lastName')

          expect(lawyer.firstName).toEqual(firstName)
          expect(lawyer.lastName).toEqual(null)
          expect(includeCorrectError).not.toBe(undefined)
          expect(isValid).not.toBe(true)
          expect(errors).toEqual({
            errors: expect.any(String),
            details: expect.arrayContaining([
              expect.objectContaining({
                param: expect.any(String),
                message: expect.any(String)
              })
            ])
          })
          expect(errors).toEqual({
            errors: expect.any(String),
            details: expect.arrayContaining([
              expect.objectContaining({
                param: expect.any(String),
                message: expect.any(String)
              })
            ])
          })
          expect(tryToSaveUser).toEqual(false)
          expect(authenticatedUser).toBe(false)
          expect(authorizedUser).toBe(false)
        })

        it('When birthDate is not sent', async () => {
          const firstName = faker.name.firstName()
          const lastName = faker.name.lastName()
          const lawyer = new Lawyer({ firstName, lastName })
          const isValid = await lawyer.isValid()
          const errors = lawyer.errors()
          const tryToSaveUser = await lawyer.save()
          const authenticatedUser = await lawyer.authenticate()
          const authorizedUser = await lawyer.authorize()

          const includeCorrectError = errors.details.find(error => error.param === 'birthDate')

          expect(lawyer.firstName).toEqual(firstName)
          expect(lawyer.lastName).toEqual(lastName)
          expect(lawyer.birthDate).toEqual(null)
          expect(includeCorrectError).not.toBe(undefined)
          expect(isValid).not.toBe(true)
          expect(errors).toEqual({
            errors: expect.any(String),
            details: expect.arrayContaining([
              expect.objectContaining({
                param: expect.any(String),
                message: expect.any(String)
              })
            ])
          })
          expect(errors).toEqual({
            errors: expect.any(String),
            details: expect.arrayContaining([
              expect.objectContaining({
                param: expect.any(String),
                message: expect.any(String)
              })
            ])
          })
          expect(tryToSaveUser).toEqual(false)
          expect(authenticatedUser).toBe(false)
          expect(authorizedUser).toBe(false)
        })
      })

      it('When personalEmail is not sent', async () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const lawyer = new Lawyer({ firstName, lastName })
        const isValid = await lawyer.isValid()
        const errors = lawyer.errors()
        const tryToSaveUser = await lawyer.save()
        const authenticatedUser = await lawyer.authenticate()
        const authorizedUser = await lawyer.authorize()

        const includeCorrectError = errors.details.find(error => error.param === 'personalEmail')

        expect(lawyer.firstName).toEqual(firstName)
        expect(lawyer.lastName).toEqual(lastName)
        expect(includeCorrectError).not.toBe(undefined)
        expect(isValid).not.toBe(true)
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(tryToSaveUser).toEqual(false)
        expect(authenticatedUser).toBe(false)
        expect(authorizedUser).toBe(false)
      })

      it('When personalEmail is invalid', async () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const personalEmail = faker.lorem.word()
        const lawyer = new Lawyer({ firstName, lastName, personalEmail })
        const isValid = await lawyer.isValid()
        const errors = lawyer.errors()
        const tryToSaveUser = await lawyer.save()
        const authenticatedUser = await lawyer.authenticate()
        const authorizedUser = await lawyer.authorize()

        const includeCorrectError = errors.details.find(error => error.param === 'personalEmail')

        expect(lawyer.firstName).toEqual(firstName)
        expect(lawyer.lastName).toEqual(lastName)
        expect(includeCorrectError).not.toBe(undefined)
        expect(isValid).not.toBe(true)
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(tryToSaveUser).toEqual(false)
        expect(authenticatedUser).toBe(false)
        expect(authorizedUser).toBe(false)
      })

      it('When professionalEmail is not sent', async () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const personalEmail = faker.internet.email()
        const birthDate = faker.date.future()
        const lawyer = new Lawyer({ firstName, lastName, birthDate, personalEmail })
        const isValid = await lawyer.isValid()
        const errors = lawyer.errors()
        const tryToSaveUser = await lawyer.save()
        const authenticatedUser = await lawyer.authenticate()
        const authorizedUser = await lawyer.authorize()

        const includeCorrectError = errors.details.find(error => error.param === 'professionalEmail')

        expect(lawyer.firstName).toEqual(firstName)
        expect(lawyer.lastName).toEqual(lastName)
        expect(lawyer.birthDate).toEqual(birthDate)
        expect(includeCorrectError).not.toBe(undefined)
        expect(isValid).not.toBe(true)
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(tryToSaveUser).toEqual(false)
        expect(authenticatedUser).toBe(false)
        expect(authorizedUser).toBe(false)
      })

      it('When professionalEmail is invalid', async () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const personalEmail = faker.internet.email()
        const birthDate = faker.date.future()

        const professionalEmail = faker.lorem.word()

        const lawyer = new Lawyer({ firstName, lastName, birthDate, personalEmail, professionalEmail })
        const isValid = await lawyer.isValid()
        const errors = lawyer.errors()
        const tryToSaveUser = await lawyer.save()
        const authenticatedUser = await lawyer.authenticate()
        const authorizedUser = await lawyer.authorize()

        const includeCorrectError = errors.details.find(error => error.param === 'professionalEmail')

        expect(lawyer.firstName).toEqual(firstName)
        expect(lawyer.lastName).toEqual(lastName)
        expect(lawyer.birthDate).toEqual(birthDate)
        expect(includeCorrectError).not.toBe(undefined)
        expect(isValid).not.toBe(true)
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(tryToSaveUser).toEqual(false)
        expect(authenticatedUser).toBe(false)
        expect(authorizedUser).toBe(false)
      })

      it('When professionalEmailConfirmation is not sent', async () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const personalEmail = faker.internet.email()
        const birthDate = faker.date.future()

        const professionalEmail = faker.internet.email()

        const lawyer = new Lawyer({ firstName, lastName, birthDate, personalEmail, professionalEmail })
        const isValid = await lawyer.isValid()
        const errors = lawyer.errors()
        const tryToSaveUser = await lawyer.save()
        const authenticatedUser = await lawyer.authenticate()
        const authorizedUser = await lawyer.authorize()

        const includeCorrectError = errors.details.find(error => error.param === 'professionalEmailConfirmation')

        expect(lawyer.firstName).toEqual(firstName)
        expect(lawyer.lastName).toEqual(lastName)
        expect(lawyer.birthDate).toEqual(birthDate)
        expect(lawyer.professionalEmail).toEqual(professionalEmail)
        expect(includeCorrectError).not.toBe(undefined)
        expect(isValid).not.toBe(true)
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(tryToSaveUser).toEqual(false)
        expect(authenticatedUser).toBe(false)
        expect(authorizedUser).toBe(false)
      })

      it('When professionalEmailConfirmation is invalid', async () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const personalEmail = faker.internet.email()
        const birthDate = faker.date.future()

        const professionalEmail = faker.internet.email()
        const professionalEmailConfirmation = faker.lorem.word()

        const lawyer = new Lawyer({
          firstName,
          lastName,
          birthDate,
          personalEmail,
          professionalEmail,
          professionalEmailConfirmation
        })
        const isValid = await lawyer.isValid()
        const errors = lawyer.errors()
        const tryToSaveUser = await lawyer.save()
        const authenticatedUser = await lawyer.authenticate()
        const authorizedUser = await lawyer.authorize()

        const includeCorrectError = errors.details.find(error => error.param === 'professionalEmailConfirmation')

        expect(lawyer.firstName).toEqual(firstName)
        expect(lawyer.lastName).toEqual(lastName)
        expect(lawyer.birthDate).toEqual(birthDate)
        expect(lawyer.professionalEmail).toEqual(professionalEmail)
        expect(includeCorrectError).not.toBe(undefined)
        expect(isValid).not.toBe(true)
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(tryToSaveUser).toEqual(false)
        expect(authenticatedUser).toBe(false)
        expect(authorizedUser).toBe(false)
      })

      it('When professionalEmailConfirmation and professionalEmail does not match', async () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const personalEmail = faker.internet.email()
        const birthDate = faker.date.future()

        const professionalEmail = faker.internet.email()
        const professionalEmailConfirmation = faker.internet.email()

        const lawyer = new Lawyer({
          firstName,
          lastName,
          birthDate,
          personalEmail,
          professionalEmail,
          professionalEmailConfirmation
        })
        const isValid = await lawyer.isValid()
        const errors = lawyer.errors()
        const tryToSaveUser = await lawyer.save()
        const authenticatedUser = await lawyer.authenticate()
        const authorizedUser = await lawyer.authorize()

        const includeCorrectError = errors.details.find(error => error.param === 'professionalEmail')

        expect(lawyer.firstName).toEqual(firstName)
        expect(lawyer.lastName).toEqual(lastName)
        expect(lawyer.birthDate).toEqual(birthDate)
        expect(lawyer.professionalEmail).toEqual(professionalEmail)
        expect(includeCorrectError).not.toBe(undefined)
        expect(isValid).not.toBe(true)
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(tryToSaveUser).toEqual(false)
        expect(authenticatedUser).toBe(false)
        expect(authorizedUser).toBe(false)
      })

      it('When linkedinProfile is sent, but it is invalid', async () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const personalEmail = faker.internet.email()
        const birthDate = faker.date.future()

        const professionalEmail = faker.internet.email()
        const linkedinProfile = faker.internet.url()

        const lawyer = new Lawyer({
          firstName,
          lastName,
          birthDate,
          personalEmail,
          professionalEmail,
          professionalEmailConfirmation: professionalEmail,
          linkedinProfile
        })
        const isValid = await lawyer.isValid()
        const errors = lawyer.errors()
        const tryToSaveUser = await lawyer.save()
        const authenticatedUser = await lawyer.authenticate()
        const authorizedUser = await lawyer.authorize()

        const includeCorrectError = errors.details.find(error => error.param === 'linkedinProfile')

        expect(lawyer.firstName).toEqual(firstName)
        expect(lawyer.lastName).toEqual(lastName)
        expect(lawyer.birthDate).toEqual(birthDate)
        expect(lawyer.professionalEmail).toEqual(professionalEmail)
        expect(includeCorrectError).not.toBe(undefined)
        expect(isValid).not.toBe(true)
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(tryToSaveUser).toEqual(false)
        expect(authenticatedUser).toBe(false)
        expect(authorizedUser).toBe(false)
      })

      it('When expertises is not sent', async () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const personalEmail = faker.internet.email()
        const birthDate = faker.date.future()

        const professionalEmail = faker.internet.email()
        const linkedinProfile = `https://www.linkedin.com/in/${faker.random.number()}`

        const lawyer = new Lawyer({
          firstName,
          lastName,
          personalEmail,
          birthDate,
          professionalEmail,
          professionalEmailConfirmation: professionalEmail,
          linkedinProfile
        })
        const isValid = await lawyer.isValid()
        const errors = lawyer.errors()
        const tryToSaveUser = await lawyer.save()
        const authenticatedUser = await lawyer.authenticate()
        const authorizedUser = await lawyer.authorize()

        const includeCorrectError = errors.details.find(error => error.param === 'expertises')

        expect(lawyer.firstName).toEqual(firstName)
        expect(lawyer.lastName).toEqual(lastName)
        expect(lawyer.birthDate).toEqual(birthDate)
        expect(lawyer.professionalEmail).toEqual(professionalEmail)
        expect(includeCorrectError).not.toBe(undefined)
        expect(isValid).not.toBe(true)
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(tryToSaveUser).toEqual(false)
        expect(authenticatedUser).toBe(false)
        expect(authorizedUser).toBe(false)
      })

      it('When expertises is sent, but invalid', async () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const personalEmail = faker.internet.email()
        const birthDate = faker.date.future()

        const professionalEmail = faker.internet.email()
        const linkedinProfile = `https://www.linkedin.com/in/${faker.random.number()}`
        const expertises = ['a']

        const lawyer = new Lawyer({
          firstName,
          lastName,
          personalEmail,
          birthDate,
          professionalEmail,
          professionalEmailConfirmation: professionalEmail,
          linkedinProfile,
          expertises
        })
        const isValid = await lawyer.isValid()
        const errors = lawyer.errors()
        const tryToSaveUser = await lawyer.save()
        const authenticatedUser = await lawyer.authenticate()
        const authorizedUser = await lawyer.authorize()

        const includeCorrectError = errors.details.find(error => error.param === 'expertises')

        expect(lawyer.firstName).toEqual(firstName)
        expect(lawyer.lastName).toEqual(lastName)
        expect(lawyer.birthDate).toEqual(birthDate)
        expect(lawyer.professionalEmail).toEqual(professionalEmail)
        expect(includeCorrectError).not.toBe(undefined)
        expect(isValid).not.toBe(true)
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(tryToSaveUser).toEqual(false)
        expect(authenticatedUser).toBe(false)
        expect(authorizedUser).toBe(false)
      })

      it('When profile is sent, but it is invalid', async () => {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const personalEmail = faker.internet.email()
        const birthDate = faker.date.future()

        const professionalEmail = faker.internet.email()
        const linkedinProfile = `https://www.linkedin.com/in/${faker.random.number()}`
        const expertises = [faker.random.number()]
        const profile = faker.lorem.word()

        const lawyer = new Lawyer({
          firstName,
          lastName,
          personalEmail,
          birthDate,
          professionalEmail,
          professionalEmailConfirmation: professionalEmail,
          linkedinProfile,
          expertises,
          profile
        })
        const isValid = await lawyer.isValid()
        const errors = lawyer.errors()
        const tryToSaveUser = await lawyer.save()
        const authenticatedUser = await lawyer.authenticate()
        const authorizedUser = await lawyer.authorize()

        const includeCorrectError = errors.details.find(error => error.param === 'profile')

        expect(lawyer.firstName).toEqual(firstName)
        expect(lawyer.lastName).toEqual(lastName)
        expect(lawyer.birthDate).toEqual(birthDate)
        expect(lawyer.professionalEmail).toEqual(professionalEmail)
        expect(includeCorrectError).not.toBe(undefined)
        expect(isValid).not.toBe(true)
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(errors).toEqual({
          errors: expect.any(String),
          details: expect.arrayContaining([
            expect.objectContaining({
              param: expect.any(String),
              message: expect.any(String)
            })
          ])
        })
        expect(tryToSaveUser).toEqual(false)
        expect(authenticatedUser).toBe(false)
        expect(authorizedUser).toBe(false)
      })
    })
  })
})
