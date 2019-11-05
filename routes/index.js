'use strict'

const express = require('express')
const api = express.Router()
const userCtrl = require('../controllers/user')
const categoryCtrl = require('../controllers/category')
const tweetCtrl = require('../controllers/tweet')

api.post('/tweet',userCtrl, categoryCtrl, tweetCtrl)

module.exports = api