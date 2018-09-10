<template>
  <div class="movie__detail">
    <p>{{movie.name}}</p>
    <img v-bind:src='imgPath' alt="">
    <p>{{movie.title}}</p>
    <p>{{movie.budget}}</p>
    <p>{{movie.overview}}</p>
    <p>{{movie.poster_path}}</p>
    <p>{{movie.release_date}}</p>
    <p>{{movie.runtime}}</p>
    <p>{{movie.tagline}}</p>

  </div>
</template>

<script>
import { api_Key } from "../Variables";
// import { POSTER_PATH } from "../Variables.js";
import { BACKDROP_PATH } from "../Variables.js";

// IMPORT API KEY

// URL

export default {
  // COMPONENT NAME
  name: "MovieDetail",
  // DATA (ALWAYS A FUNCTION THAT RETURNS AN OBJECT)
  data() {
    return {
      movie: {}
    };
  },
  // METHODS HAVE ACCESS TO DATA THROUGH THIS KEYWORD
  methods: {
    async fetchData() {
      try {
        const routeParam = `${this.$route.params.id}`;
        const url = `https://api.themoviedb.org/3/movie/${routeParam}?api_key=${api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
`;
        const res = await fetch(url);
        const movie = await res.json();
        this.movie = { ...movie };
      } catch (error) {
        alert(error);
      }
    }
  },
  // LIFE CYCLE HOOK (CREATED)
  created() {
    this.fetchData();
  },
  // COMPUTED PROPERTIES
  computed: {
    // WILL GENERATE THE IMAGE LINK
    imgPath() {
      const imgLink = `${BACKDROP_PATH}${this.movie.poster_path}`;
      return imgLink;
    }
  }
};
</script>

<style scoped>
.movie__detail {
  width: 60%;
  height: 50vh;
  margin: 0 auto;
}

img {
  width: 100%;
}
</style>