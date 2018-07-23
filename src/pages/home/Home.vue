<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
  </div>
</template>

<script>
// import Header from './components/Header';
import Header from "./component/Header";
import Swiper from "./component/Swiper"
export default {
  name: "Home",
  data() {
    return {
      
    };
  },
  components: {
    Header,
    Swiper
  },
};
</script>

<style scoped>
</style>
