<template>
    <div id="main2">
        <div id="your_location" v-show="display">
            你的位置
        </div>
        <div class="location" v-show="display">
            温州
        </div>
        <ul class="list_ul" v-for="(item,key,index) of list" :key="index" v-show="display">
            <div class="list_title" :id="key">{{key}}</div>
            <li class="location" v-for="l of item" :key="l.id">{{l.name}}</li>
        </ul>
        <ul class="list_ul2" v-show="!display">
            <li class="location"  v-for="(item,key,index) of result" :key="index">{{item.name}}</li>
            <!-- {{result}} -->
        </ul>
        <div class="left_controller" v-show="display">
            <ul class="left_controller_ul">
                <li class="left_controller_li" @click="position(item)" v-for="(item,index) of asci" :key="index">{{item}}</li>               
            </ul>
        </div>
    </div>
</template>

<script>
const axios = require("axios");
import Bus from "@/assets/js/eventBus.js";
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
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      display: true,
      result: []
    };
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
    },
    getresult: function(msg) {
      this.result = [];
      console.log("接受到..." + msg);
      for (let i in this.list) {
        this.list[i].forEach(element => {
          // console.log(element.name)
          //   console.log("element.name:"+element.name+element.name.indexOf(msg))
          if (
            element.name.indexOf(msg) != -1 ||
            element.spell.indexOf(msg) != -1
          ) {
            console.log(element);
            this.result.push(element);
          }
        });
      }
    }
  },
  mounted() {
    this.getdata();
    var self = this;
    Bus.$on("searchinput", function(msg) {
      self.display = msg;
    });
    // 接受用户输入的内容
    Bus.$on("textChange", function(msg) {
      // self.result = msg
      console.log(msg);
      if (msg == "") {
        self.display = true;
      } else {
        self.display = false;
        if (self.timer) {
          clearTimeout(self.timer);
          console.log(self.timer);
        }
        self.timer = setTimeout(() => self.getresult(msg), 100);
      }
    });
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
    padding-top: 0.05rem;
}

.list_ul2 {
    padding-top: 0.88rem;
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

.list_title:target {
    padding-top: 0.88rem;
    margin-top: -0.88rem;
}

.location {
    font-size: 0.15rem;
    color: #212121;
    height: 0.44rem;
    line-height: 0.44rem;
    padding-left: 0.1rem;
}

.location {
    font-size: 0.15rem;
    color: #212121;
    height: 0.44rem;
    line-height: 0.44rem;
    padding-left: 0.1rem;
}
</style>
