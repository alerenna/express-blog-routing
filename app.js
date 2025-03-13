const express = require ('express')
const app = express()
const port = 3005

//Start server liste
app.listen(port, () => {
    console.log(`The server is running on the port http://localhost:${port}`);
})

//Home routing
app.get('/', (req, res) => {
    res.send('Welcome to out server')
})

//Posts route

//Index
app.get('/api/v1/posts', (req,res) => {
    res.send('Return all posts here')
})

//Show
app.get('/api/v1/post/:id', (req,res) => {
    res.send(`Return post with id: ${req.params.id}`)
})

//Store
app.post('/api/v1/posts', (req,res) => {
    res.send('Add a new post')
})

//Update
app.put('/api/v1/post/:id', (req,res) => {
    res.send(`Update post with id: ${req.params.id}`)
})
//Modify
app.patch('/api/v1/post/:id', (req,res) => {
    res.send(`Modify post with id: ${req.params.id}`)
})

//Destroy
app.delete('/api/v1/post/:id', (req,res) => {
    res.send(`Delete post with id: ${req.params.id}`)
})
