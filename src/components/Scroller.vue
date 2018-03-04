<template>
    <div class="scroller">
        <div class="sub-title">
            <h3> {{ title }} </h3>
            <a href="#">更多</a>
        </div>
        <div class="lists" v-if="Type === 'hasCover'">
            <slot name="bookSell"></slot>
            <ul>
                <li v-for="item in items">
                    <router-link :to="'/movie/' + item.id">
                        <img v-if="item.images" :src="item.images.large" alt="">
                        <span>{{ item.title }}</span>
                    </router-link>
                    <rating :rating="item.rating"></rating>
                </li>
            </ul>
        </div>
        <div class="find-more" v-if="Type === 'onlyString'">
            <ul>
                <li v-for="item in items">
                    <a :href="item.href" v-if="!item.line" :style="{color:item.color}">
                        {{ item.title }}
                    </a>
                </li>
            </ul> 
        </div>
    </div>  
</template>

<script>
    import Rating from '@/components/Rating'
    export default {
        props:['title','Type','items'],
        components:{
            Rating
        }
    }
</script>

<style scoped lang='scss'>
    .scroller{
        padding-top: 1rem;
        .sub-title{
            height: 2.6rem;
            line-height: 2.6rem;
            padding: 0 1.6rem;
            h3{
                float: left;
                font-size: 1.68rem;
                font-weight: normal;
            }
            a{
                color: #42bd56;
                float: right;
                font-size: 1.44rem;
            }
        }
        .lists{
            padding: 0.8rem 0;
            ul{
                overflow-x: auto;
                white-space: nowrap;
                li{
                    width: 10rem;
                    margin-left: 1rem;
                    display: inline-block;
                    a{
                        img{
                            height: 15rem;
                        }  
                        span{
                            display: block;
                            max-width: 100%;
                            margin-top: 1rem;
                            line-height: 1.6rem;
                            font-size: 1.6rem;
                            color: #111;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            word-wrap: normal;
                        }
                    }
                }
            } 
        }
        .find-more ul{
            padding: 0.8rem 0;
            overflow-x: auto;
            white-space: nowrap;
            li{
                border:1px solid #FFAC2D;
                display: inline-block;
                margin: 0 0 0.8rem 1.6rem;
                font-size: 1.6rem;
                border-radius: 0.4rem;
                vertical-align: middle;
                &:empty {
                    width: 100%;
                    display: block;
                    height: 0.1rem;
                    border: 0;
                    margin: 0;
                }
                a{
                    height: 5rem;
                    line-height: 5rem;
                    padding: 0 2.4rem;
                    letter-spacing: 0.16rem;
                    overflow: auto;
                    display: block;
                    text-align: center;
                }
            }
        }
    }
</style>
