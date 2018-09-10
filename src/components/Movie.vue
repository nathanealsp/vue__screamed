<template>

 <div class="movie">
   <img v-bind:src='imgPath' alt="">
   <div class="movie__detail">
     <div class="movie__title">{{movieDetails.title}}</div>
     <div class="movie__overview" >{{movieDetails.overview}}</div>
      <div class="movie__more">
        <router-link v-bind:to="linkParams">
          <button>more</button>
        </router-link>
      </div>
   </div>
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
    },
    linkParams() {
      const linkParam = `/movie/${this.movieDetails.id}`;
      return linkParam;
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
  font-size: 16px;
  width: 483px;
  height: 300px;
  display: grid;
  background: white;
  grid-template-columns: 200px 1fr;
  box-shadow: 0 2px 8px rgba(57, 138, 106, 0.5);
}

img {
  width: 100%;
}

.movie__detail {
  display: grid;
  grid-template-rows: 1fr 160px 1fr;
  padding: 10px;
}

.movie__title {
  color: #000;
  width: 100%;
  display: block;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.2em;
  line-height: 1.1em;
  padding: 5px 0;
  margin-bottom: 2px;
}

.movie__overview {
  color: #4d4d4d;
  line-height: 1.4em;
  overflow: hidden;
  text-overflow: ellipsis;
}
.movie__more {
  margin-top: 2px;
  border-top: 1px solid #e3e3e3;
  display: grid;
  justify-items: right;
  align-items: center;
}

button {
  padding: 10px 16px;
  white-space: nowrap;
  font-size: 0.9em;
  cursor: pointer;
  color: aliceblue;
  background-color: #398a6a;
  font-weight: 500;
  letter-spacing: 0.08929em;
  text-decoration: none;
  text-transform: uppercase;
  box-sizing: border-box;
  min-width: 64px;
  height: 36px;
  border: none;
  outline: none;
  border-radius: 2px;
}
</style>