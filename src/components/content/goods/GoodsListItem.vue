<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="">

    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
      props: {
          goodsItem: {
            type: Object,
            default() {
              return {}
            }
          }
      }
    }
</script>

<style scoped>
  .goods-item {
    width: 48%;
    border-radius: 5px;

  }

  .goods-item img {
    width: 100%;
    border-radius: 7px;
  }
  .goods-info {
    font-size: 12px;

    overflow: hidden;
    text-align:center ;
    padding-bottom: 3px;
  }
  .goods-info p {
    /*商品介绍过长设置省略号代替显示*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    /*设置价格颜色*/
    color: var(--color-high-text);
    margin-right: 30px;
  }
  .goods-info .collect {
    position: relative;

  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>
