<template>
    <div class="movie">
        <header-bar></header-bar>
        <open-app>
            聊聊你的观影感受
        </open-app>
        <div class="contain">
            <h2>{{ movie.title }}</h2>
            <div class="clearfix">
                <div class="left fl">
                    <rating v-if="movie.rating" :rating="movie.rating"></rating>
                    <span> {{ movie.ratings_count }}人评价</span>
                    <p>{{ this.$store.getters.kind }}</p>
                    <a href="#">用App查看影人资料</a>
                </div>
                <div class="right fr">
                    <img v-if="movie.images" :src="movie.images.large" width="100%">
                </div>
            </div>
            <div class="marking clearfix">
                <a href="#" class="fl">想看</a>
                <a href="#" class="fr">看过</a>
            </div>
            <div class="content">
                <h3>{{ movie.title }}的简介</h3>
                <p>{{ movie.summary }}</p>
                <h3>查看更多相关分类</h3>
                <div class="tags">
                    <span v-for="tag in movie.genres"> {{ tag }} </span>
                </div>
            </div>
        </div>
        <scroller title="发现好电影" Type="onlyString" :items="movieTags"></scroller>
        <download-app></download-app>
    </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import OpenApp from '@/components/OpenApp'
import Rating from '@/components/Rating'
import Scroller from '../components/Scroller'
import DownloadApp from '../components/DownloadApp'

export default{
    data(){
        return{

        }
    },
    components:{ HeaderBar,OpenApp,Rating,Scroller,DownloadApp },
    computed:{
        movie(){
            return this.$store.state.movie.singleMovie
        },
        movieTags(){
            return this.$store.state.movie.movieTags
        }
    },
    created(){
        this.$store.dispatch({
            type: 'getSingleMovie',
            id: this.$route.params.detailId
        })
        this.$store.dispatch('getMovie')
    }
}
</script>

<style lang="scss" scoped>
.movie{
    padding-top: 4.8rem;
    text-align: left;
    .contain{
        padding: 0 1.8rem;
        h2{
            margin: 2rem 0 0;
            font-size: 2em;
        }
        .left{
            width: 70%;

            .rating{
                display: inline-block;
            }
            span{
                font-size: 1.4rem;
                color: #aaa;
                padding-left: 1rem;
            }
            p{
                margin-top: 1.5rem;
                padding-right: 2.4rem;
                line-height: 1.6;
                font-size: 1.4rem;
                color: #494949;
            }
            a{
                display: block;
                margin-top: 1rem;
                line-height: 1;
                font-size: 1.4rem;
                color: #42bd56;
            }
        }
        .right{
            width: 30%;
            text-align: center;
        }
        .marking{
            margin: 3rem 0;
            a{
                display: inline-block;
                height: 3rem;
                line-height: 3rem;
                font-size: 1.5rem;
                text-align: center;
                color: #ffb712;
                border: .1rem solid #ffb712;
                border-radius: .3rem;
                width: 48%;
            }
        }
        .content{
            margin-bottom: 3rem;
            h3{
                margin: 0 0 1.5rem;
                font-size: 1.5rem;
                color: #aaa;
                font-weight: normal;
            }
            p{
                font-size: 1.5rem;
                color: #494949;
                margin-bottom: 2rem;
            }
            .tags{
                span{
                    display: inline-block;
                    padding: 0 1.2rem;
                    margin: 1rem 1rem 0 0;
                    line-height: 2.8rem;
                    font-size: 1.5rem;
                    border-radius: 2.8rem;
                    text-align: center;
                    color: #494949;
                    background: #f5f5f5;
                }
            }
        }
    }
}
</style>
