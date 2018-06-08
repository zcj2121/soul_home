<template>
  <div class="page">
    <div class="page__hd__other">
      <HomeSwiper></HomeSwiper>
    </div>
    <div class="page__bd">
      <div class="article__title">
        <span>热门书籍</span>
        <img src="../../../static/images/book.png" alt="">
        <span class="more text-def">更多</span>
      </div>
      <div class="item-box">
        <Card v-for="book in books" :key="book.id" :book="book"></Card>
      </div>
      <div class="article__title">
        <span>热门音乐</span>
        <img src="../../../static/images/music.png" alt="">
        <span class="more text-def">更多</span>
      </div>
      <div class="item-box">
        <MusicCard v-for="(music, index) in musics" :key="music.song_id" :music="music, index"></MusicCard>
      </div>
      <div class="article__title">
        <span>热门电影</span>
        <img src="../../../static/images/movie.png" alt="">
        <span class="more text-def">更多</span>
      </div>
      <div class="item-box">
        <MovieCard v-for="(movie, index) in movies" :key="movie.id" :movie="movie, index"></MovieCard>
      </div>
    </div>
    <div class="footer-title">--- 这是我的底线 ---</div>
  </div>
</template>

<script>
  import {get} from '@/utils/util'
  import Card from '@/components/Card'
  import MusicCard from '@/components/MusicCard'
  import MovieCard from '@/components/MovieCard'
  import HomeSwiper from '@/components/HomeSwiper'
  import {formatDate} from '@/utils/index'
  export default {
    data () {
      return {
        books: [],
        musics: [],
        movies: []
      }
    },
    components: {
      HomeSwiper,
      Card,
      MusicCard,
      MovieCard
    },
    methods: {
      async getList () {
        wx.showNavigationBarLoading()
        const books = await get('/weapp/booklist')
        this.books = books.list
        for (let i in this.books) {
          this.books[i].addtime = formatDate(new Date(this.books[i].addtime), 'yyyy-MM-dd hh:mm:ss')
        }
        const musics = await get('/weapp/musiclist')
        this.musics = musics.data.song_list
        for (let i in this.musics) {
          this.musics[i].hot = (this.musics[i].hot / 10000).toFixed(2)
        }
        const movies = await get('/weapp/movielist', {
          count: 10
        })
        this.movies = movies.data.subjects
        console.log(this.movies)
        for (let i in this.movies) {
          const arr = []
          const arrother = []
          this.movies[i].genres = (movies.data.subjects[i].genres).join('/')
          let thisdirectors = this.movies[i].directors
          let thiscasts = this.movies[i].casts
          for (let j in thisdirectors) {
            arr.push(thisdirectors[j].name)
          }
          for (let k in thiscasts) {
            arrother.push(thiscasts[k].name)
          }
          this.movies[i].directors = arr.join('/')
          this.movies[i].casts = arrother.join('/')
        }

        console.log(this.movies)
        wx.stopPullDownRefresh()
        wx.hideNavigationBarLoading()
      }
    },
    mounted () {
      this.getList()
    },
    onShow () {
    },
    onPullDownRefresh () {
      console.log('下拉')
      this.getList()
    }
  }
</script>

<style lang="scss" scoped>
  .page__hd__other {
    padding: 15rpx;
  }
  .page__bd{
    padding:30rpx;
  }
  .item-box{
    margin-bottom:60rpx;
  }
  .item-box:last-child{
    margin-bottom:0rpx;
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
  .footer-title{
    font-size:26rpx;
    color:#bbb;
    text-align: center;
    margin-bottom:20rpx;
  }
</style>

