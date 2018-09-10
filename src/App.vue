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
body {
  font-family: "Source Sans Pro", sans-serif;
}
#app {
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f5f0;
}
</style>

