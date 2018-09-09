<template>
  <div id="app">
    <Header v-bind:greeting='title'/>
    <router-view/>
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
</style>

