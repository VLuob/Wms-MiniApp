//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    navh: app.globalData.statusBarHeight,
    show: false, //遮罩层
    arr: [{
      name: "出库",
      checked: true
    }, {
      name: "入库"
    }],
    selVal: "出库", //预约项目选择值(默认出库)
  },
  selSingle: function(e) { //预约项目
    var that = this,
      index = e.currentTarget.dataset.index,
      arr = that.data.arr,
      selVal = that.data.selVal;
    arr.forEach(function(v, i) {
      if (index == i) {
        arr[index].checked = true;
        var selVal = v.name
        that.setData({
          selVal: selVal
        })
      } else {
        arr[i].checked = false;
      }
    })
    that.setData({
      arr,
    })
  },
  okChange: function() { //选择预约项目
    if (this.data.selVal == "入库") {
      wx.navigateTo({
        url: '../enterlibrary/enterlibrary',
      })
    } else {
      wx.navigateTo({
        url: '../outlibrary/outlibrary',
      })
    }
    this.setData({
      show: false
    })
  },
  onClickShow() { //遮罩显示
    this.setData({
      show: true
    });
  },

  onClickHide() { //遮罩隐藏
    this.setData({
      show: false
    });
  },
  search() {
    wx.navigateTo({ //搜索
      url: '../search/search',
    })
  },
  enterrecord() { //入库
    wx.navigateTo({
      url: '../enterlibrary/enterlibrary',
    })
  },
  outrecord() { //出库
    wx.navigateTo({
      url: '../outlibrary/outlibrary',
    })
  },
  library() { //库存
    wx.navigateTo({
      url: '../library/library',
    })
  },
  transaction() { //单据历史
    wx.navigateTo({
      url: '../transaction/transaction',
    })
  },
  enterrecord() { //入库记录
    wx.navigateTo({
      url: '../enterrecord/enterrecord',
    })
  },
  outrecord() { //出库记录
    wx.navigateTo({
      url: '../outrecord/outrecord',
    })
  },
  onLoad: function() {

  },
  onShow: function() {
    /* 获取页面栈 */
    // let pages = getCurrentPages()
    // this.setData({
    //   route: pages[0].route.replace('pages', ('..'))
    // })
    /* tabbar */
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
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