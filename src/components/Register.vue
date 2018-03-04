<template>
  <div class="register">
    <h1>
      欢迎加入豆瓣
    </h1>  
    <form action="">
      <label for="email">
        <input type="text" name="email" placeholder="邮箱">
      </label>
      <label for="password">
        <input :type="changetype" name="password" placeholder="密码">
        <span :class="toggleBg" @click="toggleShow"></span>
      </label>
      <label for="username">
        <input type="text" name="username" placeholder="用户名">
      </label>
      <input type="button" name="submit" value="立即注册">
    </form>
    <div class="footer">
      <p>点击「注册」代表你已阅读并同意用户使用协议</p>
      <div class="link-download">
        <router-link to="/download">
          下载豆瓣App
        </router-link>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  data(){
    return{
      isShow:0,
      changetype:"password",
      toggleBg:"toggle-psw"
    }
  },
  methods:{
    toggleShow:function(){
      this.isShow = this.isShow ? 0 : 1
      this.changetype = this.isShow ? "text" : "password"
      this.toggleBg = this.isShow ? "toggle-psw show" : "toggle-psw"
    }
  }
}
</script>


<style lang='scss' scoped>
  .register{
    h1{
      margin: 10% 0 9%;
      font-size: 4rem;
      font-weight: 300;
      color: #42bd56;
    }
    form{
      padding: 2rem 1.5rem;      
      label{
        display: block;
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
      input[type="button"]{
        margin-top: 1rem;
        font-size: 1.7rem;
        color: #fff;
        background: #42bd56;
        border: .1rem solid #17aa52;
      }
    }
    .footer{
      p{
        font-size: 1.4rem;
        color: #aaa;
        text-align: center;
      }
      .link-download{
        margin-top: 4rem;
        font-size: 1.5rem;
        color: #42bd56;
      }
    }
  }
</style>
