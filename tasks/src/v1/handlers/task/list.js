const { handleResponse, httpStatusCode } = require('../../helpers')
const { Task } = require('../../models')

const handle = async (event, context) => {
  const { page = 1, offset = 10, sort = 'title', order = 'desc', search = "" } = event.queryStringParameters || {}

  const parsedPage = parseInt(page)
  const parsedOffset = parseInt(offset)

  const orderedSort = { [sort]: order === 'asc' ? 1 : -1 }

  const task = new Task({ page: parsedPage - 1, offset: parsedOffset, sort: orderedSort, search })

  const tasks = await task.list()

  let total

  if (search) {
    total = tasks.length
  } else {
    total = await task.countDocuments({ deletedAt: { $exists: false } })
  }

  const pagesAmount = total / offset

  const previous = parsedPage <= 1 ? null : parsedPage - 1
  const next = parsedPage >= pagesAmount ? null : parsedPage + 1

  const response = {
    data: tasks,
    pagination: {
      previous,
      current: parsedPage,
      next,
      totalRecords: total,
      pagesAmount: Math.ceil(pagesAmount),
      sort,
      order
    }
  }

  return handleResponse({ body: response, statusCode: httpStatusCode.success.ok })
}

module.exports.handle = handle
