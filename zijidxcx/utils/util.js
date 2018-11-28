const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// 前往商品详细=>根据商品id
function toproinfo(e){
  wx.navigateTo({
    url: '/pages/info/info?id=' + e.currentTarget.dataset.idx
  })
}

//点击添加购物车
function addcart(e){
  console.log(e.target.dataset.id)
  console.log('赶快去写添加到购物车的部分吧')
}

// 点击增加和修改商品的数量
function ofadd(e) {
  console.log('设置数量减少')
}

function add(e) {
  console.log('设置数量增加')
}


// 点击显示加入购物车和立即购买的按钮，去往的路径等待设置
/*
function showModal(e) {
  // 显示遮罩层
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
}

//隐藏对话框
function hideModal(e) {
  let that = this;
  // 隐藏遮罩层
  var animation = wx.createAnimation({
    duration: 200,
    timingFunction: "linear",
    delay: 0
  })
  that.animation = animation
  animation.translateY(300).step()
  that.setData({
    animationData: animation.export(),
  })
  setTimeout(function () {
    animation.translateY(0).step()
    that.setData({
      animationData: animation.export(),
      showModalStatus: false
    })
  }.bind(that), 200)
}
*/

module.exports = {
  formatTime: formatTime,
  toproinfo,
  addcart,
  ofadd,
  add,
  //hideModal,
  //showModal,
}
