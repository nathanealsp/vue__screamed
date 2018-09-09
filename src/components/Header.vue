<template>
  <div>

    <h1>
      <router-link to="/">
      Streamed
      </router-link>
      </h1>

    <!-- <span>
    <input type="search" name="" id="" class="search" placeholder="Search for a movie">
    <button type="submit">
      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
          class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
          <g class="style-scope yt-icon">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              class="style-scope yt-icon"></path>
          </g>
        </svg></button>
    </span> -->
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
  /* width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  -webkit-box-shadow: -2px -1px 37px -7px rgba(57, 138, 106, 1);
  -moz-box-shadow: -2px -1px 37px -7px rgba(57, 138, 106, 1);
  box-shadow: -2px -1px 37px -7px rgba(57, 138, 106, 1); */
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
  /* background-color: transparent; */
  border: 2px solid #398a6a;
  color: #398a6a;
  border-radius: 2px;
  box-shadow: none;
  font-family: "Roboto", "Noto", sans-serif;
  font-size: 16px;
  font-weight: 400;

  margin-left: 4px;
  max-width: 100%;
  padding-left: 10px;
  outline: none;
  /* text-align: inherit; */
  width: 50%;
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

