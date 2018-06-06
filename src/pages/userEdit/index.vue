<template>
  <div class="page">
    <div class="page__bd page__bd_spacing">
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_input weui-cell_vcode">
          <div class="weui-cell__hd">
            <div class="weui-label">手机号</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入手机号" />
          </div>
        </div>
        <div class="weui-cell weui-cell_select">
          <div class="weui-cell__hd weui-cell__hd_in-select-after">
            <div class="weui-label">性别</div>
          </div>
          <div class="weui-cell__bd">
            <picker @change="bindSexChange" :range="sexs">
              <div class="weui-select weui-select_in-select-after">{{sexs[sexIndex]}}</div>
            </picker>
          </div>
        </div>
        <div class="weui-cell weui-cell_select">
          <div class="weui-cell__hd weui-cell__hd_in-select-after">
            <div class="weui-label">出生日期</div>
          </div>
          <div class="weui-cell__bd">
            <picker mode="date" value="date" start="1900-09-01" end="" @change="bindDateChange">
              <div class="weui-select weui-select_in-select-after">{{date}}</div>
            </picker>
          </div>
        </div>
        <div class="weui-cell weui-cell_select">
          <div class="weui-cell__hd weui-cell__hd_in-select-after">
            <div class="weui-label">所在城市</div>
          </div>
          <div class="weui-cell__bd">
            <picker mode="region" value="city" @change="bindCityChange">
              <div class="weui-select weui-select_in-select-after">{{city[0]}} {{city[1]}} {{city[2]}}</div>
            </picker>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <button class="weui-btn other-btn" type="primary" size="mini">保存修改</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: '',
      sexs: ['男', '女'],
      sexIndex: '',
      city: ''
    }
  },

  components: { },

  methods: {
    bindDateChange (e) {
      this.date = e.mp.detail.value
      console.log(e.mp.detail.value)
    },
    bindCityChange (e) {
      this.city = e.mp.detail.value
      console.log(e.mp.detail.value)
    },
    bindSexChange (e) {
      this.sexIndex = e.mp.detail.value
    }
  },

  created () {

  },
  onShow () {

  }
}
</script>

<style scoped>
.other-btn{
  width:210rpx;
  margin-top:50rpx;
}
.page__bd{
  padding:0rpx;
}
.weui-cells{
  margin-top:60rpx;
}
.btn-box{
  text-align: center;
}
.weui-cells_after-title{
  margin-top:0;
}
.weui-select{
  border-right:none;
}
</style>
