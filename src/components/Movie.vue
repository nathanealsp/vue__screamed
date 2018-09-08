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
  display: grid;
  box-shadow: -2px 10px 45px -9px rgba(74, 20, 140, 1);
}

img {
  height: 278px;
}
</style>