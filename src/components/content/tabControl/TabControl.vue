<template>
    <div class="tab-control">
      <div v-for="(item,index) in title" class="tab-contol-item" :class="{active: index === currentIndex}"
      @click="tabclick(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
      props: {
          title: {
            type: Array,
            default() {
              return []
            }
          }
      },
      data() {
          return {
            // 用于记录被选中的标签
            currentIndex: 0
          }
      },
      methods: {
          // 点击按钮动态绑定class设置样式
          tabclick(index) {
            this.currentIndex = index;
            //自定义事件  向子组件传递
            this.$emit('tabClick', index)
          }
      }
    }
</script>

<style scoped>
  .tab-control {
    display: flex;
    justify-content: space-around;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #f2f2f2;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-high-text);

  }
  .tab-contol-item span {
    padding: 5px;
  }



</style>
