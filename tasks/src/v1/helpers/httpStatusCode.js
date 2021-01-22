// Add other statuses if you need it.
// Reference: https://httpstatuses.com

const httpStatusCode = {
  success: {
    ok: 200,
    created: 201,
    accepted: 202,
    noContent: 204
  },
  clientError: {
    badRequest: 400,
    unauthorized: 401,
    paymentRequired: 402,
    forbidden: 403,
    notFound: 404,
    methodNotAllowed: 405,
    notAcceptable: 406,
    conflict: 409
  },
  serverError: {
    internalServerError: 500,
    notImplemented: 501,
    badGateway: 502,
    serviceUnavailable: 503
  }
}

module.exports = httpStatusCode
