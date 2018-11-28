// pages/search/search.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 点击返回到上一页
  back:function(){
    console.log('返回')
    wx.navigateBack();
  },

  // 实现搜索功能
  suo: function (e) {
    var id = e.currentTarget.dataset.id
    var program_id = app.program_id;
    var that = this;
    wx.request({
      url: 'aaa.php',//这里填写后台给你的搜索接口
      method: 'post',
      data: { str: that.data.searchValue, program_id: program_id, style: id },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.length == 0) {
          that.setData({
            centent_Show: false,
          });
        }
        that.setData({
          nanshen_card: res.data,
        });
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    });
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