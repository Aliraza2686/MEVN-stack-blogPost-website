const express = require('express')
const Blog = require('../models/blog')

const router = express.Router()

router.get('/blog/add', async(req, res) => {
    let {
        title,
        language,
        codeone,
        codetwo,
        codethree,
        description,
        brief,
        createdAt
    } = req.body
    
    try{
       const blog = await new Blog({
            title,
            language,
            codeone,
            codetwo,
            codethree,
            description,
            brief,
            createdAt
        })
        await blog.save()
        res.status(201).send("blog added")
    }catch(error) {
        res.status(401).send(error.message)
    }
})

module.exports = router