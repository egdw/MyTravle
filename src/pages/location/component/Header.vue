<template>
<div id="main">
    <div id="Header_top">
      <div id="nav_back">
        <span class="iconfont">&#xe624;</span>
      </div>
      <div id="nav_title">
          城市选择
      </div>
    </div>
    <div class="locationsearch_main">
      <div class="location_input">
          <span>城市名或拼音(如北京/beijing)</span>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="stylus">
@import '~styles/variable.styl';

.locationsearch_main {
    height: 0.4rem;
    background-color: $bgcolor;
}

.location_input {
    opacity: 0.6;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    text-align: center;

    span {
        display: block;
        height: 0.3rem;
        line-height: 0.3rem;
        background-color: #28a1b0;
        color: #43bfcd;
        border: 0.01rem;
        border-radius: 25px;
        -moz-border-radius: 25px;
        font-size: 0.13rem;
    }
}

#main {
    position: fixed;
    width: 100%;
    top 0
    left 0
}

#Header_top {
    background-color: $bgcolor;
    height: 0.44rem;
    display: flex;
    overflow: hidden;
    color: white;

    #nav_back {
        flex: 0.5;
        padding-top: 0.05rem;
        padding-left: 0.11rem;
    }

    #nav_title {
        padding-top: 0.12rem;
        font-size: 0.18rem;
    }
}
</style>
