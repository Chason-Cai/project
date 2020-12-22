const https = require('https')
const cheerio = require('cheerio')
const targetUrl = "https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=index&fr=&hs=0&xthttps=111111&sf=1&fmq=&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&word=%E7%BE%8E%E5%A5%B3&oq=%E7%BE%8E%E5%A5%B3&rsp=-1"
https.get(targetUrl,(res) => {
  res.setEncoding('utf8');
  let rawData = '';
  let imgArr = []
  res.on('data', (chunk) => { 
    rawData += chunk
  });
  res.on('end', () => {   
    console.log("数据全部传输完毕了")
    
    const $ = cheerio.load(rawData)

    console.log($('img').attr('src'))

    $("img").each((i,ele)=>{
      imgArr.push($(ele).attr('src'))
    })


    console.log(imgArr)
    /* 
    分析 rawdata中
    img标签
    src拿出来

    $("img").each((i,el)=>{

    })
    */
  });
}).on('error', (e) => {
  console.error(`出现错误: ${e.message}`);
})
