<template>
    <div class="header">
        <a class="view-more" href="#">
            <slot></slot>
        </a>
        <span class="fast-open">
            <a href="#">极速下载</a>
            <a href="#">打开</a>
        </span>
    </div>
</template>

<script>

</script>

<style lang='scss' scoped>
.header{
    background: url('../assets/promotion_bg.jpg') no-repeat;
    background-size: 100% 100%;
    min-height: 8rem;
    line-height: 8rem;
    font-size: 1.4rem;
    .view-more{
        float: left;
        padding-left: 3.6rem;
        font-weight: normal;
        color: #2CA532;
    }
    .fast-open{
        float: right;
        padding-right: 1rem;
        a{
            padding: 0.4rem 1.4rem;
            font-size: 1.3rem;
            font-weight: bold;
            border: 0.1rem solid #42bd56;
            border-radius: 0.3rem;
            color: #42bd56;
            &:nth-of-type(1){
                color: #fff;
                background: #42bd56;
            }
        }
    }
}
</style>
