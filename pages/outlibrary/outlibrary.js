// pages/outlibrary/outlibrary.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navh: app.globalData.statusBarHeight,
    list: [{
      id: "1"
    }, {
      id: "2"
    }, {
      id: "3"
    }],
    arr: [], //标签数组：用来存储选中的值
  },
  go() { //返回
    wx.navigateBack({
      delta: 1,
    })
  },
  //选择标签方法
  checkLabs(e) {
    var index = e.currentTarget.dataset.index
    var item = e.currentTarget.dataset.item
    var list = this.data.list
    var arr = this.data.arr
    var val = list[index].checked //点击前的值
    //点击前的值
    if (!val) {
      arr.push(item);
    } else {
      for (var i in arr) {
        if (arr[i].id == item.id) {
          arr.splice(i, 1);
        }
      }
    }
    list[index].checked = !val;
    this.setData({
      list,
      arr,
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