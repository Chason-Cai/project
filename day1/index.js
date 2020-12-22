/* const fs = require('fs')

fs.readFile('./a.txt', (err, data)=>{
  console.log(data.toString())
})
 */
// require('./modules/a')

// 引入多个接口
/* const obj = require('./modules/b')

console.log(obj)
 */

/* const { a,b } = require('./modules/b')
console.log(a)
console.log(b)
 */
/* 
 const obj = require('./modules/c')
 console.log(obj)
 */

const fn = require('./modules/c')
// fn()
console.log(fn)
