const express = require('express')
const friendController = require('../controllers/friends.controller')
const friends = friendController.friends

let friendsRoute = express.Router()
friendsRoute.use( ( request , response , next) => {
    console.log('machine ip address ' , request.ip)
    next()
})
friendsRoute.get('/' , friendController.getAllFriends)
friendsRoute.get('/:friendId' ,friendController.getFriend)
friendsRoute.post('' , (friendController.addNewFriend))

module.exports = friendsRoute
