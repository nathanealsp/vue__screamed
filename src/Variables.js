const api_Key = `c3d81d18723962a075ba77b8956eceaf`;
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const POSTER_PATH = "https://image.tmdb.org/t/p/w500";
const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";
export { api_Key, url, POSTER_PATH, BACKDROP_PATH };