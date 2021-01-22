const ObjectId = require('mongodb').ObjectId
const { handleResponse, httpStatusCode } = require('../../helpers')
const { Task } = require('../../models')

const handle = async (event, context) => {
  const { id } = event.pathParameters || {}
  let convertedId

  try {
    convertedId = ObjectId(id)
  } catch (error) {
    return handleResponse({
      body: { message: `The value ${id} is not a valid MongoDB ObjectId.` },
      statusCode: httpStatusCode.clientError.badRequest
    })
  }

  const task = new Task({ id: convertedId })
  const taskToReturn = await task.get()

  if (taskToReturn) {
    return handleResponse({ body: taskToReturn, statusCode: httpStatusCode.success.ok })
  } else {
    return handleResponse({ body: { message: `Object with id ${id} not found in database.` }, statusCode: httpStatusCode.clientError.notFound })
  }
}

module.exports.handle = handle
