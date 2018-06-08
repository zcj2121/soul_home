<template>
  <div class="secovers">
    <div class="thumb">
      <image :src="movie.images.small" class="image"></image>
    </div>
    <div class="detail text-def">
      <div class="row">
        <div class="left text-primary">
          {{movie.title}}
        </div>
        <div class="right" :class="{'text-primary': index <3}">
          {{index+1}}
        </div>
      </div>
      <div class="row mini-text">
        <div class="left" style="width:50%;">
          导演：{{movie.directors}}
        </div>
        <div class="right">
          类型：{{movie.genres}}
        </div>
      </div>
      <div class="row mini-text">
        <div class="left" style="width:60%;">
           主演：{{movie.casts}}
        </div>
        <div class="right">
          评分： <span class="text-primary">{{movie.rating.average}} </span> <Rate :rate="movie.rating.average"></Rate>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
  import Rate from '@/components/Rate'
  export default {
    data () {
      return {
        time: ''
      }
    },
    props: ['movie', 'index'],
    components: {
      Rate
    }
  }
</script>

<style>
  .secovers{
    text-align: left;
    position: relative;
  }
 .thumb{
   width:60px;
   height:50px;
   margin:0 auto;
   overflow: hidden;
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
