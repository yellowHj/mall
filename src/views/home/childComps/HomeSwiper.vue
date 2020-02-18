<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper"

    export default {
      name: "HomeSwriper",
      props: {
        //用于存储数据banners
        banners: {
          type: Array,
          default() {
            return []
          }
        }
      },
      components: {
        Swiper,
        SwiperItem
      }
    }
</script>

<style scoped>

</style>
