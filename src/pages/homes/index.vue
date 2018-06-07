<template>
  <div class="page">
    <div class="page__hd__other">
      <HomeSwiper></HomeSwiper>
    </div>
    <div class="page__bd">
      <div class="article__title">热门推荐</div>
      <Card v-for="book in books" :key="book.id" :book="book"></Card>
    </div>
  </div>
</template>

<script>
  import {get} from '@/utils/util'
  import Card from '@/components/Card'
  import HomeSwiper from '@/components/HomeSwiper'
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
</style>

