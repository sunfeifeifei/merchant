// pages/equipment/equipment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province:'',
    city:'',
    address:'', 

    showModalStatus: false,
    showModalStatus1: false,
    showModalStatus2: false,
    selectIndex:0,
    list:[
      {
        number:'52857485',
        address:'湖北省红安县将军北路',
        warrantyTime:'2022-06-15',
        register:'2020-06-15',
        status:'在线',
        activeDuration:'1585'
      },
      {
        number: '25874858',
        address: '湖北省红安县将军北路',
        warrantyTime: '2023-06-15',
        register: '2020-03-15',
        status: '离线',
        activeDuration: '585'
      }, 
      {
        number: '52857485',
        address: '湖北省红安县将军北路',
        warrantyTime: '2022-06-15',
        register: '2020-06-15',
        status: '在线',
        activeDuration: '1585'
      },
      {
        number: '25874858',
        address: '湖北省红安县将军北路',
        warrantyTime: '2023-06-15',
        register: '2020-03-15',
        status: '离线',
        activeDuration: '585'
      }
    ],
  },

  hnadleItem(e){
    console.log(e.currentTarget.dataset);
    this.setData({
      selectIndex: e.currentTarget.dataset.index
    });
  },

  handleInputProvince(e){
    console.log('--省--',e.detail.value);
    this.data.province = e.detail.value;
  },
  handleInputCity(e) {
    console.log('--市--', e.detail.value); 
    this.data.city = e.detail.value;
  },
  handleInputAddress(e) {
    console.log('--地址--', e.detail.value); 
    this.data.address = e.detail.value;
  },


  handleMaintain(){
    this.util1(this, 'open');
  },
  
  handleAdd(){
    this.util2(this, 'open');
  },

  handleSetter(e) {
    console.log('--当前点击--', e.currentTarget.dataset.item);
    this.util(this, 'open');
  },

  powerDrawer() {
    this.util(this, 'close');
  },

  powerDrawer1() {
    this.util1(this, 'close');
  },

  powerDrawer2() {
    this.util2(this, 'close');
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

  //模态框动画
  util1(that, currentStatu) {
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
          showModalStatus1: false
        });
      }
    }.bind(that), 200)
    if (currentStatu == "open") {
      that.setData({
        showModalStatus1: true
      });
    }
  },

  //模态框动画
  util2(that, currentStatu) {
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
          showModalStatus2: false
        });
      }
    }.bind(that), 200)
    if (currentStatu == "open") {
      that.setData({
        showModalStatus2: true
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