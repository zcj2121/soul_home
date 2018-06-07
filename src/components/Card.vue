<template>
  <div class="secovers">
    <div class="section__text">
      <div class="sections">
        <div class="sosver">
          <div class="sosver-per">
            <div class="section-authors-img">
              <image class="section-img" src="../../static/images/banner1.jpg"></image>
            </div>
            <div class="section-authors">{{book.openid}}</div>
          </div>
          <div class="section-authors times">12.12 12:47</div>
        </div>
        <div class="section-con">{{book.title}}</div>
      </div>
      <div class="article__footer">
        <span>豆瓣评分： <span>{{book.rate}}</span></span>
        <!--<span><span>12</span>阅读 </span>-->
        <!--<span><span>12</span>评论 </span>-->
        <!--<span><span>12</span>喜欢 </span>-->
        <!--<span><span>12</span>打赏 </span>-->
      </div>
    </div>
    <div class="right_image">
      <image :src="book.image"></image>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['book']
  }
</script>

<style>
  .article__title {
    font-size:32rpx;
    color:#666;
    border-left:10rpx solid #f44336;
    padding-left:20rpx;
    font-weight: bold;
    margin-bottom:20rpx;
  }
  .sosver-per {
    display: inline-block;
  }
  .section__text {
    width: 80%;
  }
  .right_image {
    width: 20%;
  }
  .right_image image{
    width: 100%;
    height:100%;
  }
  .sosver .section-authors-img {
    display: inline-block;
    margin-right:10rpx;
  }
  .sosver .section-authors{
    display: inline-block;
    margin-right:10rpx;
    font-size: 28rpx;
    color: #333;
  }
  .sosver .section-authors.times{
    font-size: 20rpx;
    color:#666;
    margin-left: 10rpx;
  }
  .sosver .section-authors-img image{
    width:35rpx;
    height:35rpx;
    vertical-align:middle;
    border-radius: 50%;
  }
  .section-con{
    width: auto;
    font-size: 30rpx;
    margin: 16rpx;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .secovers{
    display: flex;
    flex-direction: row;
    border-top: 1rpx solid #d5d5d5;
    padding: 20rpx 0;
  }
  .secovers:last-child{
    border-bottom:1rpx solid #d5d5d5;
  }
  .article__footer{
    font-size: 24rpx;
    margin: 16rpx 0 0 16rpx;
    color: #888;
  }
</style>
