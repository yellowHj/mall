<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

    export default {
      name: "Scroll",
      props: {
        //默认设置为0不实时监听滑动  某组件需要时可动态传值过来进行调用
        probeType: {
          type: Number,
          default: 0
        },
        pullUpLoad: {
          type: Boolean,
          default: false
        }
      },
      data() {
          return {
            scroll: null
          }
      },
      mounted() {
          //1.创建NScroll对象
          this.scroll = new BScroll(this.$refs.scroll,{
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
          })
        //2.实时监听滚动的位置
        this.scroll.on('scroll', (position) => {
          // console.log(position);
          //通过自定义事件把实时监听的位置信息传递出去
          this.$emit('scroll', position)
        })
        //监听上拉事件
        this.scroll.on('pullingUp', () => {
          // console.log('上拉加载更多');
        this.$emit('pullingUp')
        })

      },
      methods: {
          scrollTo(x, y, time=300) {
            this.scroll.scrollTo(x, y, time)
          },
        //想要再次上拉加载更多  必须调用此方法
        finishPullUp() {
            this.scroll.finishPullUp()
        }
      }

    }
</script>

<style scoped>

</style>
