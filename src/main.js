import Vue from 'vue'
import App from './App'
// import store from './store'
import '../static/weui/weui.css'
Vue.config.productionTip = false
// App.mpType = 'app'
// Vue.prototype.$store = store
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      'pages/button/main',
      'pages/list/main',
      'pages/input/main',
      'pages/slider/main',
      'pages/uploader/main',

      'pages/article/main',
      'pages/badge/main',
      'pages/flex/main',
      'pages/footer/main',
      'pages/gallery/main',
      'pages/grid/main',
      'pages/icons/main',
      'pages/loadmore/main',
      'pages/panel/main',
      'pages/preview/main',
      'pages/progress/main',
      'pages/swiper/main',

      'pages/actionsheet/main',
      'pages/dialog/main',
      'pages/msg/main',
      'pages/msg-fail/main',
      'pages/msg-success/main',
      'pages/picker/main',
      'pages/mulLinkagePicker/main',
      'pages/toast/main',
      'pages/navbar/main',
      'pages/tabbar/main',

      'pages/searchbar/main',

      'pages/request/main',
      'pages/vuex/main',
      'pages/vuexPage/main',
      'pages/rate/main',

      'pages/test/main',
      'pages/index/main',
      'pages/user/main',
      '^pages/homes/main',
      'pages/userEdit/main'
    ], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#f44336',
      navigationBarTitleText: '灵魂家园',
      navigationBarTextStyle: 'light'
    },
    tabBar: {
      color: '#000',
      backgroundColor: '#F8F8F8',
      selectedColor: '#f44336',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/homes/main',
          text: '首页',
          iconPath: '/static/images/home.png',
          selectedIconPath: '/static/images/homeH.png'
        },
        {
          pagePath: 'pages/index/main',
          text: '消息',
          iconPath: '/static/images/msg.png',
          selectedIconPath: '/static/images/msgH.png'
        },
        {
          pagePath: 'pages/user/main',
          text: '我的',
          iconPath: '/static/images/user.png',
          selectedIconPath: '/static/images/userH.png'
        }
      ]
    }
  }
}
