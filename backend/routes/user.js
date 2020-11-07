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

router.get('/test',(req,res)=>{
    res.json({"result":"OK!"})
})

module.exports = router;