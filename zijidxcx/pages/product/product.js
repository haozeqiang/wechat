// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idx:1,
    pageIndex:1,//商品分页页码
    pageSize: 6,//每页显示商品的数量
    hasMore: true,
    pno:0,
    prop:[
      {pid:1,proptit:'全部'},
      { pid: 2, proptit: '发箍' },
      { pid: 3, proptit: '发夹' },
      { pid: 4, proptit: '飘带' },
      { pid: 5, proptit: '发圈' },
      { pid: 6, proptit: '特价' },
      { pid: 7, proptit: '套盒' },
      { pid: 8, proptit: '耳环' },
      { pid: 9, proptit: '项链' },
      { pid: 10, proptit: '项圈' },
      { pid: 11, proptit: '手链' },
      { pid: 12, proptit: '手包' },
    ],
    prolist:[],
    cs:[[1,2,3],[4,5,6],[7,8,9]],
    pid:1,
  },
  toprolist:function(e){
    if(this.data.pno>0){
      this.data.pno=this.data.pageIndex;
      if(this.data.pageIndex==1){
        this.data.prolist = [];
      }
    }
    else{
      this.data.prolist = [];
      this.pageIndex=1;
      ++this.data.pno;
    }
    let pid = e ? e.currentTarget.dataset.pid : 1;
    console.log(pid);
    // let pid = e.currentTarget.dataset.pid;
    this.setData({idx:pid})
    wx.request({
      url: 'http://127.0.0.1:3/indlist',
      data: { pno: this.data.pno, pageSize: this.data.pageSize,pid:pid},
      // data: { pno: ++this.data.pageIndex, pageSize: this.data.pageSize,pid:pid},

      success:(res)=>{
        //console.log(res);
        let pageCount = res.data.pageCount;
        let data = this.data.prolist.concat(res.data.data);
        let flag = this.data.pageIndex < pageCount;
        this.setData({prolist:data})  
        this.setData({ hasMore: flag})  //false
        console.log(this.data.prolist,this.data.hasMore)
      }
    })
  },

  //定义一个方法，点击当前元素，设置当前元素的下标等于index，用来控制是否添加class
  /*addclass:function(e){
    console.log(e)
  },*/
  //2.定义一个方法，点击跳转到商品详情页，携带参数商品id
  toproinfo:function(e){
    wx.navigateTo({
       url: '/pages/info/info?id=' + e.currentTarget.dataset.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.toprolist();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    ++this.data.pageIndex;
    if (!this.data.hasMore) {
      this.data.prolist = [];
      this.data.pno=0;
      wx.showToast({
        title: '没有更多的了',
        icon: 'none'
      });
      // this.setData({hasMore:true})
      return;
    }
    else{
      this.toprolist();
    }
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})