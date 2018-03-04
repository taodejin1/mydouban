<template>
  <div class="download">
    <header-bar></header-bar>
    <p>下载组件更新中...敬请期待！</p>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
export default {
  components:{
    HeaderBar
  }
}
</script>

<style lang='scss' scoped>
  .download{
    margin-top: 4.8rem;
    p{
      line-height: 5rem;
      font-size: 1.5rem;
      color: rgb(42, 184, 204);
    }
    
  }
</style>
