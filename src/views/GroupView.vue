<template>
  <div class="group">
    <login-bar></login-bar>
    <group title="租房找室友" :items="groupA">
      <a class="list-link" href="#" slot="more">更多相关小组</a>
    </group>
    <group title="来聊五块钱" :items="groupB">
      <a class="list-link" href="#" slot="more">来聊五块钱</a>
    </group>
    <group title="买买买" :items="groupC">
      <a class="list-link" href="#" slot="more">更多相关小组</a>
    </group>
    <download-app></download-app>
  </div>
</template>

<script>
  import LoginBar from '@/components/LoginBar'
  import Group from '@/components/Group'
  import DownloadApp from '@/components/DownloadApp'

  export default{
    components:{ LoginBar,Group,DownloadApp },
    computed:{
      groupA(){
        return this.$store.state.group.groupA
      },
      groupB(){
        return this.$store.state.group.groupB
      },
      groupC(){
        return this.$store.state.group.groupC
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>
