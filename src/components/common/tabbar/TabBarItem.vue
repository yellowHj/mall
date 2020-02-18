<template>

  <div class="tabbar-item" @click="itemClick">

<!--    <div><img src="../../assets/img/tabbar/home.svg" alt=""></div>-->
<!--    <div>首页</div>-->

<!-- 定义两个插槽动态决定导航位置的图片和文字-->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else ><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>

</template>

<script>
    export default {
      name: "TabBarItem",
      props: {
        path: '',
        activeColor: {
          type: String,
          default: 'red'
        }
      },
      data() {
          return {
            // isActive: false
          }
      },
      computed: {
        isActive() {
          //动态决定活跃的组件  进行更改活跃组件的颜色
          return this.$route.path.indexOf(this.path) !==-1
        },
        //此计算属性是用于动态绑定样式
        activeStyle() {
          return this.isActive ? {color: this.activeColor} : {}
        }
      },
      methods: {
          itemClick() {
            this.$router.replace(this.path)
          }
      }
    }
</script>

<style scoped>
  .tabbar-item {
    width: 100%;
    text-align: center;
    justify-content: space-around;
    height: 49px;
    font-size: 14px;

  }
  .tabbar-item img {
    width: 20px;
    height: 20px;
    margin-top: 3px;
    /*把图片下面默认的三像素 去除*/
    vertical-align: midder;
    margin-bottom: 2px;
  }

</style>
