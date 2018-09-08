<template>
  <div>
    <h1>Streamed</h1>
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
div {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
h1 {
  color: aliceblue;
  background-color: #6200ee;
  padding: 20px;
  margin: 0;
}
</style>

