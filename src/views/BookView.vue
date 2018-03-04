<template>
  <div class="book">
    <scroller title="最受关注图书｜虚构类" Type="hasCover" :items="novel"></scroller>
    <scroller title="最受关注图书｜非虚构类" Type="hasCover" :items="real"></scroller>
    <scroller title="豆瓣纸书" Type="hasCover" :items="paperBook">
      <div slot="bookSell" class="bookSell">
        <img class="corver" src="../assets/book_zw.jpg" alt="">
        <div class="content">
          <span class="price">¥ 68</span>
          <p class="name">造物</p>
          <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
        </div>
      </div>
    </scroller>
    <scroller title="发现好书" Type="onlyString" :items="bookTags"></scroller>
    <types :items="movieTypes"></types>
    <download-app></download-app>
  </div>
</template>

<script>
import Scroller from '../components/Scroller'
import Types from '../components/Types'
import DownloadApp from '../components/DownloadApp'

export default{
  components:{
    Scroller,
    Types,
    DownloadApp
  },
  computed:{
    novel(){
      return this.$store.state.book.novel
    },
    real(){
      return this.$store.state.book.real
    },
    paperBook(){
      return this.$store.state.book.paperBook
    },
    bookTags(){
      return this.$store.state.book.bookTags
    },
    movieTypes(){
      return this.$store.state.movie.movieTypes
    }
  },
  created(){
    this.$store.dispatch('getBook')
  }
}
</script>

<style lang='scss' scoped>
.book .bookSell{
    overflow: hidden;
    margin: 1.6rem 1.8rem 0.8rem 1.6rem;
    img{
      float: left;
      width: 10rem;
      margin-right: 1.5rem;
    }
    .content{
        margin-right: 1rem;
        text-align: left;
        .price{
          float: right;
          color: #E76648;
          font-size: 1.6rem;
          line-height: 2.2rem;
        }
        .name{
          font-size: 2rem;
          color: #494949;
          margin: 1rem;
          max-width: 100%;
          line-height: 2.2rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
        .info{
          font-size: 1.3rem;
          font-weight: 300;
          line-height: 1.5;
          color: #9B9B9B;
        }
    }
}
</style>
