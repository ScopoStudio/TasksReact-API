module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'base_api'
    },
    binary: {
      version: '4.2.0',
      skipMD5: true
    },
    autoStart: false
  }
}
