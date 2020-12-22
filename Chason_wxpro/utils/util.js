function _request(params = {}){
  const baseUrl= 'http://localhost:3000';
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '...',
    })
    wx.request({
      url: baseUrl + params.url,
      data: params.data || '',
      header: {
        // 处理token问题
        token: wx.getStorageSync('token') || ''
      },
      timeout: params.timeout || 3000,
      method: params.method || 'GET',
      dataType: params.dataType || 'json',
      success(res) {
        if(res.data.code === 401 || res.data.code === 402) {
          // 没有携带token跳转到登录页
          wx.navigateTo({
            url: '/pages/login/login',
          })
        }
        resolve(res)
      },
      fail(err) {
        reject(err)
      },
      complete() {
        wx.hideLoading()
      }
    })
  })
}

module.exports = {
  _request: _request
}
