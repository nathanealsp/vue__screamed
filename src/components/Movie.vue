<template>
 <div class="movie">
   <img v-bind:src='imgPath' alt="">
   <div>EHYEYYEYEYEYEYE</div>
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
    this.getImg();
  },
  // PROPS
  props: {
    movieDetails: Object
  }
};
</script>

<style scoped>
img {
  /* width: 185px; */
  /* border-radius: 5px; */
  /* -webkit-box-shadow: -2px 10px 45px -9px rgba(74, 20, 140, 1);
  -moz-box-shadow: -2px 10px 45px -9px rgba(74, 20, 140, 1);
  box-shadow: -2px 10px 45px -9px rgba(74, 20, 140, 1); */
}

/* img:hover {
  -webkit-box-shadow: -2px 10px 45px -9px rgba(74, 20, 140, 1);
  -moz-box-shadow: -2px 10px 45px -9px rgba(74, 20, 140, 1);
  box-shadow: -2px 10px 45px -9px rgba(74, 20, 140, 1);
} */

.movie {
  display: grid;
  grid-template-columns: 185px, 1fr;
  width: 298px;
  height: 278px;
}

</style>