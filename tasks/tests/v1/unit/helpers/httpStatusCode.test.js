const { httpStatusCode } = require('../../../../src/v1/helpers')

describe('Helpers', () => {
  describe('HTTP Statuses Code', () => {
    describe('Success', () => {
      it('When is ok', () => {
        expect(httpStatusCode.success.ok).toBe(200)
      })

      it('When is created', () => {
        expect(httpStatusCode.success.created).toBe(201)
      })

      it('When is accepted', () => {
        expect(httpStatusCode.success.accepted).toBe(202)
      })

      it('When is noContent', () => {
        expect(httpStatusCode.success.noContent).toBe(204)
      })
    })

    describe('Client Error', () => {
      it('When is badRequest', () => {
        expect(httpStatusCode.clientError.badRequest).toBe(400)
      })

      it('When is badRequest', () => {
        expect(httpStatusCode.clientError.badRequest).toBe(400)
      })

      it('When is unauthorized', () => {
        expect(httpStatusCode.clientError.unauthorized).toBe(401)
      })

      it('When is paymentRequired', () => {
        expect(httpStatusCode.clientError.paymentRequired).toBe(402)
      })

      it('When is forbidden', () => {
        expect(httpStatusCode.clientError.forbidden).toBe(403)
      })

      it('When is notFound', () => {
        expect(httpStatusCode.clientError.notFound).toBe(404)
      })

      it('When is methodNotAllowed', () => {
        expect(httpStatusCode.clientError.methodNotAllowed).toBe(405)
      })

      it('When is notAcceptable', () => {
        expect(httpStatusCode.clientError.notAcceptable).toBe(406)
      })

      it('When is conflict', () => {
        expect(httpStatusCode.clientError.conflict).toBe(409)
      })
    })

    describe('Server Error', () => {
      it('When is internalServerError', () => {
        expect(httpStatusCode.serverError.internalServerError).toBe(500)
      })

      it('When is notImplemented', () => {
        expect(httpStatusCode.serverError.notImplemented).toBe(501)
      })

      it('When is badGateway', () => {
        expect(httpStatusCode.serverError.badGateway).toBe(502)
      })

      it('When is serviceUnavailable', () => {
        expect(httpStatusCode.serverError.serviceUnavailable).toBe(503)
      })
    })
  })
})
