const express = require ('express')
const app = express()
const port = 3005

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
