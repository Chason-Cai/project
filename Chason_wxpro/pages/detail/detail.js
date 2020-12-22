const { _request } = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    content: ''
  },
  /** 获取详情数据 */
  fetchDetail(id) {
    _request({
      url:'/goods/getDetailGoodsInfo',
      method: 'POST',
      data: {
        goodsId: id
      }
    }).then(res => {
      console.log(res)
      if(res.data.code === 200) {
        this.setData({
          detail: res.data.message,
          content: res.data.message.DETAIL.replace(/<img/g,'<img style="display:block"')
        })
        console.log(this.data.detail)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.fetchDetail(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})