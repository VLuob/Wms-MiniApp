// pages/user/user.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navh: app.globalData.statusBarHeight,
    username: ""
  },
  userinfo() { //个人信息
    wx.navigateTo({
      url: '../userinfo/userinfo',
    })
  },
  transaction() { //交易记录
    wx.navigateTo({
      url: '../transaction/transaction',
    })
  },
  outrecord() { //预约出库
    wx.navigateTo({
      url: '../outrecord/outrecord',
    })
  },
  enterrecord() { //预约入库
    wx.navigateTo({
      url: '../enterrecord/enterrecord',
    })
  },
  login() { //登录
    wx.navigateTo({
      url: '../login/login',
    })
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
    this.setData({
      username: wx.getStorageSync("name")
    })
    /* tabbar */
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
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