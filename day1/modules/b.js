exports.a = 10;
exports.b = "nodejs";
exports.c = {
  name: 'node真好玩'
}
exports.d = () => {
  console.log('你骗人，node不好玩')
}

/* 
向外提供了多个接口
分别是 a b c d

相当于 {
  a,
  b,
  c,
  d
}
*/
