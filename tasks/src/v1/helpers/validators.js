const validateEmail = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/gi.test(email)
}

const validateLinkedin = url => {
  return url.includes('linkedin.com')
}

const validators = {
  validateEmail,
  validateLinkedin
}

module.exports = validators
