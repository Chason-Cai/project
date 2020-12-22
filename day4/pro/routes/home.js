const router = require('express').Router();
const stuModel = require('../model/stu')

router.get('/home',async (req,res)=>{
  // 取数据
 /*  stuModel.find({}).then(res=>{
    console.log(res)
  }).catch(err=>{

  }) */
  let re = await stuModel.find({});
  console.log(re)
  res.render('home',{
    stus: re
  })
})




module.exports = router
