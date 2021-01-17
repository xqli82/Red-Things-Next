const http=require('http')
const express = require('express')

const app = express()
const server = http.createServer(app)

require('./init')(app)

//node-red init
const RED=require('./init/red')(app,server)

//start server
async function app_run(){
  await require('./init/nuxt_init')(app,server)
  RED.start()
}

app_run()
