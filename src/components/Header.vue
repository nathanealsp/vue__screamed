<template>
  <div>
    <div class="_headerLink">
      <router-link to="/">
        Streamed`
      </router-link>
    </div>
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

input[type="search"] {
  -webkit-appearance: none;
}

.style-scope {
  width: 24px;
}

span {
  height: 36px;
}
.search {
  -webkit-font-smoothing: antialiased;
  background-color: transparent;
  border: 2px solid #398a6a;
  color: #398a6a;
  border-radius: 2px;
  height: 36px;
  box-shadow: none;
  font-family: "Roboto", "Noto", sans-serif;
  font-size: 18px;
  font-weight: 400;
  /* margin-left: 4px; */
  max-width: 100%;
  padding-left: 10px;
  outline: none;
  width: 50%;
}

._headerLink {
  text-transform: uppercase;
  background-color: #fefffe;
  font-size: 2em;
  padding: 30px;
  margin: 0;
}

a {
  font-weight: bold;
  color: #398a6a;
  text-decoration: none;
}
</style>

