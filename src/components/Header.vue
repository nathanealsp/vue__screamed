<template>
  <div>
<h1>Streamed</h1>
<h3>{{greeting}}</h3>
<button type="submit" v-on:click="toggleList">{{showButtonText}}</button>

  </div>
</template>

<script>
import ListItem from "./List-Item.vue";
export default {
  name: "Header",

  data() {
    return {
      showList: true,
      showButtonText: "Hide List"
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
  components: {}
};
</script>

<style scoped>
</style>

