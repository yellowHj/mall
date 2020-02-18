<template>
  <div id="home">
    <!--导航栏-->
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <!--轮播图-->
      <home-swiper :banners="banners"></home-swiper>
      <!--商品视图-->
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <HomeFeatureView></HomeFeatureView>
      <tab-control :title="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
      <!--通过：goods传递数据到组件-->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <!--组件监听点击必须.native-->
    <back-top @click.native="backClick" v-show="isShowBackTop">

    </back-top>


  </div>
</template>
<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import HomeFeatureView from "./childComps/HomeFeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";

  import {getHomeMultidata, getHomeGoods } from "network/home";

  import BScroll from 'better-scroll'
  export default {
      name: "home",
      components: {
        HomeSwiper,
        HomeRecommendView,
        HomeFeatureView,
        NavBar,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
      },
      data() {
          // data用于存储请求过来的数据
          return {
            banners: [],
            recommends: [],
            goods: {
              //请求到的商品数据存放到此数据模型中 再进行展示
              'pop': {page:0, list:[]},
              'new': {page:0, list:[]},
              'sell': {page:0, list:[]},
            },
            //默认当前类型，监听点击更改类型进行切换
            currentType: 'pop',
            isShowBackTop: false
          }
      },
      computed: {
        showGoods() {
          return this.goods[this.currentType].list
        }
      },
    // creates写主要逻辑 具体事情定义在方法里面
      created() {
          //1.请求多个数据
        this.getHomeMultidataA()
        //2.请求商品数据(请求三类数据)
        this.getHomeGoodsA('pop')
        this.getHomeGoodsA('new')
        this.getHomeGoodsA('sell')
      },
    methods: {
      /**
       * 事件监听相关的方法
       */
      tabClick(index) {
        switch (index) {
          case 0 :
            this.currentType = 'pop'
                break
          case 1 :
            this.currentType = 'new'
            break
          case 2 :
            this.currentType = 'sell'
            break
        }
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      //事件监听拿到滚动的位置
      contentScroll(position) {
        //当滚动的y值大于1000时显示图标
        this.isShowBackTop = (-position.y) > 1000
      },
      loadMore() {
        //调用getHomeGoodsA把currentType传过去进行加载新的数据
        this.getHomeGoodsA(this.currentType)
        //图片加载出来时重新计算可滚动的位置
        this.$refs.scroll.scroll.refresh()
      },

      /**
       * 网络请求相关的方法
       */
      getHomeMultidataA() {
          getHomeMultidata().then(res => {
            // this.result = res;
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
          })
      },
      getHomeGoodsA(type) {
        //动态获取页码
        const page = this.goods[type].page + 1
          //发送网络请求
          getHomeGoods(type, page).then(res => {
            console.log(res);
            // 直接赋值会覆盖前面的数据 错误用法
            // this.goods[type].list = res.data.list
            this.goods[type].list.push(...res.data.list)
            //每请求多一组数据页码加1  下次请求下一页数据 避免重复
            this.goods[type].page += 1

            //调用finishPullUp方法可再次上拉加载
            this.$refs.scroll.finishPullUp()
          })
      }

    }
      }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: #ff8198;
    font-size: 20px;
    color: #f2f2f2;

    /*顶栏固定于顶部位置*/
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }

  /* 滚动固定在顶部*/
  .tab-control {
    position: sticky;
    top:44px
  }

  .content {

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }




</style>
