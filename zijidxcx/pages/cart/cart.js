// pages/cart/cart.js
// 引入util的公用方法
let util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isdel:true,
    isdelcount:true,
    count:1,
    cartlist:[],
  },
  // 点击编辑显示删除头
  showdel:function(){
    switch (this.data.isdelcount){
      case true:
        this.setData({ isdel: false, isdelcount: false });
        break;
      case false:
        this.setData({ isdel: true, isdelcount: true });
        break;
    }
  },
  /*add: function (e) {
    util.add(e);
  },
  ofadd: function (e) {
    util.ofadd(e);
  },*/
  //1.创建一个方法，在页面加载时候查询购物车所有数据
  getcart:function(){
    wx.request({
      url: 'http://127.0.0.1:3/getcart',
      success:(res)=>{
        this.setData({ cartlist: res.data })
        console.log(this.data.cartlist);
      }
    })
  },
  //2.点击加减实现数量的改变
  add: function (e) {
    console.log(e)
    this.setData({ count: ++this.data.count })
  },
  ofadd: function (e) {
    if (this.data.count < 2) {
      return;
    } else {
      this.setData({ count: --this.data.count })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getcart();
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})