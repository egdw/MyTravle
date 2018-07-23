<template>
    <div>
        <ul class="tab-ul">
             <swiper :options="swiperOption" ref="mySwiper" class="swper-inner-pagination">
                  <swiper-slide v-for="(p,index) of pages" :key="index">
                    <li class="tab-li" v-for="item of p" :key="item.id">
                        <div class="tab-li-div">
                                <img class="tab-img" :src="item.imgurl"/>
                            <div class="tab-img-desc">
                                {{item.title}}
                            </div>
                        </div>
                    </li>
                  </swiper-slide>
                  <div class="swiper-pagination"  slot="pagination"></div>
             </swiper>
             
        </ul>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Tab",
  data() {
    return {
      tablist: [
        {
          title: "国内旅游",
          imgurl:
            "https://pics.lvjs.com.cn/pics/super/2018/02/1519738734_43650.png",
          id: "0001"
        },
        {
          title: "三亚精品",
          imgurl:
            "https://pics.lvjs.com.cn/pics/super/2017/06/1498794432_47538.png",
          id: "0002"
        },
        {
          title: "东北避暑",
          imgurl:
            "https://pics.lvjs.com.cn/pics/super/2018/07/1531468983_35115.png",
          id: "0003"
        },
        {
          title: "海滨度假",
          imgurl:
            "https://pics.lvjs.com.cn/pics/super/2017/05/1494667612_91305.png",
          id: "0004"
        },
        {
          title: "华北一夏",
          imgurl:
            "https://pics.lvjs.com.cn/pics/super/2018/05/1527651048_53624.png",
          id: "0005"
        },
        {
          title: "亲子游",
          imgurl:
            "https://pics.lvjs.com.cn/pics/super/2017/05/1494667733_22880.png",
          id: "0006"
        },
        {
          title: "康旅畅玩",
          imgurl:
            "https://pics.lvjs.com.cn/pics/super/2018/05/1527651596_11468.png",
          id: "0007"
        },
        {
          title: "主题乐园",
          imgurl:
            "https://pics.lvjs.com.cn/pics/super/2017/05/1494668120_91622.png",
          id: "0008"
        },
        {
          title: "测试内容",
          imgurl:
            "https://pics.lvjs.com.cn/pics/super/2017/05/1494668120_91622.png",
          id: "0009"
        },
        {
          title: "测试内容",
          imgurl:
            "https://pics.lvjs.com.cn/pics/super/2017/05/1494668120_91622.png",
          id: "0010"
        },
        {
          title: "测试内容",
          imgurl:
            "https://pics.lvjs.com.cn/pics/super/2017/05/1494668120_91622.png",
          id: "0011"
        },
        {
          title: "测试内容",
          imgurl:
            "https://pics.lvjs.com.cn/pics/super/2017/05/1494668120_91622.png",
          id: "0012"
        }
      ],
      swiperOption: {
        effect: "coverflow",
        noSwiping: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        },
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    pages() {
        const pages = [];
        this.tablist.forEach((item, index) => {
            const p = Math.floor(index/8)
            console.log(p)
            if(!pages[p]){
                pages[p] =[]
            }
            pages[p].push(item)
        });
        return pages
    }
  }
};
</script>

<style scoped lang="stylus">
.tab-ul {
    overflow: hidden;
}

.tab-li {
    width: 25%;
    float: left;
    margin-top: 0.01rem;
    margin-bottom: 0.1rem;
}

.tab-img-div {
    // margin: 0 auto;
    display: block;
    width: 100%;
}

.tab-img {
    width: 0.55rem;
    height: 0.55rem;
    padding-top: 0.01rem;
    display: block;
    margin: 0 auto;
}

.tab-li-div {
    .tab-img-div {
        width: 25%;
    }
}

.tab-img-desc {
    position: relative;
    text-align: center;
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.13rem;
}
</style>
