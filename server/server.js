const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const knex = require('knex')
const bcrypt = require('bcrypt')
const morgan = require('morgan')

const signup = require('./controllers/signup')
const login = require('./controllers/login')
const profile = require('./controllers/profile')
const image = require('./controllers/image')

if(process.env.NODE_ENV !== 'production') require('dotenv').config()

const db = knex({
    client: 'pg',
    connection: process.env.POSTGRES_URI
})

const app = express()
const PORT = process.env.APP_SERVER_PORT

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
}

app.post('/signup', signup.handleSignUp(db, bcrypt))
app.post('/login', login.handleLogin(db, bcrypt))
app.get('/profile/:id', profile.handleProfile(db))
app.post('/clarifai', image.handleApiCall())
app.post('/updateScore', image.updateScore(db))

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))