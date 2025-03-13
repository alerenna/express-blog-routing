const express = require ('express')
const app = express()
const port = 3005
const posts = require('./posts')

//Router for posts
const postsRouter = require('./routers/router-posts')

//Start server liste
app.listen(port, () => {
    console.log(`The server is running on the port http://localhost:${port}`);
})

//Home routing
app.get('/', (req, res) => {
    res.send('Welcome to out server')
})

//Posts route
app.use('/api/v1/posts', postsRouter)

/*

Bonus
Provare a restituire la lista dei post dalla rotta index, in formato json
Provare a restituire un singolo post dalla rotta show, sempre in formato json

 */




