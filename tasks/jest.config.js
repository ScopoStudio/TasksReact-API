const secrets = require('./secrets.json')

module.exports = {
  preset: '@shelf/jest-mongodb',
  globals: {
    BASE_URL: `http://localhost:${secrets.provider.ENV.SERVERLESS_OFFLINE_PORT}/dev/v1`,
    BCRYPT_ROUNDS: 10,
    JWT_SECRET: 'J6D38dx5ikEs8RSgSnYnW5eawLg25NPhRJm2mTH5iNL6hLkr',
    JWT_EXPIRATION_TIME: '24h'
  }
}
