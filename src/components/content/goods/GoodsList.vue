<template>
    <div class="goods">
      <GoodsListItem v-for="item in goods" :goods-item="item"></GoodsListItem>
      <!--{{goods}}-->
    </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

    export default {
      name: "GoodsList",
      components: {
        GoodsListItem
      },
      props: {
          goods: {
            type: Array,
            default() {
              //此数组用于存储home组件传递过来的数据  用于数据展示
              return []
            }
          }
      }
    }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 5px 0;
  }

</style>
