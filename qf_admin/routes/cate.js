const router = require('express').Router();
const cateModel = require('../models/cate')

router.get('/cateList', async (req,res)=>{
  // current pageSize
  let { current=1,pageSize=2 } = req.query;
  current = parseInt(current);
  pageSize = parseInt(pageSize);
  let cates = await cateModel.find().skip((current-1)*pageSize).limit(pageSize).sort({
    _id: -1
  })
  let count = await cateModel.count(); // 总条数
  
  res.render('cateList',{
    cates,
    count,
    current
  })
})
// 添加分类
router.get('/cateAdd',async (req,res)=>{
  const cates = await cateModel.find();
  res.render('cateAdd', {
    cates
  })
})
// 添加分类
router.post('/cateAdd', (req,res)=>{
  console.log(req.body)
  cateModel.insertMany(req.body).then(re=>{
    res.send({
      code:0,
      msg:'添加成功'
    })
  }).catch(err=>{
    res.send({
      code:-1,
      msg:'添加失败'
    })
  })
})
// 分类编辑
router.get('/cateEdit',async (req,res)=>{
  // 获取 get 传id 根据id 获取分类数据
  const { cateId } = req.query;
  const cate = await cateModel.findById(cateId);
 
  const cates = await cateModel.find();
  res.render('cateEdit',{
    cates,
    cate
  })
})
// 分类编辑post 
router.post('/cateEdit', (req,res)=>{
  // 根据_id更新
  cateModel.update({
    _id: req.body._id
  },{
    ...req.body
  }).then(re=>{
    res.send({
      code:0,
      msg:'更新成功',
    })
  }).catch(()=>{
    res.send({
      code:-1,
      msg:'更新失败',
    })
  })
  
})

// 删除分类
router.post('/delCate', (req,res)=>{
  const {cateId} = req.body;
  cateModel.remove({
    _id:cateId
  }).then(re=>{
    res.send({
      code:0,
      msg:'删除成功'
    })
  }).catch(er=>{
    res.send({
      code:-1,
      msg:'删除失败'
    })
  })

  
})
module.exports = router
