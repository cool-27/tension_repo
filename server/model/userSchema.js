const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
   
   email: {
        type: String,
        required: true
    },
  
    pwd: {
        type: String,
        required: true
    }
   
})






const User = mongoose.model('USER', userSchema)

module.exports = User