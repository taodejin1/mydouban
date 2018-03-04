<template>
    <div class="search">
        <div class="search-head">
            <i @click="closeSearch">关闭</i>
            <input type="search">
        </div>
        <ul class="has-header">
            <li>
                <div>
                <a href="#" target="_blank">
                    <strong style="color: rgb(35, 132, 232);">电影</strong>
                    <span>影院热映</span>
                </a>
                <a href="#" target="_blank">
                    <strong style="color: rgb(230, 70, 126);">同城</strong>
                    <span>周末活动</span>
                </a>
                <a href="#" target="_blank">
                    <strong style="color: rgb(159, 120, 96);">阅读</strong>
                    <span>电子书</span>
                </a>
                <a href="#" target="_blank">
                    <strong style="color: rgb(225, 100, 77);">东西</strong>
                    <span>心爱之物</span>
                </a>
                </div>
            </li>
            <li>
                <div>
                    <a href="#" target="_blank">
                        <strong style="color: rgb(122, 106, 219);">电视</strong>
                        <span>正在热播</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color: rgb(42, 184, 204);">小组</strong>
                        <span>志趣相投</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color: rgb(87, 116, 197);">游戏</strong>
                        <span>虚拟世界</span>
                    </a>
                    <a href="#" target="_blank">
                        <strong style="color: rgb(64, 207, 169);">FM</strong>
                        <span>红心歌单</span>
                    </a>
                </div>
            </li>
            <li>
                <div>
                <a href="#" target="_blank">
                    <strong style="color: rgb(159, 120, 96);">图书</strong>
                    <span>畅销排行</span>
                </a>
                <a href="#" target="_blank">
                    <strong style="color: rgb(244, 143, 46);">音乐</strong>
                    <span>新碟榜</span>
                </a>
                <a href="#" target="_blank">
                    <strong style="color: rgb(89, 108, 221);">应用</strong>
                    <span>玩手机</span>
                </a>
                <a href="#" target="_blank">
                    <strong style="color: rgb(66, 189, 86);">市集</strong>
                    <span>购买原创</span>
                </a>
                </div>
            </li>
        </ul>
        <!-- <sub-nav mold="navBottom"></sub-nav> -->
    </div>
</template>

<script>
    import SubNav from '@/components/SubNav'
    export default{
        props:{
            onoff:{
                type: Boolean
            }
        },
        components:{ SubNav },
        methods:{
            closeSearch(event){
                this.$emit('closeSearch')
            }
        }
    }
</script>

<style scoped lang='scss'>
    .search{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 999;
        .search-head{
            height: 4.8rem;
            line-height: 4.8rem;
            padding: 0 1.8rem;
            text-align: left;
            border-bottom: 0.1rem solid #f3f3f3;
            i{
                font-style: normal;
                color: #42bd56;
                font-size: 1.6rem;
            }
            input{
                background: url('../assets/search_btn.png') no-repeat 50% #f3f3f3;
                background-size: 1.73rem;
                border-radius: 0.3rem;
                width: 88%;
                float: right;
                height: 3.2rem;
                font-size: 1.4rem;
                margin-top: 0.8rem;
                border: 0px;
                outline:none;
            }
        }
        ul {
            display: flex;
            justify-content: space-around;
            padding-top: 2.5rem;
            li {
                width: 33.33%;
                div {
                    position: relative;
                    float: left;
                    left: 50%;
                    top: 0;
                    a {
                        position: relative;
                        left: -50%;
                        top: 0;
                        display: block;
                        margin-bottom: 2.5rem;
                        text-align: center;
                        strong {
                            display: block;
                            font-weight: 400;
                            font-size: 2.4rem;
                            line-height: 2.8rem;
                        }
                        span {
                            display: block;
                            color: #999;
                            height: 1.7rem;
                            font-size: 1.2rem;
                            letter-spacing: 0.1rem;
                        }
                    }
                }
            }
        }
    }
</style>
