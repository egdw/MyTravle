<template>
    <div>
        <Header></Header>
        <Details></Details>
    </div>
</template>

<script>
import Header from "./component/Header";
import Details from "./component/Details";

export default {
  name: "Location",
  components:{
      Header,
      Details
  }
};
</script>

<style scoped lang='stylus'>
</style>
