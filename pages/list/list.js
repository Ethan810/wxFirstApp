Page({
  data: {
    text: "Page list",
    items: [],
    isHidden: false,
    isInfinitHidden: true
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
    var that = this;
    wx.request({
      url: "http://datainfo.duapp.com/shopdata/getclass.php",
      success: function (result) {
        // this指针改变， 使用外面的this;
        that.setData({
          items: result.data,
          isHidden: true
        })
      }
    })
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  handleScrolltolower: function () {
    console.log(1);
    this.setData({
      isInfinitHidden: false
    });
    var that = this;
    setTimeout(function () {
      that.setData({
        isInfinitHidden: true
      })
    }, 2000);
  },
  handleScrolltoupper: function () {
    console.log("最上面");
  },
  handleTapEvent: function (ev) {
    //储存在本地数据库
    wx.setStorageSync("name",ev.target.dataset.myid);
    wx.navigateTo({
      url: '../listDetail/listDetail?myId='+ev.target.dataset.myid
    })
  }
})