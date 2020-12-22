const express = require('express')
const bodyParser = require( 
const homeRouter = require('./routes/home')
const newsRouter = require("./routes/news")

const app = express()
// const router = express.Router();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static('./public'))
/* 
router.get()
router.post()
router.use()
*/

/* router.get('/home',(req,res)=>{
  res.send("我是home页")
})
router.get('/news',(req,res)=>{
  res.send('我是新闻页')
}) */
// 使用这个路由中间件

app.use(homeRouter)
app.use(newsRouter)
app.listen(3000, ()=>{ console.log('启动了 3000端口') })
