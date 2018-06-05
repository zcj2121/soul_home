<template>
  <div class="page">
    <div class="page__hd">
     <div class="userinfo">
        <image class="userinfo-avatar" :src="userInfo.avatarUrl" background-size="cover"></image>
        <text v-if="userInfo.nickName" class="userinfo-nickname">{{userInfo.nickName}}</text>
        <button v-else open-type="getUserInfo" lang="zh_CN" class="weui-btn other-btn" type="default" size="mini" @getuserinfo="login">点击登录</button>
      </div>
      
    </div>
    <div class="page__bd page__bd_spacing">
      <div class="weui-cells weui-cells_after-title">
        <navigator url="/pages/userEdit/userEdit" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <image :src="icon1" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">个人资料</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
        <navigator url="/pages/navbar/navbar" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <image :src="icon2" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">我的文章</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
        <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <image :src="icon3" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">我的收藏</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
      </div>
      <div class="weui-footer weui-footer_fixed-bottom">
        <div class="weui-footer__links">
          <a @click="bindNavigateTo('/pages/homes/homes')" class="weui-footer__link">灵魂家园</a>
        </div>
        <div class="weui-footer__text">Copyright © 2008-2018 soulfamily.cn</div>
      </div>
    </div>
  </div>
</template>

<script>
import {showBusy,showSuccess,showModel} from '../../utils/index'
export default {
  data() {
    return {
      userInfo: { avatarUrl: '', nickName: '' },
      icon1: '../../static/images/personal.png',
      icon2: '../../static/images/article.png',
      icon3: '../../static/images/collect.png',
    };
  },

  components: {},

  methods: {
    login() {
      showBusy('正在登录')
      wx.login({
        success: ()=> {
          wx.getUserInfo({
            success: (res)=> {
              if(res){
                showSuccess('登录成功');
                this.userInfo = res.userInfo
              } else {
                util.showModel('请求失败')
              }
              
            },
            error: (error)=> {
              showModel('请求失败', error)
            }
          })
        }
      })
    },
    bindNavigateTo(url) {
      wx.switchTab({
        url
      })
    }
  },

  created() { 
  
  },
  onShow() {

  }
};
</script>

<style scoped>
.page__hd{
  text-align:center;
  background:#09c;
  margin-right:-50%;
  margin-left:-50%;
  border-radius:0rpx 0rpx 50% 50%;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  border-radius: 50%;
  border:6rpx solid #fff;
  margin-top: 20rpx;
}

.userinfo-nickname {
  color: #fff;
  font-size: 30rpx;
  margin: 24rpx 0 24rpx 0
}

.other-btn{
  width:210rpx;
  margin-top:25rpx;
}
.page__bd{
  padding:0rpx;
}
.weui-cells{
  margin-top:60rpx;
}
</style>
