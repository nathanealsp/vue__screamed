<template>
  <div>
<h1>Movie List</h1>

<button type="submit" v-on:click="fetchData">Load Movies</button>

<ul>
  <li v-for="(item, idx) in movies" :key="idx">{{item.title}}</li>
</ul>
  </div>
</template>

<script>
import { api_Key } from "../Variables";
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
export default {
  name: "MovieList",
  data() {
    return { movies: [] };
  },

  methods: {
    async fetchData() {
      if (!this.movies.length > 0) {
        const res = await fetch(url);
        const movies = await res.json();
        this.movies = [...this.movies, ...movies.results];
        console.log(movies.results);
      }
      try {
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
</style>