const https = require('https')
// 1，获取Top250 豆瓣电影
// https://api.douban.com/v2/movie/top250

module.exports = async (ctx) => {
  const {count} = ctx.request.query
  let url = 'https://api.douban.com/v2/movie/in_theaters?count=' + count || 20
  const datainfo = await getJSON(url)
  console.log(datainfo)
  ctx.state.data = {
    data: datainfo
  }
}

function getJSON (url) {
  return new Promise((reslove, reject) => {
    https.get(url, res => {
      let urlData = ''
      res.on('data', data => {
        urlData += data
      })
      res.on('end', data => {
        console.log(urlData)
        const datainfo = JSON.parse(urlData)
        if (datainfo) {
          reslove(datainfo)
        }
        reject(datainfo)
      })
    })
  })
}
