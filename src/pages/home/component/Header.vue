<template>
    <div id="nav_top">
      <div id="nav_back">
        <span class="iconfont">&#xe624;</span>
      </div>
      <router-link to="Location">
      <div id="nav_location">
        <span class="iconfont">&#xe63f;{{city}}</span>
      </div>
      </router-link>
      <div id="nav_search">
        <span class="iconfont">&#xe632;&nbsp;&nbsp;<input type="text" placeholder="搜索目的地"></span>
      </div>
      <div id="nav_time">
        时间
        
      </div>
      <span class="iconfont iconfont-span">&#xe62d;</span>
    </div>
</template>

<script>
import store from "@/assets/js/store.js";
export default {
  name: "Header",
  data() {
    return {};
  },
  computed:{
    city(){
      return store.state.city
    }
  }
};
</script>

<style scoped lang='stylus'>
  @import '~styles/variable.styl';
  a
    color white
  #nav_top
    overflow hidden
    width 100%
    height 0.44rem
    background-color $bgcolor
    display --webkit-flex
    display flex
    color white
    line-height 0.44rem
    font-size 0.14rem 
    font-weight bold
    #nav_location
      margin-right  .6em
      margin-left .1em
      span 
        font-size 0.14rem
    #nav_back
      float left 
      width  .37rem
      color #7ff
      text-align center
      span
        font-size 0.22rem
    
    #nav_search
      flex 1
      background-color white
      inline-size 0.25rem
      height .3rem
      border-radius 0.05rem
      margin-top .08rem
      margin-right .16rem
      color #888
      line-height 0.3rem
      display flex
      span
        margin-left 0.25rem
        font-size 0.13rem
        input
          flex 1
          width 75%
          line-height 0.09rem
          font-weight: bold
          letter-spacing 0.01rem
          


    #nav_time 
      float right
      padding-right 0.04rem
      span
        font-size .06rem
    .iconfont-span
      font-size 0.08rem
      line-height 0.44rem
      margin-right 0.18rem
</style>
