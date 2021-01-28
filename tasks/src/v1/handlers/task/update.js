const { safeObjectId } = require('../../database')
const { handleResponse, httpStatusCode } = require('../../helpers')
const { Task } = require('../../models')

const handle = async (event, context) => {
  const { title, subtitle, description } = JSON.parse(event.body || {})

  const { id } = event.pathParameters || {}
  const convertedId = safeObjectId(id)

  if (!convertedId) {
    return handleResponse({
      body: { message: `The value ${id} is not a valid MongoDB ObjectId.` },
      statusCode: httpStatusCode.clientError.badRequest
    })
  }

  const task = new Task({
    id: convertedId,
    title,
    subtitle,
    description
  })
  const isValid = await task.isValid()

  if (isValid) {
    const taskToReturn = await task.save()

    if (taskToReturn) {
      return handleResponse({ body: taskToReturn, statusCode: httpStatusCode.success.ok })
    } else {
      return handleResponse({ body: { message: `Object with id ${id} not found in database.` }, statusCode: httpStatusCode.clientError.notFound })
    }
  } else {
    const errors = task.errors()
    return handleResponse({ body: { message: errors }, statusCode: httpStatusCode.clientError.badRequest })
  }
}

module.exports.handle = handle
