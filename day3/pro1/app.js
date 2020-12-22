const express = require('express')
const bodyParser = require('body-parser')
const homeRouter = require('./routes/home')
const newsRouter = require('./routes/news')
const uploadRouter = require('./routes/upload')
const app = express()
// "key=v&k=v"
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/static', express.static('./public')) 
// localhost:3000/static/imgs/lufei.png
// 配置ejs

// 告诉app 我们view 放置目录
app.set('views','./views')
// 告诉app 使用什么模板引擎
app.set('view engine', 'ejs')


app.use(homeRouter)
app.use(newsRouter)
app.use(uploadRouter)
app.listen(3000, ()=>{ console.log('start at port 3000') })
