const router = require('express').Router();

router.get('/admin', (req,res)=>{
  res.render('admin')
})
router.get('/dashboard',(req,res)=>{
  res.render('dashboard')
})


module.exports = router
