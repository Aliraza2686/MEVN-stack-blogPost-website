const express = require('express')
const Blog = require('../models/blog')
const auth = require('../auth/auth')

const router = express.Router()

const insert = async() => {
    const title = 'vuex mapActions'
    const language = 'vue js'
    const codeone = 'let mapActions = vuex.mapActins'
      const brief = 'Lorem Ipsum is simply dummy text of the printing and '
      const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    const blog = new Blog({
        title,
        language,
        codeone,
        description,
        brief
    })
    await blog.save()
}

router.get('/blogs', async(req, res) => {
    try {
        const blogs = await Blog.find({}).sort({
          createdAt : -1
        })

        res.status(201).send(blogs)
    }catch(error) {
        res.status(401).send(error.message)
    }
})

router.get('/blog/:id', async(req, res) => {
    const id = req.params.id
    try {
      const blog = await Blog.findById(id)
      res.status(201).send(blog)
    }catch(error) {
       res.status(401).send(error.message)
    }
})

router.post('/add/blog', auth, async(req, res) => {
  const  {
    title,
    language,
    codeone,
    codetwo,
    codethree,
    description,
    brief
  } = req.body

 try{
   const blog = new Blog({
    title,
    language,
    codeone,
    description,
    brief,
    codetwo,
    codethree
   })
  await blog.save()
  console.log(blog)
  res.status(201).send({message : "Blog added"})
 }catch(error) {
   res.status(401).send({error : error.message})
 }
})

router.delete('/delete/blog/:id', auth, async(req, res) => {
  const id = req.params.id
  try{
   const blog = await Blog.findByIdAndDelete(id)
   res.status(201).send({success : "Blog Deleted"})
  }catch(error) {
    res.status.length(401).send({error : error.message})
  }
})
router.patch('/update/blog/:id', auth, async(req, res) => {
  const id = req.params.id
  const  {
    title,
    language,
    codeone,
    codetwo,
    codethree,
    description,
    brief
  } = req.body

  const data = {
    title,
    language,
    codeone,
    codetwo,
    codethree,
    description,
    brief
  }

  try{
    const blog = await Blog.findByIdAndUpdate(id, data, {
      new : true,
      runValidators : true
    })
    await blog.save()
    res.status(201).send({success : "Blog updated"})
  }catch(error) {
   res.status(400).send({error : "an error occurd"})
  }
})
module.exports = router