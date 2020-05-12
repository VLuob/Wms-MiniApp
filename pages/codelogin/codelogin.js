// pages/codelogin/codelogin.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navh: app.globalData.statusBarHeight, //头部高度
    flag: false, //正则验证
  },
  go() { //返回
    wx.navigateBack({
      delta: 1,
    })
  },
  phone: function(e) { //手机号输入框
    this.setData({
      phone: e.detail.value
    })
  },
  submit: function(e) { //发送验证码
    console.log(e, this.data.phone)
  },
  clsChange: function() { //清除手机号
    this.setData({
      inputvalue: "",
      phone: ""
    })
  },
  codeChange: function(e) { //验证码输入框
    var val = e.detail.value
    if (val.length === 4) {
      var reg = reg = /^\d{4}$/; //验证码正则
      if (reg.test(val)) {
        this.setData({
          val,
          bl: "09f",
          flag: true
        })
      }
    } else {
      this.setData({
        flag: false
      })
    }
  },
  loginChange: function() { //登录
    if (this.data.flag === true) {
      console.log(this.data.val)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //
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