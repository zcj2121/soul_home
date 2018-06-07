<template>
  <div class="page">
    <div class="page__hd__other">
      <HomeSwiper></HomeSwiper>
    </div>
    <div class="page__bd">
      <div class="article__title">
        <span>热门书籍</span>
        <img src="../../../static/images/book.png" alt="">
        <span class="more">更多</span>
      </div>
      <div class="item-box">
        <Card v-for="book in books" :key="book.id" :book="book"></Card>
      </div>
      <div class="article__title">
        <span>热门音乐</span>
        <img src="../../../static/images/music.png" alt="">
        <span class="more">更多</span>
      </div>
      <div class="item-box">
        <Card v-for="book in books" :key="book.id" :book="book"></Card>
      </div>
      <div class="article__title">
        <span>热门电影</span>
        <img src="../../../static/images/movie.png" alt="">
        <span class="more">更多</span>
      </div>
      <div class="item-box">
        <Card v-for="book in books" :key="book.id" :book="book"></Card>
      </div>
    </div>
  </div>
</template>

<script>
  import {get} from '@/utils/util'
  import Card from '@/components/Card'
  import HomeSwiper from '@/components/HomeSwiper'
  import {formatDate} from '@/utils/index'
  export default {
    data () {
      return {
        books: []
      }
    },
    components: {
      HomeSwiper,
      Card
    },
    methods: {
      async getList () {
        const books = await get('/weapp/booklist')
        this.books = books.list
        for (let i in this.books) {
          this.books[i].addtime = formatDate(new Date(this.books[i].addtime), 'yyyy-MM-dd hh:mm:ss')
        }
      }
    },
    mounted () {
      this.getList()
    },
    onShow () {
    }
  }
</script>

<style scoped>
  .page__hd__other {
    padding: 15rpx;
  }

  .page__bd{
    padding:30rpx;
  }
  .item-box{
    margin-bottom:60rpx;
  }
  .article__title img{
    width: 30rpx;
    height: 30rpx;
    margin-left: 6rpx;
    vertical-align: middle;
    margin-top:-4px;
  }
  .more{
    text-align: center;
    float: right;
    border:1rpx solid #ededed;
    padding:0 16rpx;
    border-radius: 50rpx;
  }
</style>

