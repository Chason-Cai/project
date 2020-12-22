const router = require('express').Router();

const sign ="";
const arr = [
  {
    name:"唐僧",
    feature:'和尚'
  },
  {
    name:"孙悟空",
    feature:'猴子'
  },
  {
    name:"猪八戒",
    feature:'猪'
  },
  {
    name:"沙悟净",
    feature:'河妖'
  }
]
// 富文本数据
const richText = `
  <div>
    <h2 style="text-align:center;color:red">我是标题</h2>
  </div>
`
router.get('/home', (req, res)=>{
  // res.send('我是home页')
  res.render('home', {
    sign,
    arr,
    richText
  })
})

router.post('/home', (req, res)=>{
  res.send({
    code: 0,
    msg: '登录成功',
    data: null
  })
})  

module.exports = router
