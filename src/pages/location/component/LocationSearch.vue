<template>
    <div class="locationsearch_main">
      <div class="location_input">
          <span>城市名或拼音(如北京/beijing)</span>
      </div>
    </div>
</template>

<script>
export default {
    name:'LocationSearch'
};
</script>

<style scoped lang="stylus">
@import "~styles/variable.styl";
.locationsearch_main
    height 0.40rem
    background-color $bgcolor
.location_input
    opacity 0.6
    padding-left 0.1rem
    padding-right 0.1rem
    text-align center
    span
        display block
        height 0.30rem
        line-height 0.30rem
        background-color #28a1b0
        color #43bfcd
        border:0.01rem;
        border-radius:25px;
        -moz-border-radius:25px; 
        font-size 0.13rem
</style>
