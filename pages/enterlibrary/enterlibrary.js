// pages/enterlibrary/enterlibrary.js
//获取应用实例
const app = getApp()
const {
  _Post,
  _Get
} = require('../../common/request')
const API = require('../../common/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navh: app.globalData.statusBarHeight,
    carType: ['半挂', '火车', '飞机'],
    list: [{
      name: "吨位",
      checked: true
    }, {
      name: "板书"
    }, {
      name: "不需要"
    }],
    selVal: '' //选中的值
  },
  go() { //返回
    wx.navigateBack({
      delta: 1,
    })
  },
  carTypeChange: function(e) { //车型
    this.setData({
      carTypeVal: this.data.carType[e.detail.value]
    })
  },
  arriveDateChange: function(e) { //预计到达时间
    this.setData({
      arriveDateVal: e.detail.value
    })
  },
  productionDateChange: function(e) { //生产日期
    this.setData({
      productionDateVal: e.detail.value
    })
  },
  qualityDateChange: function(e) { //保质期
    this.setData({
      qualityDateVal: e.detail.value
    })
  },
  // 单选操作
  selSingle: function(e) {
    var that = this,
      index = e.currentTarget.dataset.index,
      list = that.data.list,
      selVal = that.data.selVal;
    list.forEach(function(v, i) {
      if (index == i) {
        list[index].checked = true;
        var selVal = v.name
        that.setData({
          selVal: selVal
        })
      } else {
        list[i].checked = false;
      }
    })
    that.setData({
      list,
    })
  },
  submit: function(e) { //保存
    var that = this
    name = e.detail.value['name']
    carcode = e.detail.value['carcode']
    num = e.detail.value['num']
    phone = e.detail.value['phone']
    pname = e.detail.value['pname']
    pnum = e.detail.value['pnum']
    remarks = e.detail.value['remarks']
    weight = e.detail.value['weight']
    console.log(name, carcode, num, phone, pname, pnum, remarks, weight)
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