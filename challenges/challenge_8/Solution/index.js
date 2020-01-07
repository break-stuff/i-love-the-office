import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Quotes from '../views/Quotes.vue';
import Videos from '../views/Videos.vue';

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
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
