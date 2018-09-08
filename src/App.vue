<template>
  <div id="apps">
    <Header v-bind:greeting='title'/>
    <div id="app">
    <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  data() {
    return {
      title: "Biggest Movie DataBase"
    };
  },
  components: {
    Header
  }
};
</script>

<style>
#app {
}
</style>

