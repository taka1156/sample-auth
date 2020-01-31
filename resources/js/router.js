import Router from 'vue-router';
import NotFound from './components/NotFound.vue';
import Auth from './components/Auth/AuthDefault.vue';

export default new Router({
    mode: 'history',
    routes:[
       {
           name: 'notfond',
           path: '*',
           component: NotFound
       },
       {
        name: 'auth',
        path: '/',
        component: Auth
       }
    ]
})
