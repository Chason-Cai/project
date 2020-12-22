const { _request } = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 一级分类
    cates: [],
    // 二级分类
    subCates: [],
    // 商品
    items: [],
    // 控制一级分类active
    num: 0,
    // 控制二级分类active
    num2: 0
  },
  /** 请求所有分类 */
  fetchCates() {
    _request({
      url: '/goods/getCategoryList'
    }).then(res => {
      console.log(res)
      if(res.data.code === 200){
        this.setData({
          cates: res.data.message
        })
        // 初始二级分类调用
        this.fetchSubCates()
      }
    })
  },
  /** 点击一级分类 切换二级分类 */
  changeCate(e){
    const {index} = e.currentTarget.dataset;
    this.setData({
      num: index,
      num2: 0
    })
    this.fetchSubCates()
    
  },
  // 导航分类 获取所有二级分类 的请求
  fetchSubCates() {
    _request({
      url: '/goods/getCategorySubList',
      method: 'POST',
      data: {
        categoryId: this.data.cates[this.data.num].ID
      }
    }).then(res => {
      console.log(res)
      if(res.data.code === 200){
        this.setData({
          subCates: res.data.message
        })
        // 初次获取商品
        this.fetchItems()
      }
    })
  },

  /** 商品 */
  fetchItems() {
    // 请求推荐商品
    _request({
      url: '/goods/getGoodsListByCategorySubID',
      method: 'POST',
      data: {
        // 推荐商品类的id
        categorySubId: this.data.subCates[this.data.num2].ID
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

  /** 点击二级分类切换商品 */
  changeSubCate(e) {
    const {index} = e.currentTarget.dataset;
    this.setData({
      num2: index
    })
    this.fetchItems()
  },
  /** 生命周期函数--监听页面加载 */
  onLoad: function (options) {
    this.fetchCates()
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