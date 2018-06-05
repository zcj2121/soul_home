import Vue from 'vue'
import App from './App'
import store from './store';
Vue.config.productionTip = false;
App.mpType = 'app';
Vue.prototype.$store = store;
import '../static/weui/weui.css'
const app = new Vue({
  App
})
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      'pages/index/index',
      'pages/button/button',
      'pages/list/list',
      'pages/input/input',
      'pages/slider/slider',
      'pages/uploader/uploader',

      'pages/article/article',
      'pages/badge/badge',
      'pages/flex/flex',
      'pages/footer/footer',
      'pages/gallery/gallery',
      'pages/grid/grid',
      'pages/icons/icons',
      'pages/loadmore/loadmore',
      'pages/panel/panel',
      'pages/preview/preview',
      'pages/progress/progress',
      'pages/swiper/swiper',

      'pages/actionsheet/actionsheet',
      'pages/dialog/dialog',
      'pages/msg/msg',
      'pages/msg-fail/msg-fail',
      'pages/msg-success/msg-success',
      'pages/picker/picker',
      'pages/mulLinkagePicker/mulLinkagePicker',
      'pages/toast/toast',
      'pages/navbar/navbar',
      'pages/tabbar/tabbar',

      'pages/searchbar/searchbar',

      'pages/request/request',
      'pages/vuex/vuex',
      'pages/vuexPage/vuexPage',
      'pages/rate/rate',

      'pages/test/test',
      'pages/user/user',
      '^pages/homes/homes',
      'pages/userEdit/userEdit',
    ], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '灵魂家园',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#fff',
      backgroundColor: '#000000',
      selectedColor: '#f44336',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/homes/homes',
          text: '首页',
          iconPath: '/static/images/home.png',
          selectedIconPath: '/static/images/homeH.png',
        },
        {
          pagePath: 'pages/index/index',
          text: '消息',
          iconPath: '/static/images/msg.png',
          selectedIconPath: '/static/images/msgH.png',
        },
        {
          pagePath: 'pages/user/user',
          text: '我的',
          iconPath: '/static/images/user.png',
          selectedIconPath: '/static/images/userH.png',
        },
      ],
    }
  }
}
