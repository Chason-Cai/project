const { _request } = getApp();
// import { _request } from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cates: [],
    subCateId: '2c9f6c946077476a0160781eb392000d',
    items: [],
    page: 1,
    pageSize: 10,
    isBottom: false
  },
  /** 宫格导航, 请求所有分类 */
  fetchCates() {
   _request({
      url: '/goods/getCategoryList'
    }).then(res => {
      console.log(res)
      if(res.data.code === 200){
        this.setData({
          cates: res.data.message
        })
      }
    })
  },
  /** 推荐商品 */
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
        categorySubId: this.data.subCateId,
        // 显示的页码
        page: this.data.page,
        // 每页显示的条数
        pageSize: this.data.pageSize
      }
    }).then(res=>{
      console.log(res)
      if(res.data.code === 200){
        if(res.data.message.length === 0){
          // 最后一页,数据加载完为空
          this.setData({
            isBottom: true
          })
        }
        this.setData({
          // items: res.data.message
          items: [...this.data.items,...res.data.message]
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
  /** 跳转到列表页 */
  enterItemLists(e) {
    const {id} = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/itemLists/itemLists?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchCates()
    this.fetchItems()
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
    this.fetchItems()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉触底")
    // 到底部不发送请求
    if(this.data.isBottom) {
      return false;
    }
    this.setData({
      page: ++this.data.page
    })
    this.fetchItems()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})