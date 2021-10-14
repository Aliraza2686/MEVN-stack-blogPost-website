const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = express.Router()

const admin = async () => {
    const name = 'ali'
    const email = 'ali@gmail.com'
    const password = 'gold12'
    const hashedPassword = await bcrypt.hash(password, 8)

    const user = new User({
        name,
        email,
        password : hashedPassword,
        isAdmin : true
    })

    await user.save()
}

router.post('/login', async(req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    const user = await User.findOne({email})
    if(user) {
      const isMatch = await bcrypt.compare(password, user.password)
      if(!isMatch && !user) {
          res.send({error : "invalid Credentials"})
          return
      }
      else  if(!isMatch) {
        res.send({error : "Invalid Password"})
        return
      }else{
        const token = jwt.sign({id : user.id}, 'secret')
        res.status(201).send({user, token})
      }
    }else {
      res.send({error : "Invalid Email"})
      return
    }  
})

module.exports = router