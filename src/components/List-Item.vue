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
p {
  font-weight: bold;
  border: 2px solid #6200ee;
  padding: 5px;
  width: 200px;
  border-radius: 2px;
}
</style>