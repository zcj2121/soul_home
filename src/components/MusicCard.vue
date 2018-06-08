<template>
  <div class="secovers">
    <div class="thumb">
      <image :src="music.pic_small" class="image"></image>
    </div>
    <div class="detail text-def">
      <div class="row">
        <div class="left text-primary">
          {{music.title}}
        </div>
        <div class="right" :class="{'text-primary': index <3}">
          {{index+1}}
        </div>
      </div>
      <div class="row mini-text">
        <div class="left">
          -{{music.author}}
        </div>
        <div class="right text-primary">
          <image src="../../static/images/fire.png" mode="scaleToFill"></image>{{music.hot}}万
        </div>
      </div>
      <div class="row mini-text">
        <div class="left">
          <span v-if="!music.album_title">&nbsp;无</span>
           <span v-else>《{{music.album_title}}》</span>
        </div>
        <div class="right">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        time: ''
      }
    },
    props: ['music', 'index'],
    components: {
    }
  }
</script>

<style scoped>
  .secovers{
    text-align: left;
    position: relative;
  }
 .thumb{
   width:60px;
   height:50px;
   margin:0 auto;
   overflow: hidden;
   border-radius: 50%;
   border:1px solid #ccc;
 }
  .thumb .image{
    width: 100%;
    height:100%
  }
  .detail{
    width:100%;
    margin-left: 16rpx;
  }
  .detail .row{
    font-size:30rpx;
    overflow: hidden;
    line-height:34rpx;
    /*margin-bottom: 6rpx;*/
  }
 .detail .row .left{
    float: left;
   overflow: hidden;
   text-overflow:ellipsis;
   white-space: nowrap;
   width:70%;
 }
 .detail .row .right{
   float: right;
 }
  .detail .row .right image{
    width:30rpx;
    height:30rpx;
  }
  .row.mini-text{
    color:#888;
    font-size:22rpx;
  }

</style>
