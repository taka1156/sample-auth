/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import router from './router';
import store from './store';
import App from './App.vue';

window.Vue = require('vue');
Vue.use(VueRouter);
Vue.use(Vuex);

async function createApp() {
    await store.dispatch('auth/currentUser');
    new Vue({
        el: '#app',
        store,
        router,
        components: { App },
        template: '<App />'
    });
}

createApp();
