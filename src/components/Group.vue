<template>
    <div class="group">
        <div class="title"> {{ title }} </div>
        <div v-for="item in items" class="option">
            <router-link :to="{}">
                <img v-if="item.images.small" :src="item.images.small" alt="">
                <b> {{ item.title }}</b>
                <i>{{ item.group_member }} 人</i>
                <div class="info">
                    <span>{{ item.group_topic.time }}</span>
                    <span>{{ item.group_topic.title }}</span>
                </div>
            </router-link>
        </div>
        <slot name="more"></slot>
    </div>
</template>

<script>
    export default{
        props:{
            title:{
                type:String
            },
            items:{
                type:Array
            }
        }
    }
</script>

<style scoped lang='scss'>
    .group{
        text-align: left;
        .title{
            font-size: 1.68rem;
            color: #111;
            padding: 3rem 1.8rem 0 1.8rem;
        }
        .option{
            padding: 1.5rem 1.8rem 1.5rem 0;
            margin-left: 1.8rem;
            font-size: 1.68rem;
            border-bottom: 1px solid #F2F2F2;

            a{
                display: block;
                b{
                    font-weight: normal;
                    vertical-align: top;
                    line-height: 4rem;
                    padding-left: 1rem;
                    color: #111;
                }
                i{
                    font-style: normal;
                    float: right;
                    line-height: 4rem;
                    color: #ccc;
                    font-size: 1.5rem;
                }
                .info{
                    margin-top: 1rem;
                    font-size: 1.5rem;
                    color: #aaa;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
        .list-link{
            display: block;
            margin-bottom: 3rem;
            padding: 1.5rem 0;
            font-size: 1.6rem;
            line-height: 1.8rem;
            text-align: center;
            color: #42bd56;
        }
    }
</style>
