<script>
  export default {
    data () {
      return {
      }
    },
    async created () {
    },
    methods: {
    }
  }
</script>

<style>
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 200rpx 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }

  page {
    background-color: #F8F8F8;
    font-size: 16px;
    font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
  }

  .page__hd {
    padding: 30rpx 40rpx;
  }

  .page__bd {
    padding-bottom: 40rpx;
  }

  .page__bd_spacing {
    padding-left: 30rpx;
    padding-right: 30rpx;
  }

  .page__ft {
    padding-bottom: 10rpx;
    text-align: center;
  }

  .page__title {
    text-align: left;
    font-size: 20px;
    font-weight: 400;
  }

  .page__desc {
    margin-top: 10rpx;
    color: #888888;
    text-align: left;
    font-size: 14px;
  }
</style>
