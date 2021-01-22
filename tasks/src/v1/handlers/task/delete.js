const { safeObjectId } = require('../../database')
const { handleResponse, httpStatusCode } = require('../../helpers')
const { Task } = require('../../models')

const handle = async (event, context) => {
  const { id } = event.pathParameters || {}
  const convertedId = safeObjectId(id)

  if (!convertedId) {
    return handleResponse({
      body: { message: `The value ${id} is not a valid MongoDB ObjectId.` },
      statusCode: httpStatusCode.clientError.badRequest
    })
  }

  const task = new Task({ id: convertedId })
  const taskToReturn = await task.delete()

  if (taskToReturn) {
    return handleResponse({ statusCode: httpStatusCode.success.noContent })
  } else {
    return handleResponse({ body: { message: `Object with id ${id} not found in database.` }, statusCode: httpStatusCode.clientError.notFound })
  }
}

module.exports.handle = handle
