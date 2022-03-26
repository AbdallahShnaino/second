const express = require('express')

const messagesController = require('../controllers/messages.controller')
const messages = messagesController.messages

let messageRoute = express.Router()
messageRoute.get('/' , messagesController.getMessages)
messageRoute.get('/:messageId' , messagesController.getMessage)
messageRoute.post('' , messagesController.addNewMessage)

module.exports = messageRoute
