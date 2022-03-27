
const express = require('express');
const app = express();
const PORT = 3000;

app.use( (req , res , next) => {
    const start = Date.now();
    next()
    let time = Date.now() - start;
    console.log(`url : ${req.baseUrl}/${req.url} method : ${req.method} time : ${time}`)
} )
app.use(express.json())




let messageRoute = require('./routes/messages.route')
let friendsRoute = require('./routes/friends.route')
app.use("/friends" , friendsRoute)
app.use("/messages" , messageRoute)


app.listen(PORT , () => {
    console.log(`listning to port ${PORT}`);
}
)



