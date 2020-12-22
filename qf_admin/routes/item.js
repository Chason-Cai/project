const router = require('express').Router();

router.get('/itemList', (req,res)=>{
  res.render('itemList')
})


module.exports = router
