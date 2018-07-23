<template>
    <swiper :options="swiperOption" ref="mySwiper" class="swper-inner-pagination">
    <!-- slides -->
    <swiper-slide><img class="swiper-img-style"  src='@/assets/imgs/swiper/1.jpg'></swiper-slide>
    <swiper-slide><img class="swiper-img-style"  src='@/assets/imgs/swiper/2.jpg'></swiper-slide>
    <swiper-slide><img class="swiper-img-style"  src='@/assets/imgs/swiper/3.jpg'></swiper-slide>
    <swiper-slide><img class="swiper-img-style"  src='@/assets/imgs/swiper/4.jpg'></swiper-slide>
    <swiper-slide><img class="swiper-img-style"  src='@/assets/imgs/swiper/5.jpg'></swiper-slide>
    <swiper-slide><img class="swiper-img-style"  src='@/assets/imgs/swiper/6.jpg'></swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Swiper",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        effect: "slide",
        noSwiping: true,
        autoplay: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped lang="stylus">
.swiper-img-style {
    width: 100%;
}

.swiper-pagination >>> .swiper-pagination-bullet-active {
    background: #fff;
}
</style>
