import Router from 'vue-router';
import NotFound from './components/NotFound.vue';
import Auth from './components/Auth/AuthDefault.vue';
import Result from './components/Result/Result.vue';

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            name: 'auth',
            path: '/',
            component: Auth
        },
        {
            name: 'result',
            path: '/result',
            component: Result
        }
    ]
});
