// 工具函数库
import config from './config'

// http get工具函数 获取数据
export function get (url, data) {
  return request(url, 'GET', data)
}

// http post工具函数 获取数据
export function post (url, data) {
  return request(url, 'POST', data)
}

function request (url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          showModel('操作失败', res.data.data.msg)
          reject(res.data)
        }
      }
    })
  })
}

// 显示繁忙提示
export function showBusy (text) {
  wx.showToast({
    title: text,
    icon: 'loading',
    duration: 10000
  })
}

// 显示成功提示
export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}

// 显示失败提示
export function showError (title, content) {
  wx.hideToast()
  wx.showModal({
    title,
    content: JSON.stringify(content),
    showCancel: false
  })
}

// 显示弹框提示
export function showModel (title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
    // success: function (res) {
    //   if (res.confirm) {
    //     console.log('用户点击确定')
    //   } else if (res.cancel) {
    //     console.log('用户点击取消')
    //   }
    // }
  })
}
