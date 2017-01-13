// Import Vue and add it to window
window.Vue = require('vue');

// Import dependencies
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

// Tell Vue to use the plugins
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);

// Configure VueResource to push up Laravel's csrfToken
Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);

    next();
});
