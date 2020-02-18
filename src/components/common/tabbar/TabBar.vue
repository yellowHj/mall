<template>
<div class="tabbar">
  <slot></slot>
</div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  .tabbar {
    display: flex;
    background-color: #f2f2f2;

    /*设置到底部*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /*  阴影*/
    box-shadow: 0px -3px 1px rgba(100,100,100,.2);
  }

</style>
