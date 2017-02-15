// Import Vue.js
import Vue from 'vue';

// Import Plugins
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueCookie from 'vue-cookie';
import VueMask from 'v-mask';
import VeeValidate from 'vee-validate';

// Import Components
import Registration from './components/Registration.vue';
import NotFound from './components/NotFound.vue';

// Tell Vue to use the plugins
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueCookie);
Vue.use(VueMask);
Vue.use(VeeValidate);

// Configure VueResource to push up Laravel's csrfToken
Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Vue.cookie.get('XSRF-TOKEN'));
    next();
});

// Define the routes
const routes = [
    { path: '/registration', component: Registration },

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
