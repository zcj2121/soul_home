<template>
  <div class="page">
    <div class="page__hd__other">
      <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <block v-for="(item, index) in imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="slide-image" width="355" height="150"/>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="page__bd">

    </div>
  </div>
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
  },
  components: {
  },
  methods: {
  },
  onShow () {
  }
}
</script>

<style scoped>
  .page__hd__other{
    padding:15rpx;
    
  }
  swiper {
      height: 376rpx !important;
      
    }
    image {
      height:90%;
      width:94%;
      border-radius:20rpx;
      box-shadow:0px 0px 20rpx #555;
      margin:3%;
      }

</style>
