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
  -webkit-box-shadow: -2px -1px 37px -7px rgba(57, 138, 106, 1);
  -moz-box-shadow: -2px -1px 37px -7px rgba(57, 138, 106, 1);
  box-shadow: -2px -1px 37px -7px rgba(57, 138, 106, 1);
}
h1 {
  text-transform: uppercase;
  font-weight: bold;
  color: #398a6a;
  background-color: #fefffe;
  font-size: 2em;
  padding: 30px;
  margin: 0;
}
</style>

