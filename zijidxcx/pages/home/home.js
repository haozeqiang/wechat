// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageIndex: 0,//商品分页页码
    pageSize: 6,//每页显示商品的数量
    hasMore: true,
    list:'',
    jiu: [
      {fid:1, name: '热卖', pic: 'http://localhost:3/img/home/hot.png' },
      {fid:2, name: '新品', pic: 'http://localhost:3/img/home/new.png' },
      {fid:3, name: '商家入驻', pic: 'http://localhost:3/img/home/sjrz.png' },
      {fid:4, name: '关于我们', pic: 'http://localhost:3/img/home/gywm.png' }
    ],
    pro:[],
    pic:[]
  },

  // 点击商品跳转到商品详情 根据商品的id
  toproductinfo:function(e){
    //console.log(e.currentTarget.dataset.fid)
    switch (e.currentTarget.dataset.fid){
      case 1:
        wx.navigateTo({ url: '/pages/hot/hot?fid=' + e.currentTarget.dataset.fid});
        break;
      case 2:
        wx.navigateTo({ url: '/pages/new/new?fid=' + e.currentTarget.dataset.fid });
        break;
      case 3:
        wx.navigateTo({ url: '/pages/pro/pro?fid=' + e.currentTarget.dataset.fid });
        break;
      case 4:
        wx.navigateTo({ url: '/pages/about/about?fid='+ e.currentTarget.dataset.fid });
        break;
    }
  },

  //1:创建一个方法，getImageList 获取服务器上的数据
  getImageList: function () {
    wx.request({
      url: 'http://127.0.0.1:3/indban',
      success: (res) => {
        this.setData({ list: res.data });
      }
    })
  },
  //2.创建一个方法 getrm获取数据
  getrm:function(){
    if (!this.data.hasMore) {
      wx.showToast({
        title: '没有更多的了',
        icon: 'none'
      });
      return;
    }

    wx.request({
      url: 'http://127.0.0.1:3/indrm',
      data: { pno: ++this.data.pageIndex, pageSize: this.data.pageSize },
      success:(res)=>{
        let pageCount = res.data.pageCount;
        //追加查询的结果，使用concat方法
        let data = this.data.pro.concat(res.data.data);
        let flag = this.data.pageIndex < pageCount;
        this.setData({ pro: data, hasMore: flag })
        //this.setData({ list: data, hasMore: flag })
        /*let a=[];
        for (let item of this.data.pro) {
         this.data.pic.push(item.pic.split(','))
        }*/
        //this.setData({pic:a})
        //console.log(this.data.pic)
        /*if (res.data.data.pic>1){
          this.setData({ pic: res.data.data.pic.split(',') });
        }else{
          this.setData({ banpic: res.data.data.pic });
        }*/
        //this.setData({ banpic: res.data.data.pic.split(',') });
        //console.log(this.data.pageIndex)
        //this.setData({pro:res.data});
      }
    })
  },
  /*//3.创建一个方法用来分割图片的数据，根据逗号隔开
  picfilter:function(){
    let arr=e.split(',');
    this.setData({pic:arr})
  },*/
  //4.创建一个方法，点击商品的时候根据商品的id前往商品详情页的信息，info
  toproinfo:function(e){
    //console.log(e.currentTarget.dataset.id)
    wx.navigateTo({ url: '/pages/info/info?id=' + e.currentTarget.dataset.id });
  },

  // 点击搜索框跳转到搜索界面
  suo: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getImageList();
    this.getrm();
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
    this.getrm();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})