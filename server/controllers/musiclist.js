const http = require('http')
// 1，获取qq音乐排行信息
// http://music.qq.com/musicbox/shop/v3/data/hit/hit_all.js

module.exports = async (ctx) => {
  let url = 'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&callback=&from=webapp_music&method=baidu.ting.billboard.billList&type=2&size=10&offset=0'
  const datainfo = await getJSON(url)
  ctx.state.data = {
    data: datainfo
  }
}

function getJSON (url) {
  return new Promise((reslove, reject) => {
    http.get(url, res => {
      let urlData = ''
      res.on('data', data => {
        urlData += data
      })
      res.on('end', data => {
        const datainfo = JSON.parse(urlData)
        if (datainfo) {
          reslove(datainfo)
        }
        reject(datainfo)
      })
    })
  })
}
