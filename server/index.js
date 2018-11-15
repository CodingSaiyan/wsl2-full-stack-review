const express = require('express')
const session = require('express-session')
const massive = require('massive')
const bodyParser = require('body-parser')
require('dotenv').config()

const AuthCtrl = require('./controllers/Auth')
const PostCtrl = require('./controllers/Post')

const app = express()

const { CONNECTION_STRING, SERVER_PORT: PORT, SESSION_SECRET } = process.env


massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('db connected!')
})

app.use(bodyParser.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: false
}))

app.post('/auth/login', AuthCtrl.login)
app.post('/auth/register', AuthCtrl.register)
app.get('/auth/logout', AuthCtrl.logout)
app.get('/auth/currentUser', AuthCtrl.getCurrentUser)

app.post('/api/posts', PostCtrl.create)
app.get('/api/posts', PostCtrl.read)
app.get('/api/posts/:id', PostCtrl.getPost)
app.put('/api/posts/:id', PostCtrl.update)
app.delete('/api/posts/:id', PostCtrl.delete)

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
