const router = require('express').Router()

router.get('/home',(req,res)=>{
  res.send('我是home页')
})


module.exports = router
