<template>
    <div id="main2">
        <div id="your_location">
            你的位置
        </div>
        <div class="location">
            温州
        </div>
        <ul class="list_ul" v-for="(item,key,index) of list" :key="index">
            <div class="list_title" :id="key">{{key}}</div>
            <li class="location" v-for="l of item" :key="l.id">{{l.name}}</li>
        </ul>
        <div class="left_controller">
            <ul class="left_controller_ul">
                <li class="left_controller_li" @click="position(item)" v-for="(item,index) of asci" :key="index">{{item}}</li>               
            </ul>
        </div>
    </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      list: [],
      asci: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "G",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata: function() {
      axios
        .get("/static/mock/city.json")
        .then(res => {
          this.list = res.data.data.cities;
        })
        .catch(err => {
          console.log("error" + err);
        });
    },
    position: function(asci) {
      document.location.hash = asci;
    }
  }
};
</script>

<style scoped lang="stylus">

.left_controller {
    position: fixed;
    right: 0;
    top: 0.9rem;
    height: 100%;
    width: 0.22rem;
}

.left_controller_ul {
    color: #ccc;
    font-size: 0.1rem;
    text-align: center;
    padding-right: 0.1rem;
}

.left_controller_li {
    padding-top: 0.1rem;
}

.list_ul {
 
}

#your_location {
    background-color: #edf5f9;
    font-size: 0.1rem;
    height: 0.22rem;
    line-height: 0.2rem;
    padding-left: 0.1rem;
    padding-top: 0.88rem;
}

.list_title {
    height: 0.11rem;
    font-size: 0.1rem;
    height: 0.22rem;
    line-height: 0.22rem;
    padding-left: 0.1rem;
    background-color: #edf5f9;
}
.list_title:target{
    padding-top 0.88rem
    margin-top -0.88rem
}
.location {
    font-size: 0.15rem;
    color: #212121;
    height: 0.44rem;
    line-height: 0.44rem;
    padding-left: 0.1rem;
}
</style>
