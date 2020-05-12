let request = ({
  url,
  method,
  data = {}
}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data,
      header: {
        'content-type': 'application/json', // 默认值
      },
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error)
      },
      complete() {
        // 加载完成
      }
    })
  })
}

module.exports = {
  _Get: (url) => {
    return request({
      url,
      method: 'get'
    })
  },
  _Post: (url, data) => {
    return request({
      url,
      method: 'post',
      data
    })
  },
}