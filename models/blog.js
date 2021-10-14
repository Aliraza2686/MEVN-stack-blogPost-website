const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    language : {
      type : String,
      enum : ["javaScript", "node js", "vue js", "react js", "mongodb", "html", "css"]
    },
    codeone : {
        type : String
    },
    codetwo : {
        type : String
    },
    codethree : {
        type : String
    },
    brief : {
        type : String
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog