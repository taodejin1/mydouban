<template>
  <div class="login">
    <h1>
      <a href="javascript:history.go(-1)">
        取消
      </a>
      登录豆瓣
    </h1>

    <form action="">
      <label for="email">
        <input type="text" name="email" placeholder="邮箱">
      </label>
      <label for="token">
        <input :type="changetype" name="token" placeholder="Token">
        <span :class="toggleBg" @click="toggleShow"></span>
      </label>
      <input type="button" name="login" value="登录">
    </form>

    <div class="footer">
      <p>
        使用其他方式登录 & 找回密码
      </p>
      <div class="link-douban">
        <router-link to="/register">注册豆瓣帐号</router-link>
        <router-link to="/download">下载豆瓣App</router-link>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data(){
    return{
      toggleBg:'toggle-psw',
      isShow:0,
      changetype:'password'
    }
  },
  methods:{
    toggleShow:function(){
      this.isShow = this.isShow ? 0 : 1
      this.changetype = this.isShow ? 'text' : 'password'
      this.toggleBg = this.isShow ? 'toggle-psw show' : 'toggle-psw'
    }
  }
}
</script>


<style lang='scss' scoped>
.login{
  h1{
    height: 4.5rem;
    margin: 0 0 1rem;
    padding: 0 1.8rem;
    line-height: 4.5rem;
    background: #fff;
    border-bottom: .1rem solid #eee;
    font-size: 1.8rem;
    font-weight: 700;
    position: relative;
    a{
      position: absolute;
      left: 1.8rem;
      top: 0;
      color: #42bd56;
      font-size: 1.5rem;
      font-weight: 400;
    }      
  }
  form{
    padding: 2rem 1.5rem;
    label{
      display:block;
      position: relative;
      .toggle-psw{
        position: absolute;
        right: .2rem;
        top: 0;
        display: block;
        height: 100%;
        width: 3.2rem;
        background-image: url('../assets/hidepsw.png');
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 2.2rem;
        z-index: 1;
      }
      .toggle-psw.show{
        background-image: url('../assets/showpsw.png');
      }
      input{
        display: inline-block;
        width: 100%;
        height: 4.4rem;
        padding: 0 .8rem;
        box-sizing: border-box;
        font-size: 1.5rem;
        background: #fff;
        border: .1rem solid #ccc;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
        outline: 0;
        margin-top: -0.1rem;
      }      
    }
    input[type="button"]{
      cursor: pointer;
      width: 100%;
      padding: 1.2rem 2.6rem;
      margin-top: 1rem;
      font-size: 1.7rem;
      color: #fff;
      background: #17aa52;
      border: .1rem solid #17aa52;
      border-radius: .3rem;
    }
  }
  .footer{
    p{
      font-size: 1.5rem;
      color: #aaa;
      text-align: center;
    }
    .link-douban{
      margin-top: 4rem;
      font-size: 1.5rem;
      a{
        color: #42bd56;
        margin-right: 1.5rem;
      }
    }
  }
} 
</style>
