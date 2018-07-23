<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
    <Tab></Tab>
  </div>
</template>

<script>
// import Header from './components/Header';
import Header from "./component/Header";
import Swiper from "./component/Swiper"
import Tab from "./component/Tab"
export default {
  name: "Home",
  data() {
    return {
      
    };
  },
  components: {
    Header,
    Swiper,
    Tab
  },
};
</script>

<style scoped>
</style>
