const mongoose = require('mongoose')

// 创建schema
const cateSchema = new mongoose.Schema({
  cateName:{
    type: String,
    required: true
  },
  cateIcon:{
    type:String,
    default:''
  },
  cateDesc:String,
  cateState:{
    type:String,
    default:'1'
  },
  pid:{
    type:String,
    default:0 
  }
})

// 创建model
const cateModel = mongoose.model('qf_cates', cateSchema)

module.exports = cateModel
