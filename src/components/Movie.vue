<template>
 <div class="movie">
   <img v-bind:src='imgPath' alt="">
 </div>
</template>

<script>
import { POSTER_PATH } from "../Variables.js";

export default {
  // COMPONENT NAME
  name: "Movie",
  // DATA FUNCTION RETURNS AN OBJECT
  data() {
    return {};
  },
  // COMPUTED PROPERTIES
  computed: {
    // WILL GENERATE THE IMAGE LINK
    imgPath() {
      const imgLink = `${POSTER_PATH}${this.movieDetails.poster_path}`;
      return imgLink;
    }
  },
  // METHODS
  methods: {},
  created() {
    // this.getImg();
  },
  // PROPS
  props: {
    movieDetails: Object
  }
};
</script>

<style scoped>
.movie {
  /* border: 0.125em solid rgba(57, 138, 106, 0.84); */
  border-radius: 0.2em;
  display: grid;
  height: 278px;
}
.movie:hover {
  /* border: 0.125em solid rgba(57, 138, 106, 0.84); */
  border-radius: 0.2em;
  display: grid;
  -webkit-box-shadow: 0px 29px 73px -36px rgba(57, 138, 106, 0.84);
  -moz-box-shadow: 0px 29px 73px -36px rgba(57, 138, 106, 0.84);
  box-shadow: 0px 29px 73px -36px rgba(57, 138, 106, 0.84);
  border-bottom: 1px solid rgba(57, 138, 106, 0.84);
  height: 278px;
}

img {
  height: 278px;
}
</style>