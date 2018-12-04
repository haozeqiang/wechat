// pages/info/info.js

// 引入util的公用方法
let util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //words:true,
    infopic:[],
    pro:[],
    what:true,
    count:1,
    list: [],
  },
  /*add: function (e) {
    util.add(e);
  },
  ofadd: function (e) {
    util.ofadd(e);
  },*/
  //显示对话框
  showModal: function (e) {
    if (e.target.dataset.h==='a'){
      this.setData({what:true})
      }else{
        this.setData({what:false})
      }
    // 显示遮罩层
    //this.setData({ what:!true})
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function (e) {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  //1.根据上一个页面传递过来的商品id去数据库查询此id的商品所有信息
  getinfo:function(id){
    //console.log(e);
    wx.request({
      url: 'http://127.0.0.1:3/proinfo?id='+id,
      success:(res)=>{
        this.setData({pro:res.data})
        this.setData({ list: res.data[0].banpic.split(',')})
        this.setData({ infolist: res.data[0].infopic.split(',')})
        //console.log(this.data.pro)
      }
    })
  },
  //2.点击tohome
  tohomoe:function(){
    wx.reLaunch({
      url: '/pages/home/home',
    })
  },

  //3.点击加减实现数量的改变
  add: function(e) {
    this.setData({count:++this.data.count})
  },
  ofadd: function (e) {
    if (this.data.count <2) {
       return;
      }else{
      this.setData({ count: --this.data.count })
    }
  },
  //4.点击向购物车数据库添加数据
  tocart:function(e){
    let id = this.data.pro[0].id,
        sl=this.data.count,
        pic=this.data.pro[0].pic,
        title=this.data.pro[0].title,
        price=this.data.pro[0].price;
    wx.request({
      url: 'http://127.0.0.1:3/chcart',
      data: { id, sl, pic, title, price }
    })
    success: (res) => {
      
    }
    this.hideModal();
    wx.showToast({
      title: '添加成功',
      icon: 'success',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getinfo(options.id);
    //console.log(options)
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