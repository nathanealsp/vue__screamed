<template>
  <div>
<h1>Streamed</h1>
<h3>{{greeting}}</h3>
<button type="submit" v-on:click="toggleList">{{showButtonText}}</button>

  </div>
</template>

<script>
export default {
  // NAME OF COMPONENT
  name: "Header",
  // DATA (FUNCTION RETURNS AN OBJECT )
  data() {
    return {
      showList: true,
      showButtonText: "Hide List"
    };
  },
  // PROPS
  props: {
    greeting: String
  },
  // METHODS
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
  // COMPONENTS
  components: {}
};
</script>

<style scoped>
</style>

