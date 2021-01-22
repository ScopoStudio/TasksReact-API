const { safeObjectId } = require('../../database')
const { handleResponse, httpStatusCode } = require('../../helpers')
const { Realtor } = require('../../models')

const handle = async (event, context) => {
  const {
    firstName,
    lastName,
    email,
    birthDate,
    password,
    passwordConfirmation,
    mobileNumber,
    telephoneNumber,
    addressZipcode,
    addressStreet,
    addressNumber,
    addressNeighborhood,
    addressCity,
    addressUF,
    addressComplement,
    document,
    wallet,
    realtorID
  } = JSON.parse(event.body || {})

  const { id } = event.pathParameters || {}
  const convertedId = safeObjectId(id)

  if (!convertedId) {
    return handleResponse({
      body: { message: `The value ${id} is not a valid MongoDB ObjectId.` },
      statusCode: httpStatusCode.clientError.badRequest
    })
  }

  const realtor = new Realtor({
    id: convertedId,
    firstName,
    lastName,
    email,
    birthDate,
    password,
    passwordConfirmation,
    mobileNumber,
    telephoneNumber,
    addressZipcode,
    addressStreet,
    addressNumber,
    addressNeighborhood,
    addressCity,
    addressUF,
    addressComplement,
    document,
    wallet,
    realtorID
  })
  const isValid = await realtor.isValid()

  if (isValid) {
    const realtorToReturn = await realtor.save()

    if (realtorToReturn) {
      return handleResponse({ body: realtorToReturn, statusCode: httpStatusCode.success.ok })
    } else {
      return handleResponse({ body: { message: `Object with id ${id} not found in database.` }, statusCode: httpStatusCode.clientError.notFound })
    }
  } else {
    const errors = realtor.errors()
    return handleResponse({ body: { message: errors }, statusCode: httpStatusCode.clientError.badRequest })
  }
}

module.exports.handle = handle
