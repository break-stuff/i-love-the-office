import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Quotes from '../views/Quotes.vue';

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
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
