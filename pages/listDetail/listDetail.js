Page({
  data:{
    text:"Page listDetail",
    items:[],
    isHidden:false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.getData(options.myId);
  },
  getData:function(id){
    var that = this;
     wx.request({
      url: "http://datainfo.duapp.com/shopdata/getGoods.php",
      data:{classID:id},
      success: function (result) {
        //console.log(result.data);
        // this指针改变， 使用外面的this;
       var str = result.data.split("callback(");
       if(str.length >1){
         str = str[1].substring(0,str[1].length-1);
         that.setData({
           items:JSON.parse(str),
           isHidden:true
         })
       }
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  //获取到本地之前暂存的数据
    console.log(wx.getStorageSync("name"));
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})