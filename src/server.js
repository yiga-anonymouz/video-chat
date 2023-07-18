const path = require('path')
const express = require('express')
const axios = require('axios').default()
const router = require('./routes/routes')


const app = express()


app.use(router)