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
    <div class="locationsearch_main" @click="search">
      <div class="location_input">
          <!-- <span>城市名或拼音(如北京/beijing)</span> -->
          <input v-model="search_text" placeholder="城市名或拼音(如北京/beijing)" />
      </div>
    </div>
</div>
</template>

<script>
import Bus from "@/assets/js/eventBus.js";
export default {
  name: "Header",
  methods: {
    search: function() {
      Bus.$emit("searchinput", false);
    },
    changeText: function(msg) {
      // textChange
      Bus.$emit("textChange", msg)
    //   setTimeout(() => , 2000);
    }
  },
  data() {
    return {
      search_text: ""
    };
  },
  watch: {
    search_text(msg) {
       
        setTimeout(() => this.changeText(msg), 200);
    }
  }
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
    background-color: #28a1b0;
    color: #43bfcd;
    border: 0.01rem;
    border-radius: 25px;
    -moz-border-radius: 25px;

    input {
        display: block;
        height: 0.3rem;
        line-height: 0.3rem;
        width: 60%;
        opacity: 1;
        background-color: #28a1b0;
        font-size: 0.13rem;
        margin: 0 auto;
    }
}

#main {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
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

::-webkit-input-placeholder {
    text-align: center;
}

:-moz-placeholder { /* Firefox 18- */
    text-align: center;
}

::-moz-placeholder { /* Firefox 19+ */
    text-align: center;
}

:-ms-input-placeholder {
    text-align: center;
}
</style>
