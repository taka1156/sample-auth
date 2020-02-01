import Router from 'vue-router';
import NotFound from './components/NotFound.vue';
import Auth from './components/Auth/AuthDefault.vue';
import Result from './components/Result/Result.vue';
import store from './store';

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
            component: Auth,
            beforeEnter(to, from, next) {
                if (store.getters['auth/status']) {
                    next('/result');
                } else {
                    next();
                }
            }
        },
        {
            name: 'result',
            path: '/result',
            component: Result
        }
    ]
});
