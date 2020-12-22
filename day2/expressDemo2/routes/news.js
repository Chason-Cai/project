const router = require('express').Router()

router.get('/news',(req,res)=>{
  res.send('我是news页')
})


module.exports = router
