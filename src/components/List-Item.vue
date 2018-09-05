<template>
  <div>
    <p v-on:click="clicker">{{name}}</p>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    name: String
  },
  methods: {
    clicker() {
      console.log(this.name);
    }
  }
};
</script>

<style scoped>
body {
  margin: 0 auto;
}
p {
  border: 2px solid #6200ee;
  padding: 5px;
  width: 200px;
  border-radius: 2px;
}
</style>