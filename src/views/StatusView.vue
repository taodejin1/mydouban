<template>
  <div class="status">
    <open-app>
      打开App, 浏览更多
    </open-app>
    <login-bar></login-bar>
    <div class="diary-list">
      <diary :numbers='numbers'></diary>
      <a class="list-link" href="#">显示更多广播</a>
    </div>
    <download-app></download-app>
  </div>
</template>

<script>
  import OpenApp from '@/components/OpenApp'
  import LoginBar from '@/components/LoginBar'
  import Diary from '@/components/Diary'
  import DownloadApp from '@/components/DownloadApp'

  export default{
    data(){
      return{
        numbers: [
          {
            name:"齐桓公",
            action:"扯了个淡",
            time:new Date().toLocaleString(),
            subTitle:"管鲍之交",
            content:"杀管仲啊，不想杀啊，不想杀！杀管仲啊，不想杀啊，不想杀！杀管仲啊，不想杀啊，不想杀！杀管仲啊，不想杀啊，不想杀！杀管仲啊，不想杀啊，不想杀！杀管仲啊，不想杀啊，不想杀！",
            like:999,
            dicussion: 999,
            pass: 999,
          },
          {
            name:"晋文公",
            action:"更新日记",
            time:new Date().toLocaleString(),
            subTitle:"退避三舍",
            content:"退避三舍，城濮大战不想打楚国啊不想打！退避三舍，城濮大战不想打楚国啊不想打！退避三舍，城濮大战不想打楚国啊不想打！退避三舍，城濮大战不想打楚国啊不想打！",
            like:998,
            dicussion: 998,
            pass: 998,
          },
          {
            name:"秦穆公",
            action:"更新心情",
            time:new Date().toLocaleString(),
            subTitle:"秦晋之好",
            content:"秦晋之好，不想破啊，不想破！秦晋之好，不想破啊，不想破！秦晋之好，不想破啊，不想破！秦晋之好，不想破啊，不想破！秦晋之好，不想破啊，不想破！",
            like:997,
            dicussion: 997,
            pass: 997,
          },
          {
            name:"楚庄王",
            action:"扯了个淡",
            time:new Date().toLocaleString(),
            subTitle:"一鸣惊人",
            content:"三年不鸣，三年不叫，一叫惊人，一飞冲天！三年不鸣，三年不叫，一叫惊人，一飞冲天！三年不鸣，三年不叫，一叫惊人，一飞冲天！三年不鸣，三年不叫，一叫惊人，一飞冲天！",
            like:996,
            dicussion: 996,
            pass: 996,
          },
          {
            name:"宋襄公",
            action:"叫了个鸡",
            time:new Date().toLocaleString(),
            subTitle:"仁义之师",
            content:"仁义之师，不还手啊不还手！仁义之师，不还手啊不还手！仁义之师，不还手啊不还手！仁义之师，不还手啊不还手！仁义之师，不还手啊不还手！仁义之师，不还手啊不还手！",
            like:995,
            dicussion: 995,
            pass: 995,
          },
          {
            name:"郑庄公",
            action:"带了个表",
            time:new Date().toLocaleString(),
            subTitle:"春秋首小霸",
            content:"首霸不好当啊，不好当！首霸不好当啊，不好当！首霸不好当啊，不好当！首霸不好当啊，不好当！首霸不好当啊，不好当！",
            like:994,
            dicussion: 994,
            pass: 994,
          },
          {
            name:"阖闾",
            action:"烫了个发",
            time:new Date().toLocaleString(),
            subTitle:"孙武、伍子胥大法好",
            content:"孙武、伍子胥大法好啊！孙武、伍子胥大法好啊！孙武、伍子胥大法好啊！孙武、伍子胥大法好啊！孙武、伍子胥大法好啊！孙武、伍子胥大法好啊！",
            like:993,
            dicussion: 993,
            pass: 993,
          },
          {
            name:"勾践",
            action:"发了个说说",
            time:new Date().toLocaleString(),
            subTitle:"卧薪尝胆",
            content:"卧薪尝胆好啊！卧薪尝胆好啊！卧薪尝胆好啊！卧薪尝胆好啊！卧薪尝胆好啊！卧薪尝胆好啊！卧薪尝胆好啊！",
            like:992,
            dicussion: 992,
            pass: 992,
          }
        ]
      }
    },
    components:{ OpenApp, LoginBar, Diary, DownloadApp }
  }
</script>

<style lang='scss' scoped>
.list-link{
    display: block;
    padding: 1.5rem 0;
    font-size: 1.6rem;
    line-height: 1.8rem;
    text-align: center;
    color: #42bd56;
}
</style>
