<template>
    <div id="Registration">
        <form @submit.prevent="register" class="Registration__form" novalidate>
            <input class="Registration__textInput" type="text" name="firstName" placeholder="First Name" v-model="registrant.firstName" required>
            <input class="Registration__textInput" type="text" name="lastName" placeholder="Last Name" v-model="registrant.lastName" required>
            <input class="Registration__textInput" type="email" name="email" placeholder="Email Address" v-model="registrant.email" required>
        </form>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component ready.')
        },
        data() {
            return {
                registrant: {}
            };
        },
        methods: {
            register() {
                console.log('register', this.registrant);
            }
        }
    }
</script>
