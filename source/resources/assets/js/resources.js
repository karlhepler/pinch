import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

export const Profile = Vue.resource('/api/profile', {}, {
    register: {
        method: 'POST',
        url: '/api/profile/register',
    },
});
