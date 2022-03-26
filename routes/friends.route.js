const express = require('express')
const friendController = require('../controllers/friends.controller')
const friends = friendController.friends

let friendsRoute = express.Router()
friendsRoute.get('/' , friendController.getAllFriends)
friendsRoute.get('/:friendId' ,friendController.getFriend)
friendsRoute.post('' , (friendController.addNewFriend))

module.exports = friendsRoute
