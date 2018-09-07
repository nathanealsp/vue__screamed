<template>
 <div class="movie">
  <p class="movie_title">{{movieDetails.title}}</p>
   <img v-bind:src='imgPath' alt="">
   <p>{{imgPath}}</p>
   <p class="movie_rating">Ratings</p>
  <p class="movie_overview">Overview</p>
 </div>
</template>

<script>
import { POSTER_PATH } from "../Variables.js";

export default {
  name: "Movie",
  data() {
    return {};
  },
  computed: {
    // WILL GENERATE THE IMAGE LINK
    imgPath() {
      const imgLink = `${POSTER_PATH}${this.movieDetails.poster_path}`;
      return imgLink;
    }
  },

  methods: {},
  created() {
    this.getImg();
  },

  props: {
    movieDetails: Object
  }
};
</script>

<style scoped>
.movie {
  color: white;
  text-transform: uppercase;
  width: 300px;
  border: 2px solid #6200ee;
  border-radius: 5px;
  background: #6200ee;
  padding: 0;
  margin: 0;
  -webkit-box-shadow: -2px 10px 45px -9px rgba(74, 20, 140, 1);
  -moz-box-shadow: -2px 10px 45px -9px rgba(74, 20, 140, 1);
  box-shadow: -2px 10px 45px -9px rgba(74, 20, 140, 1);
}
.movie_title {
  background: #6200ee;
  padding: 5px;
  margin: 0;
  font-weight: bold;
}
img {
  width: 100%;
}
</style>