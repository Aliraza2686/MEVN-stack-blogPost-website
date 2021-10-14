const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = (req, res, next) => {
   const token = req.header('Authorization')
   console.log(token)
   if(!token) {
       res.status(401).send("please authorize")
   }
   if(token) {
       jwt.verify(token, 'secret', async (error, decodedToken) => {
          if(error) {
              res.status(401).send("authorization required")
              return
          }else {
              const id = decodedToken.id
              const user = await User.findById(id)
              req.user = user
              next()
          }
       })
   }
}

module.exports = auth