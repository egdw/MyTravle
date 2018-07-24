<template>
    <div id="Header_top">
      <div id="nav_back">
        <span class="iconfont">&#xe624;</span>
      </div>
      <div id="nav_title">
          城市选择
      </div>
    </div>
</template>

<script>
export default {
    name:'Header'
};
</script>

<style scoped lang="stylus">
@import "~styles/variable.styl";
#Header_top
    background-color $bgcolor
    height 0.44rem
    display flex
    color white
    #nav_back
        flex 0.5
        padding-top 0.05rem
        padding-left 0.11rem
    #nav_title
        padding-top 0.12rem
        font-size:0.18rem
</style>
