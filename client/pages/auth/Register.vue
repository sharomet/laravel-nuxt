<template>
    <b-container class="mt-4">
        <b-row class="justify-content-center">
            <b-col lg="6" md="8">
                <b-card no-body
                        header="Register"
                        header-tag="header"
                        header-bg-variant="secondary"
                        header-text-variant="white"
                        header-text-tag="strong"
                >
                    <b-card-body>
                        <b-form @submit.prevent="onSubmit">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input v-model="form.name" type="text" id="name" class="form-control"
                                       placeholder="Name">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input v-model="form.email" type="email" id="email" class="form-control"
                                       placeholder="Email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input v-model="form.password" type="password" id="password" class="form-control"
                                       placeholder="Password">
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword">Confirm Password</label>
                                <input v-model="form.confirmPassword" type="password" id="confirmPassword"
                                       class="form-control" placeholder="Confirm Password">
                            </div>
                            <div class="form-group mb-0 text-right">
                                <button type="submit" class="btn btn-primary">Register</button>
                                <nuxt-link class="btn btn-secondary" to="/auth/login">Login</nuxt-link>
                            </div>
                        </b-form>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>


<script>
    export default {
        data: () => ({
            form: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        }),
        methods: {
            onSubmit() {
                console.log(this.form);
            }
        }
    }
</script>
