// Schema 集合 映射 在schema定义这个集合结构（哪些字段、字段验证...）
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// 创建学生collection schema 
const stuSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  gender:{
    type:Number,
    default:1
  }
})

// 创建集合 model 对象（模型）
const stuModel = mongoose.model('qf_stus', stuSchema)


module.exports = stuModel
