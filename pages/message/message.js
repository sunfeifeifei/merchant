// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '海珠区'],
    nameOfEnterprise: '',
    numberOfEnterprise: '',
    multiArray: [['商超'], ['零售']],
    multiIndex: [0, 0],
    merchantName: '',
    merchantType: '',
    merchantTypeList: ['个体工商户'],
    merchantTypeIndex: 0,
    name: '',
    range: '',
    money: '',
    date: '2016-09-01',
    agentDate:'2016-09-01',
    agentEnd:'2017-09-01',
    rangeTime: '',
    registerAddress: '',
    managementAddress: '',
    registrationAuthority: '',
    contactsName: '',
    contactsPhone: '',
    contactsCard:'',
  },

  bindRegionChange(e) {
    this.setData({
      region: e.detail.value
    })
  },

  handleInputNameOfEnterprise(e) {
    this.setData({
      nameOfEnterprise: e.detail.value
    });
  },

  handleInputNumberOfEnterprise(e) {
    this.setData({
      numberOfEnterprise: e.detail.value
    });
  },
  handleInputMerchantName(e) {
    this.setData({
      merchantName: e.detail.value
    });
  },

  bindPickerMerchantTypeChange(e) {
    console.log(e);
    this.setData({
      merchantTypeIndex: Number(e.detail.value),
      merchantType: this.data.merchantTypeList[Number(e.detail.value)]
    })
  },

  handleInputName(e) {
    this.setData({
      name: e.detail.value
    });
  },
  handleRange(e) {
    this.setData({
      range: e.detail.value
    });
  },
  handleMoney(e) {
    this.setData({
      money: e.detail.value
    });
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindAgentDate(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      agentDate: e.detail.value
    })
  },
  bindAgentEnd(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      agentEnd: e.detail.value
    })
  },
  handleRangeTime(e) {
    this.setData({
      rangeTime: e.detail.value
    });
  },
  handleRegisterAddress(e) {
    this.setData({
      registerAddress: e.detail.value
    });
  },
  handleManagementAddress(e) {
    this.setData({
      managementAddress: e.detail.value
    });
  },
  handleRegistrationAuthority(e) {
    this.setData({
      registrationAuthority: e.detail.value
    });
  },
  handleContactsName(e) {
    this.setData({
      contactsName: e.detail.value
    });
  },
  handleContactsPhone(e) {
    this.setData({
      contactsPhone: e.detail.value
    });
  },
  handleContactsCard(e) {
    this.setData({
      contactsCard: e.detail.value
    });
  },
  

  handleUploadLicense() {
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            const data = res.data
            //do something
          }
        })
      }
    })
  },
  handleUploadFront() {
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            const data = res.data
            //do something
          }
        })
      }
    })
  },
  handleUploadReverse() {
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            const data = res.data
            //do something
          }
        })
      }
    })
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