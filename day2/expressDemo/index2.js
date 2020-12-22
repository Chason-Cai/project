const express = require('express')
const app = express()

app.use((req,res,next)=>{
  console.log(1);
  next();
  console.log("1-1")
})

app.use((req,res,next)=>{
  console.log(2);
  next();
  console.log("2-2")
})
app.use((req,res,next)=>{
  console.log(3);
  next();
  console.log("3-3")
})

app.get('/home', (req,res)=>{
  res.send('home')
})

app.listen(3000, ()=>{console.log('启动了')})
