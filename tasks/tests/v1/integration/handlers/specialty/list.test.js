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

      afterAll(() => {
        shutdown()
      })

      it('When end point is called', async () => {
        const response = await request(BASE_URL).get('/expertise')

        const { statusCode, body } = response

        expect(statusCode).toBe(httpStatusCode.success.ok)
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
