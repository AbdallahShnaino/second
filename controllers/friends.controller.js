

const friends = [
    {
        id : 0,
        name: "abdallah",
        age: 22
    },
    {
        id : 1,
        name: "mohammed",
        age: 33
    },
    {
        id : 2,
        name: "ali",
        age: 44
    },
]

 function addNewFriend (request , response) {
    let friendName = request.body.name
    if (!friendName){
        return response.status(400).json({error:'missing name'})
    }
    let obj = {
        id:friends.length,
        name:friendName
    }
    friends.push(obj)
    response.status(200).json(obj)
}
function getFriend ( request , response ) {
    let friendId = +request.params.friendId;
    let friend = friends[friendId]
    if (!friend) {
        return response.status(400).json({ error:'no id match' })
    }
    response.status(200).json(friends[friendId])
} 

function getAllFriends ( request , response ) {
    response.json(friends)
}

module.exports = {
    getAllFriends,getFriend,addNewFriend,friends,
}

