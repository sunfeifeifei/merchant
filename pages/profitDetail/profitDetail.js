// pages/profitDetail/profitDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'2020-06-16',

    array:['晚安家居(5698585)'],
    index:0,

    srceenHeight:0,
    leftNav:0,

  },

  handleTime(e){
    console.log(e.currentTarget.dataset.item);
    console.log(e.currentTarget.dataset.index);
    this.setData({
      leftNav: e.currentTarget.dataset.index
    });

  },
  
  bindDateChange (e) {
    this.setData({
      date: e.detail.value
    })
  },
  
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      srceenHeight: wx.getSystemInfoSync().windowHeight
    },()=>{
      console.log(this.data.srceenHeight);
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