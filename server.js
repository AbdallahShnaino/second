
const { request } = require('express');
const express = require('express');
const app = express();
const PORT = 3000;
const friendController = require('./controllers/friends.controller')
const friends = friendController.friends
const messagesController = require('./controllers/messages.controller')
const messages = messagesController.messages
app.use( (req , res , next) => {
    const start = Date.now();
    next()
    let time = Date.now() - start;
    console.log(`url : ${req.url} method : ${req.method} time : ${time}`)
} )
app.use(express.json())


app.get('/' , ( req , res) => {
    res.send({id:0 , name:"mohammed"});
});

app.get('/friends' , friendController.getAllFriends)
app.get('/friends/:friendId' ,friendController.getFriend)
app.post('/friends' , (friendController.addNewFriend))
app.get('/messages' , messagesController.getMessages)
app.get('/messages/:messageId' , messagesController.getMessage)
app.post('/messages' , messagesController.addNewMessage)
app.listen(PORT , () => {
    console.log(`listning to port ${PORT}`);
})