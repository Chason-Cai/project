const express = require('express')
const bodyParser = require('body-parser')
const homeRouter = require('./routes/home') 
const uploadRouter = require('./routes/upload')
require('./model/connect')
const app = express ()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('./public'))

app.set('views','./views')
app.set('view engine','ejs')

app.use(homeRouter)
app.use(uploadRouter)
app.listen(3000,()=>{console.log('start at port 3000')})
