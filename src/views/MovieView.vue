<template>
  <div class="movie">
    <scroller title="影院热映" Type="hasCover" :items="hotMovies"></scroller>
    <scroller title="免费在线观影" Type="hasCover" :items="topMovies"></scroller>
    <scroller title="新片速递" Type="hasCover" :items="newMovies"></scroller>
    <scroller title="发现好电影" Type="onlyString" :items="movieTags"></scroller>
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
  computed: {
    hotMovies(){
      return this.$store.state.movie.hotMovies
    },
    topMovies(){
      return this.$store.state.movie.topMovies
    },
    newMovies(){
      return this.$store.state.movie.newMovies
    },
    movieTags(){
      return this.$store.state.movie.movieTags
    },
    movieTypes(){
      return this.$store.state.movie.movieTypes
    }
  },
  created () {
    this.$store.dispatch('getMovie')
  }
}
</script>

<style lang='scss' scoped>

</style>
