
<template>
  <div class="movie_list">
    <ul>
    <Movie v-for="(item, idx) in movies" :key="idx" v-bind:movieDetails='item'/>
    </ul>
  </div>
</template>

<script>
// IMPORT COMPONENTS
import Movie from "./Movie";
// IMPORT API KEY
import { api_Key } from "../Variables";
// URL
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
export default {
  // COMPONENT NAME
  name: "MovieList",
  // DATA (ALWAYS A FUNCTION THAT RETURNS AN OBJECT)
  data() {
    return { movies: [] };
  },
  // METHODS HAVE ACCESS TO DATA THROUGH THIS KEYWORD
  methods: {
    async fetchData() {
      try {
        if (!this.movies.length > 0) {
          const res = await fetch(url);
          const movies = await res.json();
          this.movies = [...movies.results];
        }
      } catch (error) {
        alert(error);
      }
    }
  },
  // LIFE CYCLE HOOK (CREATED)
  created() {
    this.fetchData();
  },
  // COMPONENTS
  components: {
    Movie
  }
};
</script>

<style scoped>
.movie_list {
  padding-top: 94px;
}
ul {
  width: 60%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(483px, 1fr));
  grid-gap: 35px;
}
</style>