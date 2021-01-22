const { handleResponse, httpStatusCode } = require('../../helpers')
const { safeObjectId } = require('../../database')
const { Task } = require('../../models')

const handle = async (event, context) => {

  const {
    title,
    subtitle,
    description
  } = JSON.parse(event.body || {})

  const task = new Task({
    title,
    subtitle,
    description
  })

  const isValid = await task.isValid()

  if (isValid) {
    const insertedTask = await task.save()

    if (insertedTask) {
      return handleResponse({ body: insertedTask, statusCode: httpStatusCode.success.created })
    } else {
      return handleResponse({
        body: { message: 'An unexpected error caught on server. Please try again later' },
        statusCode: httpStatusCode.serverError.internalServerError
      })
    }
  } else {
    const errors = task.errors()
    return handleResponse({ body: { message: errors }, statusCode: httpStatusCode.clientError.badRequest })
  }
}

module.exports.handle = handle
