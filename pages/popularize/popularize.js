// pages/popularize/popularize.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModalStatus: false,
  },

  handleItem(e){
    console.log('--当前点击--',e.currentTarget.dataset.item);
    this.util(this, 'open');
  },

  powerDrawer() {
    this.util(this, 'close');
  },

  //模态框动画
  util(that, currentStatu) {
    var animation = wx.createAnimation({
      duration: 200, 
      timingFunction: "ease-in-out",
      delay: 0
    });
    animation.opacity(0).scale(0).step();
    that.setData({
      animationData: animation.export()
    })
    setTimeout(function () {
      animation.opacity(1).scale(1).step();
      that.setData({
        animationData: animation
      })  
      if (currentStatu == "close") {
        that.setData({
          showModalStatus: false
        });
      }
    }.bind(that), 200)
    if (currentStatu == "open") {
      that.setData({
        showModalStatus: true
      });
    }
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