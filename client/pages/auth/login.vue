<template>
    <b-container class="mt-4">
        <b-row class="justify-content-center">
            <b-col lg="6" md="8">
                <b-card no-body
                        header="Login"
                        header-tag="header"
                        header-bg-variant="secondary"
                        header-text-variant="white"
                        header-text-tag="strong"
                >
                    <b-card-body>
                        <b-form @submit.prevent="onSubmit">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input v-model="form.email"
                                       type="email" id="email"
                                       class="form-control"
                                       placeholder="Email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input v-model="form.password"
                                       type="password" id="password"
                                       class="form-control"
                                       placeholder="Password">
                            </div>
                            <div class="form-group mb-0 text-right">
                                <button type="submit" class="btn btn-primary">Login</button>
                                <nuxt-link class="btn btn-secondary" to="/auth/register">Register</nuxt-link>
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
                email: '',
                password: ''
            }
        }),
        methods: {
            onSubmit() {
                console.log(this.form);
            }
        }
    }
</script>

