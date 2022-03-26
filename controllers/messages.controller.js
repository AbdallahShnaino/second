const model = require('../models/message.model')
let messages = model.messages
function getMessages ( request , response) {
    response.status(200).json(messages)
}
function getMessage (request , response) {
    let messageId = +request.params.messageId
    let message = messages[messageId]
    if (!message) {
       return response.status(400).json({error:'uncurrect message number'})
    }
    response.status(200).json(message)
}

function addNewMessage ( request , response ) {
    let messageSender = request.body.sender
    let messageReciver = request.body.reciver
    if (!messageSender || !messageReciver) {
       return response.status(400).json({error:'no sender'})
    }
    let newMessage = {
        id:messages.length,
        sender:messageSender,
        reciver:messageReciver
    }
    messages.push(newMessage)
    response.status(200).json(newMessage)
}
module.exports = {
    getMessages,messages,getMessage,addNewMessage,
}