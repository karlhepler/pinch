// Import Vue.js
import Vue from 'vue';

// Import Plugins
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

// Import Components
import Example from './components/Example.vue';
import NotFound from './components/NotFound.vue';

// Tell Vue to use the plugins
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);

// Configure VueResource to push up Laravel's csrfToken
Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);
    next();
});

// Define the routes
const routes = [
    { path: '/example', component: Example },

    // The catch-all route
    { path: '*', component: NotFound },
];

// Setup the router
const router = new VueRouter({
    mode: 'history',
    routes,
});

// Create and mount the application
const app = new Vue({
    router,
}).$mount('main');
