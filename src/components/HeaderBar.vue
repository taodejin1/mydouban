<template>
    <div class="headerBar">
        <router-link to="/pages/home">
            <div class="logo"></div>
        </router-link>
        <ul>
            <li>
                <router-link to="/pages/movie" style="color: #2384E8">电影</router-link>
            </li>

            <li>
                <router-link to="/pages/book" style="color: #9F7860">图书</router-link>
            </li>

            <li>
                <router-link to="/pages/status" style="color: #E4A813">广播</router-link>
            </li>

            <li>
                <router-link to="/pages/group" style="color: #2AB8CC">小组</router-link>
            </li>
            <li class="talion" @click="onoff = !onoff"></li>        
        </ul>
        <search v-if="onoff" :onoff="onoff" @closeSearch="close()" ></search>
    </div>
</template>

<script>
  import Search from '@/components/Search'
  export default{
    data(){
      return{
        onoff:false
      }
    },
    components:{ Search },
    methods:{
      close(){
        this.onoff = !this.onoff
      }
    }
  }
</script>

<style lang="scss" scoped>
  .headerBar{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.8rem;
    padding: 0 1.8rem;
    background: #fff;
    border-bottom: .1rem solid #f3f3f3;

    .logo{
      float: left;
      width: 4.6rem;
      height: 2.2rem;
      background:url('../assets/logo.png') no-repeat;
      background-size: cover;
    }

    ul{
      float: right;
      li{
        float: left;
        font-size: 1.6rem;
        margin-right: 1.2rem;
        &:last-of-type{
          margin-right: 0;
        }
      }
    }

    .talion{
      width: 2.4rem;
      height: 1.8rem;
      background: url('../assets/search.png') no-repeat;
      background-size: cover;
    }
  }
</style>
