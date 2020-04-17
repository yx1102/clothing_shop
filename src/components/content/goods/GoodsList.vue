<template>
    <div class="goodslist">
        <goods-list-item class="goods_item" v-for="item in goods" :key="item.iid" :goodItem="item"></goods-list-item>
    </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'
export default {
    name: 'GoodList',
    props:{
        goods : {
            type: Array,
            default(){
                return []
            }
        }
    },
    methods:{
        getGood(){
            console.log(this.goods);
        }
    },
    components:{
        GoodsListItem
    },
    created(){
        this.getGood()
    }
}
</script>

<style lang="less" scoped>
.goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 3px;

    .goods_item{
        width: 49%;
    }
}
</style>