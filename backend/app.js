const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)

require('./config/conn')
require('./models/databaseConnectivity')
require('./config/passportConfig')

const auth=require('./routes/auth')
const user=require('./routes/user')

var app = express()

const corsOptions = {
    origin: [
        'http://localhost:4200'
    ],
    optionSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
    secret: 'flyweight',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth);
app.use('/user', user);

app.listen(process.env.PORT, () => console.log(`server is running at : ${process.env.PORT}`));