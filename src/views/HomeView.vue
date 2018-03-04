<template>
    <div class="home">
      <ul class="quick-nav">
        <li>
          <router-link to="/pages/movie">影院热映</router-link>
        </li>
        <li>
          <router-link to="/pages/status">欧美新碟榜</router-link>
        </li>
        <li>
          <router-link to="/register">注册帐号</router-link>
        </li>
        <li>
          <router-link to="/login">登录豆瓣</router-link>
        </li>
      </ul>
      <div class="lists">
        <div v-for="list in lists" class="list">
          <router-link :to="{name: 'DetailView',  params: { detailId: list.id }}">
            <div class="content clearfix">
              <div class="left">
                <h3> {{ list.title }}</h3>
                <p> {{ list.content | getText }}</p>
              </div>
              <div class="img">
                <img :src="list.image" width="100%" height="100%" alt="">
              </div>
            </div>
            <div class="author">
              <span class="name">{{ list.category_name }}</span>
              <span class="label" v-if="list.subcategory_name">本活动来自栏目 {{ list.subcategory_name }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
</template>


<script>
export default{
  data(){
    return {

    }
  },
  computed: {
    lists(){
      return this.$store.state.activities.lists
    }
  },
  created(){
    this.$store.dispatch('getLists')
  },
  filters:{
    getText(value){
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, 30)
    }
  }
}
</script>

<style lang='scss' scoped>
  .home{
    .quick-nav{
      overflow: hidden;
      padding: 1.6rem;
      li{
        float: left;
        width: 50%;
        padding: .3rem;
        box-sizing: border-box;
        font-size: 1.5rem;
        a{
          display: block;
          max-width: 100%;
          padding: 1.2rem 0;
          line-height: 2rem;
          text-align: center;
          background-color: #f6f6f6;
          color: #494949;
          border-radius: .2rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
      }
    }
    .lists{
      .list{
        border-bottom: 1px solid #eee;
        a{
          position: relative;
          display: block;
          padding: 2.5rem 1.8rem 2.5rem 0;
          margin-left: 1.8rem;
          .content{
            margin-bottom: 1rem;
            .left{
              width: 70%;
              float:left;
              padding-right: 3rem;
               h3{
                margin-top: 0;
                margin-bottom: .6rem;
                line-height: 1.41;
                text-align: justify;
                font-size: 1.7rem;
                font-weight: 500;
                color: #494949;
              }
              p{
                line-height: 1.5;
                text-align: justify;
                color: #aaa;
                font-size: 1.2rem;
                overflow: hidden;
              }
            }
            .img{
              width: 29%;
                height: 9rem;
              float: right;
            }
          }
          .author{
            font-size: 1.2rem;
            color: #ccc;
            text-align: left;
            .label{
              position: absolute;
              bottom: 2.5rem;
              right: 1.8rem;
            }
          }
        }
      }
    }
  }
</style>
