<template>
    <div>
        <div id="your_location">
            你的位置
        </div>
        <div class="location">
            温州
        </div>
        <ul class="list_ul" v-for="(item,key) of list" :key="item">
            <div class="list_title">{{key}}</div>
            <li class="location" v-for="l of item" :key="l.id">{{l.name}}</li>
        </ul>
    </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      list: []
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
          // console.log("success")
          console.log(res.data.data.cities)
          this.list = res.data.data.cities;
          //   this.list = res.data.cities;
          //   console.log(this.list);
        })
        .catch(err => {
          console.log("error" + err);
        });
    }
  }
};
</script>

<style scoped lang="stylus">
#your_location {
    background-color: #edf5f9;
    font-size: 0.1rem;
    height: 0.22rem;
    line-height: 0.2rem;
    padding-left: 0.1rem;
}

.list_title {
    height: 0.11rem;
    font-size: 0.1rem;
    height: 0.22rem;
    line-height: 0.22rem;
    padding-left: 0.1rem;
    background-color: #edf5f9;
}

.location {
    font-size: 0.15rem;
    color: #212121;
    height: 0.44rem;
    line-height: 0.44rem;
    padding-left: 0.1rem;
}
</style>
