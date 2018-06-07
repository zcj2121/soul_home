<template>
  <div class="page">
    <div class="page__hd">
     <button class="userinfo" open-type="getUserInfo" @getuserinfo="login" :disabled="isDis">
        <image class="userinfo-avatar" :src="userinfo.avatarUrl" background-size="cover"></image>
        <div class="userinfo-nickname">{{userinfo.nickName}}</div>
        <!--<button v-else open-type="getUserInfo" lang="zh_CN" class="weui-btn other-btn" type="default" size="mini" @getuserinfo="login">点击登录</button>-->
      </button>
    </div>
    <div class="page__bd page__bd_spacing">
      <div class="weui-cells weui-cells_after-title" v-if="userinfo.openId">
        <navigator url="/pages/userEdit/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <image :src="icon1" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
          </div>
          <div class="weui-cell__bd">个人资料</div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </navigator>
        <navigator url="/pages/navbar/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
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
      <YearProgress></YearProgress>
      <div class="scan-btn">
        <button class="weui-btn other-btn" type="default" size="mini" @click="scanBook">点击扫一扫</button>
      </div>
      <div class="weui-footer weui-footer_fixed-bottom">
        <div class="weui-footer__links">
          <a @click="bindNavigateTo('/pages/homes/main')" class="weui-footer__link">灵魂家园</a>
        </div>
        <div class="weui-footer__text">Copyright © 2008-2018 soulfamily.cn</div>
      </div>
    </div>
  </div>
</template>

<script>
import {showBusy, showSuccess, showError, showModel, post} from '@/utils/util'
import YearProgress from '@/components/YearProgress'
import qcloud from 'wafer2-client-sdk'
import config from '@/utils/config'
export default {
  data () {
    return {
      userinfo: {
        avatarUrl: '../../static/images/user_no.png',
        nickName: '点击登录'
      },
      isDis: true,
      icon1: '../../static/images/personal.png',
      icon2: '../../static/images/article.png',
      icon3: '../../static/images/collect.png'
    }
  },

  components: {
    YearProgress
  },
  methods: {
    login () {
      let _this = this
      let user = wx.getStorageSync('userinfo')
      if (!user) {
        showBusy('正在登录')
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: (userinfo) => {
            qcloud.request({
              url: config.userUrl,
              login: true,
              success (userRes) {
                showSuccess('登录成功')
                // // 将 userinfo 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
                wx.setStorageSync('userinfo', userRes.data.data)
                _this.userinfo = userRes.data.data
                console.log(userRes)
              }
            })
          },
          fail: (error) => {
            showError('请求失败', error)
          }
        })
      }
    },
    bindNavigateTo (url) {
      wx.switchTab({
        url
      })
    },
    async addBook (isbn) {
      const res = await post('/weapp/addbook', {
        isbn,
        openid: this.userinfo.openId
      })
      showModel('添加成功', `${res.title}添加成功`)
    },
    scanBook () {
      wx.scanCode({
        success: (res) => {
          console.log(res)
          if (res.result) {
            this.addBook(res.result)
          }
        }
      })
    }
  },
  async created () {
    // this.userinfo = wx.getStorageSync('userinfo')
  },
  watch: {
    userinfo: {
      handler (userinfo) {
        if (this.userinfo.openId) {
          this.isDis = true
        } else {
          this.isDis = false
        }
      },
      immediate: true,
      deep: true
    }
  },
  onShow () {
    let userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.userinfo = userinfo
    }
  }
}
</script>

<style scoped>
  .page{
    overflow-x: hidden;
    width:100%;
  }
.page__hd{
  text-align:center;
  background:#fff;
  margin-right:-50%;
  margin-left:-50%;
  border-radius:0rpx 0rpx 50% 50%;
  overflow: hidden;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: inherit;
  border:none;
  position: inherit;
  border-radius: inherit;
  box-sizing:inherit;
}
.userinfo[disabled] {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: inherit;
  border:none;
  position: inherit;
  border-radius: inherit;
  box-sizing:inherit;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  border-radius: 50%;
  /*border:2rpx solid #f44336;*/
  margin-top: 20rpx;
  /*padding:6rpx;*/
}

.userinfo-nickname {
  color: #000;
  font-size: 30rpx;
  margin: 24rpx 0 24rpx 0;
  height: 70rpx;
}

.other-btn{
  margin-top:25rpx;
}
.page__bd{
  padding:0rpx;
}
.weui-cells{
  margin-top:60rpx;
}
  .scan-btn{
    text-align: center;
  }
</style>
