const router = require('express').Router()
const upload = require('../utils/upload')

router.get('/upload', (req,res)=>{
  res.render('upload')
})

// 上传文件的路由
router.post('/upload', upload.single('img'), (req,res)=>{
  res.send({
    code:0,
    msg:'上传成功'
  })
})  
module.exports = router
