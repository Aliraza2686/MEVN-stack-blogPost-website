const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : true
    },
    email : {
        type : String,
        trim : true,
        required : true,
        unique : true,
        validate(input) {
            if(!validator.isEmail(input)) {
                throw new Error('Invalid Email Type')
            }
        }
    },
    password : {
        type : String,
        trim : true,
        required : true,
        minlength : 6
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User