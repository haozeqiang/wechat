// pages/hot/hot.js
// 引入util的公用方法
let util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fid:'',
    ftitle:'热卖商品',
    pro:[],
    pageIndex: 0,//商品分页页码
    pageSize: 6,//每页显示商品的数量
    hasMore: true,
  },
  toproinfo:function(e){
    util.toproinfo(e);
  },
  addcart:function(e){
    util.addcart(e);
  },
  //1.根据上一个页面传递的商品分类的id查询所有的数据
  getprolist: function (fid){
    if (!this.data.hasMore) {
      wx.showToast({
        title: '没有更多的了',
        icon: 'none'
      });
      return;
    }

    wx.request({
      url: 'http://127.0.0.1:3/indse',
      data: { pno: ++this.data.pageIndex, pageSize: this.data.pageSize ,fid:fid},
      success: (res) => {
        let pageCount = res.data.pageCount;
        //追加查询的结果，使用concat方法
        let data = this.data.pro.concat(res.data.data);
        let flag = this.data.pageIndex < pageCount;
        this.setData({ pro: data, hasMore: flag })
        //this.setData({pro:res.data})
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({fid:options.fid});
    this.getprolist(this.data.fid);
    //console.log(this.data.fid)
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
    this.getprolist(this.data.fid)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})