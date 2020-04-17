<template>
    <div class="recommend">
        <div class="recommendItem" v-for="item in recommend" :key="item.title">
            <a :href="item.link">
                <img :src="item.image" :alt="item.title">
                <p>{{item.title}}</p>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    props:{
        recommend:{
            type: Array,
             default(){
                return []
            }
        }
    }
}
</script>
<style lang="less" scoped>
.recommend{
    display: flex;
    text-align: center;
    margin-top: 5px;
    padding-bottom: 15px;
    border-bottom: 10px solid #eee;

    .recommendItem{
        flex:1;

        img{
            width: 65px;
        }
    }
}
</style>