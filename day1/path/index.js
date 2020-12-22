const path = require('path')


// console.log(path.join('/a','/b','/c'))
// 单纯将路径片段拼接

console.log(path.resolve('/a','/b','c'))
// path.resolve 解析 路径参数，解析成绝对路径

