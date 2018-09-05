<template>
  <div>
<header>Streamed</header>
<p>{{greeting}}</p>
<button type="submit" v-on:click="logger">Log Watever</button>
 <ul>
    <!-- <li v-for="(todo, index) in todos" v-bind:key = "index">
      {{ todo.name }}
    </li> -->
    <ListItem v-for="(todo, index) in todos" v-bind:key ="index" v-bind:name='todo.name'/>
  </ul>
  </div>
</template>

<script>
import ListItem from "./List-Item.vue";
export default {
  name: "Header",
  data() {
    return {
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
    logger: function() {
      console.log(this.heading);
    }
  },
  components: {
    ListItem
  }
};
</script>

<style scoped>
</style>

