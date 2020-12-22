const router = require('express').Router();
const upload = require('../utils/upload')

router.post('/upload', upload.single('file'), (req,res)=>{
  console.log(req.file);
  let filePath = '/uploads/'+req.file.filename
  res.send({
    code:0,
    data:{
      filePath
    },
    msg:"上传成功"
  })
})

module.exports = router
