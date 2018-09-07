import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from "./components/MovieList.vue";

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Movie List',
            component: MovieList,
        }
    ]
})


export default router;