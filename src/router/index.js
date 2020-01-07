import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Quotes from '../views/Quotes.vue';
import Videos from '../views/Videos.vue';
import PageNotFound from '../views/PageNotFound.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/quotes',
        name: 'quotes',
        component: Quotes
    },
    {
        path: '/videos',
        name: 'videos',
        component: Videos
    },
    {
        // will match everything
        path: '*',
        component: PageNotFound
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
