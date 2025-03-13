const express = require('express')
const router = express.Router()
const posts = require('../posts')

//Index
/* router.get('/', (req,res) => {
    res.send('Here you find all the posts')
}) */
//BONUS | Provare a restituire la lista dei post dalla rotta index, in formato json
router.get('/', (req,res) => {
    res.send(posts)
})

//Show
/* router.get('/:slug', (req,res) => {
    res.send(`Here the post with slug: ${req.params.slug}`)
}) */

//BONUS | Provare a restituire un singolo post dalla rotta show, sempre in formato json
router.get('/:slug', (req,res) => {
    
   const post = posts.find(post => req.params.slug === post.slug)

   res.send(post)
})

//Store
router.post('/', (req,res) => {
    res.send('Add a new post')
})

//Update
router.put('/:slug', (req,res) => {
    res.send(`Update post with slug: ${req.params.slug}`)
})
//Modify
router.patch('/:slug', (req,res) => {
    res.send(`Modify post with slug: ${req.params.slug}`)
})

//Destroy
router.delete('/:slug', (req,res) => {
    res.send(`Delete post with slug: ${req.params.slug}`)
})

module.exports = router