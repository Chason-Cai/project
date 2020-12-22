const fs = require('fs')
// 读文件
/* fs.readFile('../a.txt',{
  encoding: 'utf8'
} ,(err, data)=>{

  console.log(err)
  if(err){
    console.log('xxx出错了');
    return;
  }
  // 程序没问题
  console.log(data)
}) */
/*
const res = fs.readFileSync('../../a.txt', { encoding:'utf8' })
console.log(res)
*/

/* try{
  const res = fs.readFileSync('../../a.txt', { encoding:'utf8' })
  console.log(res)
}catch(err){
  console.log("出错了")
  console.log(err)
}
console.log(111) */
/* 
设置回调函数时，应该优先处理错误
一般会将 错误放在第一个参数中

const err = new Error("我是一个自定义错误");

throw(err)

*/

// 写文件  writeFile


/* fs.writeFile('../b.txt','node大法好、干掉php不是梦',(err)=>{
  if(err){
    console.log('写入失败')
  }
}) */
// 可以是已存在的文件。也可以是不存在的，不存在的话，会将原来的文件内容覆盖

// 默认追加 文件  appendFile

/* fs.appendFile('../b.txt','node好恶心，知识点好零碎', (err)=>{
  if(err){
    console.log('追加失败')
    return;
  }

}) */

// 删除文件

/* fs.unlink('../b.txt',(err)=>{
  if(err){
    console.log('删除失败')
  }
})
 */
/* fs.rm('../b.txt',(err)=>{
  if(err){
    console.log('删除失败')
  }
})
 */
