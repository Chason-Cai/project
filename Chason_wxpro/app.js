//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  isLogin(){
    // 根据token判断是否登录, 若token为空, !token值为true, !!token为false
    return !!wx.getStorageSync('token')
  },
  baseUrl: 'http://localhost:3000',
  _request(params = {}){
    return new Promise((resolve, reject) => {
      wx.showLoading({
        title: '...',
      })
      wx.request({
        url: this.baseUrl + params.url,
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
  },
  globalData: { 
    // userInfo: null
  }
})