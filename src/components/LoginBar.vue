<template>
  <div class="loginBar">
      <router-link to="/login" class="clearfix">            
            <div class="fl">
                <img src="@/assets/user_normal.jpg" alt="">
                <b>请先登录</b>
            </div>            
            <div class="fr">
                <i>
                    <img src="@/assets/pen.svg" alt="">
                </i>
                <i>
                    <img src="@/assets/camera.svg" alt="">
                </i>
            </div>          
      </router-link>
  </div>
</template>

<script>
    
</script>

<style lang='scss' scoped>
.loginBar{
    padding: 1rem 1.8rem;
    border-bottom: 0.2rem solid #E8E8E8;
    .fl img{
        border-radius: 50%;
    }
    b{
        padding-left: 1rem;
        font-size: 1.5rem;
        color: #aaa;
        font-weight: normal;
        display: inline-block;
        vertical-align: top;
        height: 4rem;
        line-height: 4rem;
    }
    i img{
        width: 4rem;
        height: 4rem;
        padding: 0.8rem;
        margin-left: 0.8rem;
    }
}
</style>
