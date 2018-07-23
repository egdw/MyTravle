<template>
  <div>
    <Header></Header>
    <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide><img style="width:100%" src='@/assets/imgs/swiper/1.jpg'></swiper-slide>
    <swiper-slide><img style="width:100%" src='@/assets/imgs/swiper/2.jpg'></swiper-slide>
    <swiper-slide><img style="width:100%" src='@/assets/imgs/swiper/3.jpg'></swiper-slide>
    <swiper-slide><img style="width:100%" src='@/assets/imgs/swiper/4.jpg'></swiper-slide>
    <swiper-slide><img style="width:100%" src='@/assets/imgs/swiper/5.jpg'></swiper-slide>
    <swiper-slide><img style="width:100%" src='@/assets/imgs/swiper/6.jpg'></swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
// import Header from './components/Header';
import Header from "./component/Header";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Home",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        effect: "slide",
        noSwiping : true,
        autoplay:true,
      }
    };
  },
  components: {
    Header,
    swiper,
    swiperSlide
  },
};
</script>

<style scoped>
</style>
