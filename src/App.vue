<template>
  <div id="app">
    <Header v-bind:greeting='title'/>
    <MovieList/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MovieList from "./components/MovieList.vue";

export default {
  name: "app",
  data() {
    return {
      title: "Biggest Movie DataBase"
    };
  },
  components: {
    Header,
    MovieList
  }
};
</script>

<style>
#app {
}

li {
  list-style: none;
}
</style>

