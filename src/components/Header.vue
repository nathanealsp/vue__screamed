<template>
  <div>
<header>Streamed</header>
<p>{{greeting}}</p>
<button type="submit" v-on:click="logger">Log Watever</button>
 <ol>
    <li v-for="todo in todos">
      {{ todo.name }}
    </li>
  </ol>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
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
      console.log(this);
      console.log(this.todos.map(item => item.name));
    }
  }
};
</script>

<style scoped>
header {
}
</style>

