<template>
  <div class="diary">
      <div v-for="number in numbers" class="option clearfix">
          <i class="fl"> <img src="@/assets/douban-app-logo.png" alt=""></i>
          <div class="fr">
                <p class="user">
                    <b>{{ number.name }}</b>
                    {{ number.action }}
                </p>
                <p class="time">
                    {{ number.time }}
                </p>
                <div class="word-wrapper">
                    <h4> {{ number.subTitle }} </h4>
                    <p>
                        {{ number.content }}
                    </p>
                </div>
                <div class="dicuss">
                    <span>{{ number.like }}</span>
                    <span>{{ number.dicussion }}</span>
                    <span>{{ number.pass }}</span>
                    <span></span>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default{
        props:{
            numbers:{
                type: Array
            }
        }
    }
</script>

<style lang='scss' scoped>
.diary{    
    .option{
        border-bottom: 0.1rem solid #E8E8E8;
        margin: 2rem 1.8rem;
        i.fl  img{
            width: 4rem;
            height: 4rem;
            margin-right: 1rem;
            border-radius: 50%;
        }
        .fr{
            min-width: 75%;
            max-width: 82%;
            text-align: left;
            color: #aaa;
            .user{
                font-size: 1.7rem;
                padding: 1rem 0 0.5rem 0;
                b{
                    color: #494949;
                }
            }
            .time{
                font-size: 1.4rem;
            }
            .word-wrapper{
                margin: 1rem 0 2rem 0;
                padding: 1.5rem;
                border: solid 0.1rem #d8d8d8;
                h4{
                    font-size: 1.7rem;
                    font-weight: 500;
                    line-height: 1.4;
                    color: #494949;
                    margin-bottom: 0.5rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                p{
                    font-size: 1.2rem;
                    line-height: 1.6rem;
                    color: #aaa;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
            .dicuss{
                padding-bottom: 2rem;
                span{
                    color: #ccc;
                    display: inline-block;
                    width: 5rem;
                    text-indent: 2.3rem;
                    height: 2rem;
                    background-size: contain;
                    padding-top: 0.5rem;
                    font-size: 1.4rem;
                    &:nth-of-type(1){
                        background: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg) left center no-repeat;
                    }
                    &:nth-of-type(2){
                        background: url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg) left center no-repeat;
                    }
                    &:nth-of-type(3){
                        background: url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg) left center no-repeat;
                    }
                    &:nth-of-type(4){
                        float: right;
                        width: 2rem;
                        height: 2rem;
                        background: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg) left center no-repeat;
                    }
                }
            }
        }
    }    
}
</style>
