const handleResponse = ({ body = null, statusCode = 200 }) => {
  if (!body && statusCode === 200) {
    statusCode = 204
  }

  let objectToReturn = {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }
  }

  if (body) {
    objectToReturn.body = JSON.stringify(body)
  }

  return objectToReturn
}

module.exports = handleResponse
