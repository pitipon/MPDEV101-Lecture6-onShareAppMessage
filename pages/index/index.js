//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },

  onLoad: function () {
    
  },

  onShareAppMessage: function () {
    return {
      title: 'My App',
      path: '/pages/index/index?id=123'
    }
  }
})
