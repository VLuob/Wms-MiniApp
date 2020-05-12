// pages/perfectinfo/perfectinfo.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navh: app.globalData.statusBarHeight,
    flag: false, //正则验证
  },
  go() { //返回
    wx.navigateBack({
      delta: 1,
    })
  },
  codeChange: function(e) { //验证码输入框
    var val = e.detail.value
    if (val.length === 4) {
      var reg = reg = /^\d{4}$/; //验证码正则
      if (reg.test(val)) {
        this.setData({
          val,
          flag: true
        })
      }
    } else {
      this.setData({
        flag: false
      })
    }
  },
  subChange: function() { //提交
    var val = this.data.val
    if (this.data.flag === true) {
      console.log(val)
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