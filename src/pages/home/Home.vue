<template>
  <div>
    <Header></Header>
    <Swiper></Swiper>
    <Tab></Tab>
    <Recommend></Recommend>
    <Gowhere></Gowhere>
  </div>
</template>

<script>
// import Header from './components/Header';
import Header from "./component/Header";
import Swiper from "./component/Swiper";
import Tab from "./component/Tab";
import Recommend from "./component/Recommend";
import Gowhere from "./component/Gowhere";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header,
    Swiper,
    Tab,
    Recommend,
    Gowhere
  }
};
</script>

<style scoped>
</style>
