const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const router = express.Router()
const _ = require('lodash');
const User = mongoose.model('user')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken');
const JWT_RESET_KEY = "jwtreset987";
const bcryptjs = require('bcryptjs');

function isAuth(req, res, next) {
    const authHeader= req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null){
        return res.sendStatus(401)
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken)=>{
        if(err){
            return res.sendStatus(403)
        }
        req.user=decodedToken
        next()
    })
}

router.post('/testAuth',isAuth,(req,res)=>{
    console.log('request to test auth:')
    console.log('decoded token:',req.user)
    User.findById(req.user._id, (err,userObj)=>{
        if(err){
            res.json({ "result": "err" })
        }
        else{
            res.json(userObj)
        }
    })
})



module.exports = router;