const express = require('express')
const router = express.Router()

//Index
router.get('/', (req,res) => {
    res.send('Return all posts here')
})

//Show
router.get('/:id', (req,res) => {
    res.send(`Return post with id: ${req.params.id}`)
})

//Store
router.post('/', (req,res) => {
    res.send('Add a new post')
})

//Update
router.put('/:id', (req,res) => {
    res.send(`Update post with id: ${req.params.id}`)
})
//Modify
router.patch('/:id', (req,res) => {
    res.send(`Modify post with id: ${req.params.id}`)
})

//Destroy
router.delete('/:id', (req,res) => {
    res.send(`Delete post with id: ${req.params.id}`)
})

module.exports = router