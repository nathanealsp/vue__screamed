import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from "./components/MovieList.vue";
import MovieDetail from "./components/MovieDetail.vue";

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Movie List',
            component: MovieList,
        },
        {
            path: '/movie/:id',
            name: 'Movie Detail',
            component: MovieDetail,
        }
    ]
})


export default router;