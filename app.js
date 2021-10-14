const express = require('express')
const cors = require('cors')
require('./database/db')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use(cors({
    origin : 'http://localhost:8080',
    credentials : true
}))

const userRouter = require('./routes/users')
const blogRouter = require('./routes/blogs')
const adminRouter = require('./routes/admin')

app.use(userRouter)
app.use(blogRouter)
app.use(adminRouter)

app.get('/test', (req, res) => {
  res.send("success")
})
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})