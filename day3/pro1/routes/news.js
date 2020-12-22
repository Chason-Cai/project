const router = require('express').Router();

router.get('/news', (req, res)=>{
  res.render('news')
})

module.exports = router
