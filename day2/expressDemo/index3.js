const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// 路由
// 解析 urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// 解析json格式
app.use(bodyParser.json())

app.post('/home',(req,res)=>{
  console.log(req.body)
  res.send('post请求')
})

app.listen(3000, ()=>{ console.log('程序启动了') })
