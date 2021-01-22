const tokenFormatter = (token = '') => {
  return token.replace('Bearer ', '')
}

module.exports = tokenFormatter
