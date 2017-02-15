<template>
    <div id="Registration">
        <form @submit.prevent="register" class="Registration__form" novalidate>
            <input v-validate="'required'" class="Registration__textInput" type="text" name="firstName" placeholder="First Name" v-model="registrant.firstName" autofocus required>
            <input v-validate="'required'" class="Registration__textInput" type="text" name="lastName" placeholder="Last Name" v-model="registrant.lastName" required>
            <input v-validate="'required|email'" class="Registration__textInput" type="email" name="email" placeholder="Email Address" v-model="registrant.email" required>
            <input v-validate="{rules: {
                required: true,
                regex: /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/
            }}" v-mask="'(###) ###-####'" class="Registration__textInput" type="text" name="phone" placeholder="Phone Number" v-model="registrant.phone" required>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    import {Profile} from '../resources';

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
                this.$validator.validateAll()
                    .then(success => {
                        Profile.register(this.registrant)
                            .then(response => {
                                console.log('YAY', response);
                            })
                            .catch(response => {
                                console.log('BOO', response);
                            })
                            .finally(() => {
                                console.log('DONE');
                            });
                    })
                    .catch(error => {
                        console.log('error', error, this.errors.any(), this.errors.all());
                    });
            }
        }
    }
</script>
