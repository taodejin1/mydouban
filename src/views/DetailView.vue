<template>
  <div class="details">
    <header-bar></header-bar>
    <open-app>
      每天看点好内容
    </open-app>
    <div class="info">
      <h2>
        {{ list.title }}
        <span> {{ list.loc_name }}</span>
      </h2>
      <div class="poster">
        <img :src="list.image_hlarge" alt="">
      </div>
      <div class="detail">
          <span>时间:&nbsp;&nbsp;</span>
          <ul>
            <li>{{list.begin_time}}</li>
            <li>{{list.end_time}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>地点:&nbsp;&nbsp;</span>
          <ul>
            <li>{{list.address}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>费用:&nbsp;&nbsp;</span>
          <ul>
            <li>{{list.fee_str}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>类型:&nbsp;&nbsp;</span>
          <ul>
            <li>{{list.category_name}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>起始时间:&nbsp;&nbsp;</span>
          <ul>
            <li v-if="list.owner">{{list.owner.name}}</li>
          </ul>
        </div>
        <tags v-if="list.tags" :items="list.tags | toArray"></tags>
        <div class="describe">
          <h2>活动详情</h2>
          <div v-if="list.content" class="content" v-html="content"></div>
        </div>
      </div>
      <download-app></download-app>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import OpenApp from '@/components/OpenApp'
import Tags from '@/components/Tags'
import DownloadApp from '@/components/DownloadApp'
export default {
  data() {
    return {

    }
  },
  components: { HeaderBar,OpenApp,Tags,DownloadApp },
  computed:{
    list(){
      return this.$store.state.activities.singleList
    },
    content: function () {
      return this.list.content.replace(/<img.+?>/ig, '')
    },
  },
  filters: {
    toArray (value) {
      return value.split(',')
    }
  },
  created(){
    this.$store.dispatch('getSingleList', {
      id: this.$route.params.detailId
    })
  }
}
</script>

<style lang="scss" scoped>
  .details{
    padding-top: 4.8rem;   
    text-align: left; 
    .info{
      margin: 1rem;
      h2{
        margin: 2rem 0;
        font-weight: 700;
        font-size: 1.68rem;
        color: #494949;        
        span{
          display: inline-block;
          padding: .1rem .5rem;
          margin-bottom: .3rem;
          vertical-align: middle;
          line-height: 1.8rem;
          font-size: 1.2rem;
          color: #fff;
          background-color: #ff8263;
          border-radius: .2rem;
        }
      }
      .poster{
        margin: 2rem auto;
        text-align: center;
        img{
          width: 100%;
          max-width: 22rem;
        }
      }
    }
    .detail {
      margin-left: 3.3rem;
      margin-bottom: 1rem;
      min-height: 1.5em;
      font-size: 1.4rem;
      clear: left;
      span {
        float: left;
        margin-left: -3.3rem;
        line-height: 150%;
        color: #666666;
      }
      ul {
        list-style-position: outside;
        margin-left: 0;
      }
    }
    .describe {
      h2 {
        color: #072;
      }
      .content {
        overflow: hidden;
        font-size: 1.4rem;
      }
    }
  }
</style>
