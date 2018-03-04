<template>
    <div class="pages clearfix">
      <header-bar></header-bar>
      <div id="contain">
        <router-view></router-view>
      </div>
    </div>
</template>


<script>
import HeaderBar from '@/components/HeaderBar'

export default{
  components:{
    HeaderBar
  },
}
</script>

<style lang='scss' scoped>
  #contain{
    margin-top:4.8rem;
  }
</style>
