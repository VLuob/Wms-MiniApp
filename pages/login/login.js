// pages/login/login.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navh: app.globalData.statusBarHeight,
  },
  go() { //返回
    wx.navigateBack({
      delta: 1,
    })
  },
  phonelogin() { //手机验证码登录跳转
    wx.navigateTo({
      url: '../codelogin/codelogin',
    })
  },

  getUserInfo: function(e) { //微信登录授权
    console.log(e)
    if (e.detail.errMsg !== 'getUserInfo:ok') {} else {
      var route = this.data.route
      wx.switchTab({
        url: route,
      })
      console.log(route)
      let {
        rawData,
        signature
      } = e.detail
      var name = JSON.parse(rawData)
      wx.setStorageSync('name', name.nickName)
      this.setData({
        open: false,
        rawData: rawData,
        signature: signature
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var login = app.globalData.userInfo
    console.log(login)
    /* 获取页面栈 */
    let pages = getCurrentPages()
    this.setData({
      route: pages[0].route.replace('pages', ('..'))
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})