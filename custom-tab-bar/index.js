Component({
  data: {
    selected: 0,
    color: "#999",
    selectedColor: "#63C2F9",
    "list": [
      {
        "selectedIconPath": "/images/indexS.png",
        "iconPath": "/images/index.png",
        "pagePath": "/pages/index/index",
        "text": "首页"
      },
      {
        "selectedIconPath": "/images/newsS.png",
        "iconPath": "/images/news.png",
        "pagePath": "/pages/news/news",
        "text": "消息"
      },
      {
        "selectedIconPath": "/images/userS.png",
        "iconPath": "/images/user.png",
        "pagePath": "/pages/user/user",
        "text": "我的"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})