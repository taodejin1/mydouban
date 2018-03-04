<template>
    <div class="types">
        <h2>分类浏览</h2>
        <ul class="type-list">
            <li v-for="item in items.items">
                <a :href="items.baseUri + item.href"> 
                    {{ item.title }} 
                    <span></span>
                </a>
            </li>
            <li></li>
        </ul>
    </div>
</template>

<script>
    export default{
        props:{
            items:{
                type:Object
            }
        },
        
    }
</script>

<style scoped lang='scss'>
    .types{
        margin-top: 1rem;
        h2{
            font-weight: normal;
            text-align: left;
            height: 2.6rem;
            line-height: 2.6rem;
            padding: 0 1.6rem;
            font-size: 1.68rem;
        }
        .type-list{
            margin: 1.6rem 0 0 1.6rem;
            overflow: hidden;
            li{
                float: left;
                box-sizing: border-box;
                width: 50%;
                padding-right: 1.8rem;
                height: 4.2rem;
                line-height: 4.2rem;
                font-size: 1.6rem;
                border-top: solid 0.1rem #eee;
                border-right: solid 0.1rem #eee;
                &:nth-of-type(2n){
                    padding-left: 1.8rem;
                }
                a{
                    display: block;
                    text-align: left;
                    color: #42bd56;
                    span{
                        color: #ccc;
                        float: right;
                        font-weight: bold;
                        display: inline-block;
                        border-right: solid 0.1rem #ccc;
                        border-bottom: solid 0.1rem #ccc;
                        width: 0.8rem;
                        height: 0.8rem;
                        transform: rotate(-45deg);
                        margin-top: 1.5rem;
                    }
                }
            }
        }        
    }
</style>
