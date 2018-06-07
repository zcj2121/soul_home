<template>
  <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
    <block v-for="(item, index) in imgUrls" :key="index">
      <swiper-item>
        <image :src="item" class="slide-image" width="355" height="150"/>
      </swiper-item>
    </block>
  </swiper>
</template>

<script>
  export default {
    data () {
      return {
        imgUrls: [
          '../../static/images/banner1.jpg',
          '../../static/images/banner2.jpg',
          '../../static/images/banner3.jpg'
        ],
        indicatorDots: false,
        autoplay: true,
        interval: 5000,
        duration: 1000
      }
    }
  }
</script>

<style>
  swiper {
    height: 376rpx !important;
  }
  swiper image {
    height: 90%;
    width: 94%;
    border-radius: 20rpx;
    box-shadow: 0rpx 0rpx 20rpx #555;
    margin: 3%;
  }
</style>
