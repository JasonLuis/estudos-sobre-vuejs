import Vue from "vue";
import VueRouter from 'vue-router';

import Home from '../components/FuteSectionBanner';
import News from '../components/FuteSectionNews';
import Notice from '../components/FuteSectionNewsNotice'
import Fute404 from '../components/Fute404';

Vue.use(VueRouter);

export default new VueRouter({
    linkExactActiveClass: 'link-active',
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/news',
            alias: '/notices',
            component: News,
        }, 
        {
            path: '/news/:idnotice',
            name: 'notice',
            component: Notice,
            beforeEnter: (to, from , next) => {
                next();
            }
        },{
            path: '/admin',
            redirect: '/'
        },
        {
            path: '*',
            component: Fute404
        }
    ],
});

