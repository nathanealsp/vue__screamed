<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header v-bind:greeting='title'/>

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
  // methods,
  // props
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 40px;
}
li {
  list-style: none;
}

button {
  color: aliceblue;
  background-color: #6200ee;
  font-weight: 500;
  letter-spacing: 0.08929em;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-width: 64px;
  height: 36px;
  border: none;
  outline: none;
  line-height: inherit;
  overflow: hidden;
  vertical-align: middle;
  border-radius: 2px;
}
</style>

