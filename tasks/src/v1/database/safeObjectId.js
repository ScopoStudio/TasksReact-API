const ObjectId = require('mongodb').ObjectId

const safeObjectId = id => {
  try {
    convertedId = ObjectId(id)
    return convertedId
  } catch (error) {
    return false
  }
}

module.exports = safeObjectId
