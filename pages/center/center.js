// pages/center/center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleNav(e) {
    let nav = e.currentTarget.dataset.tag;
    if (nav == '1') {
      wx.navigateTo({
        url: '/pages/message/message',
      })
    } else if (nav == '2') {
      wx.navigateTo({
        url: '/pages/equipment/equipment',
      })
    } else if (nav == '3') {
      wx.navigateTo({
        url: '/pages/profit/profit',
      })
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