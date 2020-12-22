const express = require('express')
// 创建一个应用  启动了一个服务器
const app = express()

app.get('/home', (req, res)=>{

  // 接收get请求传过来参数
  console.log(req.query)
  /* 
  req 请求相关信息

  res 响应信息
  http://localhost:9527/home
  res.send()
  参数可以是字符串
  或者是对象
  */

  res.send('hello node')
})

// 创建一个中间件
const middleware1 = (req, res, next)=>{
  // 放行
  req.body={
    a: "哈哈哈上当了，这是假的body"
  }
  console.log('我拦截了')
  next();
}
// 使用中间件
// app.use(middleware1)
// 局部中间件
app.use('/home2', middleware1)
// post方法创建路由
app.post('/home', (req,res)=>{
  console.log(req.body)
  res.send("我是post请求")
})
app.post('/home2',(req,res)=>{
 
  res.send("我是post请求2")
})
// 指定应用端口
app.listen(9527, ()=>{ console.log('start at port 9527')  })
