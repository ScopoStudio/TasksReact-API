const faker = require('faker')
const request = require('supertest')
const { httpStatusCode } = require('../../../../../src/v1/helpers')
const { start, shutdown } = require('../../setup')

describe('Handlers', () => {
  describe('Expertise', () => {
    describe('Create', () => {
      beforeAll(async () => {
        await start()
      })

      afterAll(async () => {
        await shutdown()
      })

      describe('When is valid', () => {
        it('When name is sent', async () => {
          const name = faker.name.jobTitle()

          const response = await request(BASE_URL)
            .post('/expertise')
            .send({ name })

          const { statusCode, body } = response

          expect(statusCode).toBe(httpStatusCode.success.created)
          expect(body).toEqual({
            _id: expect.any(String),
            name,
            status: 'active',
            createdAt: expect.any(Number),
            updatedAt: expect.any(Number)
          })
        })
      })

      describe('When is invalid', () => {
        it('When name is not sent', async () => {
          const response = await request(BASE_URL)
            .post('/expertise')
            .send({})

          const { statusCode, body } = response

          expect(statusCode).toBe(httpStatusCode.clientError.badRequest)
          expect(body).toEqual({
            message: {
              errors: expect.any(String),
              details: expect.arrayContaining([
                expect.objectContaining({
                  param: expect.any(String),
                  message: expect.any(String)
                })
              ])
            }
          })
        })
      })
    })
  })
})
