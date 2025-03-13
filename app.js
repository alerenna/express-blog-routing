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



