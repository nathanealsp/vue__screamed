<template>
  <div>
<header>Streamed</header>
<p>{{greeting}}</p>
<button type="submit" v-on:click="toggleList">{{showButtonText}}</button>

    <ListItem v-if="showList" v-for="(todo, index) in todos" v-bind:key ="index" v-bind:name='todo.name'/>

  </div>
</template>

<script>
import ListItem from "./List-Item.vue";
export default {
  name: "Header",

  data() {
    return {
      showList: true,
      showButtonText: "Hide List",
      heading: "Compared to Trello",
      todos: [
        { name: "PWA" },
        { name: "SSR" },
        { name: "VUE" },
        { name: "PYTHON" }
      ]
    };
  },
  props: {
    greeting: String
  },
  methods: {
    toggleList: function() {
      if (this.showList === true) {
        this.showButtonText = "Show List";
      } else {
        this.showButtonText = "Hide List";
      }

      return (this.showList = !this.showList);
    }
  },
  components: {
    ListItem
  }
};
</script>

<style scoped>
</style>

