<template>
    <div>
        <Header></Header>
        <LocationSearch></LocationSearch>
        <Details></Details>
    </div>
</template>

<script>
import Header from "./component/Header";
import LocationSearch from "./component/LocationSearch";
import Details from "./component/Details";

export default {
  name: "Location",
  components:{
      Header,
      LocationSearch,
      Details
  }
};
</script>

<style scoped lang='stylus'>
</style>
