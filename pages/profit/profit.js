// pages/profit/profit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navIndex:0,
    list:[],
  },
  
  handleItem(e){
    this.setData({
      navIndex: e.currentTarget.dataset.index,
      list: [
        {
          time: '13:00-14:00',
          count: Math.floor(Math.random() * 100)
        },
        {
          time: '12:00-14:00',
          count: Math.floor(Math.random() * 100)
        },
        {
          time: '14:00-15:00',
          count: Math.floor(Math.random() * 100)
        },
        {
          time: '17:00-20:00',
          count: Math.floor(Math.random() * 100)
        },
        {
          time: '20:00-21:00',
          count: Math.floor(Math.random() * 100)
        }
      ]
    });
  },

  handleToDetail(e){
    let item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '/pages/profitDetail/profitDetail?item='+JSON.stringify(item),
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      list:[
        {
          time:'13:00-14:00',
          count:215
        },
        {
          time: '12:00-14:00',
          count: 200
        },
        {
          time: '14:00-15:00',
          count: 169
        },
        {
          time: '17:00-20:00',
          count: 215
        },
        {
          time: '20:00-21:00',
          count: 215
        }
      ]
    }); 
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