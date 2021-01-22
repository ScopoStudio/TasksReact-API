const dropEmptyAttributes = object => {
  Object.entries(object).forEach(([key, value]) => {
    if (value && typeof value === 'object') removeEmpty(value)
    else if (value === null || value === undefined || value === '') delete object[key]
  })
  
  return object
}

module.exports = dropEmptyAttributes
