const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
   
    // 处理文件后缀名
    let fileArr = file.originalname.split('.')
    cb(null, file.fieldname + '-' + Date.now()+'.'+fileArr[fileArr.length-1])
  }
})

const upload = multer({ storage: storage })
module.exports = upload
