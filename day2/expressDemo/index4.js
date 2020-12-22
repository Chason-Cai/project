const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


const user = {
  userName: '小明',
  pwd: 123456
}
app.post('/login',(req,res)=>{
  const { userName, pwd } = req.body;
  /* 
  判断用户名是否正确？
    正确？
      判断密码
        正确？
          登录成功
        错误
          密码不对
    错误
      返回用户名不存在
      review
  */
  if (userName === user.userName) {  
    // 判断密码
    if (pwd === user.pwd) {
      res.send({
        code: 0,
        msg: '登录成功'
      })
    } else {
      res.send({
        code: -2,
        msg: '密码错误'
      })
    }
  } else {
    res.send({
      code: -1,
      msg: '用户名不存在'
    })
  }
  
})

app.listen(3000, ()=>{ console.log('程序启动了') })
