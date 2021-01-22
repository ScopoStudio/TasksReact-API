const faker = require('faker')
const { handleResponse, httpStatusCode } = require('../../../../src/v1/helpers')

const headerToCompare = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
}

describe('Helpers', () => {
  describe('Handle Response', () => {
    describe('When both body and statusCode params are sent', () => {
      it('When body and statusCode is sent', () => {
        const bodyToSend = { phrase: faker.lorem.sentence() }
        const httpStatusToSend = httpStatusCode.success.ok

        const response = handleResponse({ body: bodyToSend, statusCode: httpStatusToSend })

        expect(response).toEqual({
          statusCode: httpStatusToSend,
          headers: headerToCompare,
          body: JSON.stringify(bodyToSend)
        })
      })
    })

    describe('When only one param is sent', () => {
      it('When only body is sent', () => {
        const bodyToSend = { phrase: faker.lorem.sentence() }

        const response = handleResponse({ body: bodyToSend })

        expect(response).toEqual({
          statusCode: httpStatusCode.success.ok,
          headers: headerToCompare,
          body: JSON.stringify(bodyToSend)
        })
      })

      it('When only statusCode is sent', () => {
        const response = handleResponse({ statusCode: httpStatusCode.success.accepted })

        expect(response).toEqual({
          statusCode: httpStatusCode.success.accepted,
          headers: headerToCompare
        })
      })

      it('When nothing is sent', () => {
        const response = handleResponse({})

        expect(response).toEqual({
          statusCode: httpStatusCode.success.noContent,
          headers: headerToCompare
        })
      })
    })
  })
})
