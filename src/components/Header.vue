<template>
  <div>
<header>Streamed</header>
<p>{{greeting}}</p>
<button type="submit" v-on:click="logger">Log Watever</button>
 <ul>
    <li v-for="(todo, index) in todos" v-bind:key = "index">
      {{ todo.name }}
    </li>
  </ul>
  </div>
</template>

<script>
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
  }
};
</script>

<style scoped>
</style>

