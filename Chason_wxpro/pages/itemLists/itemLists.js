const { _request } = getApp();
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    /** 定义分类 */
    subCates: [],
    /** 分类下的商品 */
    items: [],
    /**  */
    num: 0
  },
  // 导航分类 获取所有二级分类 的请求
  fetchSubCates(id) {
    _request({
      url: '/goods/getCategorySubList',
      method: 'POST',
      data: {
        categoryId: id
      }
    }).then(res => {
      console.log(res)
      if(res.data.code === 200){
        this.setData({
          subCates: res.data.message
        })
        // 获取商品 第一次在这里调用,不然没有id传
        this.fetchItems()
      }
    })
  },
  /** 商品 */
  fetchItems() {
    // 到底部不发送请求
    // if(this.data.isBottom) {
    //   return null;
    // }
    // 请求推荐商品
    _request({
      url: '/goods/getGoodsListByCategorySubID',
      method: 'POST',
      data: {
        // 推荐商品类的id
        categorySubId: this.data.subCates[this.data.num].ID,
        // 显示的页码
        page: this.data.page,
        // 每页显示的条数
        pageSize: this.data.pageSize
      }
    }).then(res=>{
      console.log(res)
      if(res.data.code === 200){
        this.setData({
          items: res.data.message
          // items: [...this.data.items,...res.data.message]
        })
      }
    })
  },
  /** 传商品id,进入详情页 */
  enterDetail(e) {
    const {id} = e.currentTarget.dataset;
    console.log(id)
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
    })
  },
  /** 点击分类切换商品 */
  changeCate(e) {
    const {index} = e.currentTarget.dataset;
    this.setData({
      num: index
    })
    this.fetchItems()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchSubCates(options.id)
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
