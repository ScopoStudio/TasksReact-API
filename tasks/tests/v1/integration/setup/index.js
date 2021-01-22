const { node } = require('execa')
const { resolve } = require('path')

let serverlessProcess

const serverlessPath = resolve(__dirname, '../../../../node_modules/serverless/bin/serverless')

async function start() {
  serverlessProcess = node(serverlessPath, ['offline', 'start'])

  await new Promise(res => {
    serverlessProcess.stdout.on('data', data => {
      if (String(data).includes('[HTTP] server ready')) {
        res()
      }
    })
  })
}

async function shutdown() {
  serverlessProcess.cancel()

  await serverlessProcess
}

module.exports = { start, shutdown }
