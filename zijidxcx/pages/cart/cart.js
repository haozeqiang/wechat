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
    /*if (this.data.isdelcount){
      this.setData({ isdel: false, isdelcount: false });
    }else{
      this.setData({ isdel: true, isdelcount: true });
    }*/
    //this.setData({ isdel: false})
    console.log(this.data.isdel, this.data.isdelcount)
  },
  add: function (e) {
    util.add(e);
  },
  ofadd: function (e) {
    util.ofadd(e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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