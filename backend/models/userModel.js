const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password: {
        type: String,
        default: ''
    },
    saltSecret: String,
    verified: {
        type: Boolean,
        default: false
    }
})


//verifying the password when user enters it into the login form with password in database
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

//generating jwt token for a user
userSchema.methods.generateJwt = function () {
    console.log("Inside generatedJwt token")
    return jwt.sign({ _id: this._id, name: this.name },
        process.env.JWT_SECRET,
        /* {
            expiresIn: process.env.JWT_EXP
        } */
    )
}


mongoose.model('user', userSchema);