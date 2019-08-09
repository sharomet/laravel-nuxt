<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <strong>Login</strong>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="onSubmit">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input v-model="form.email" type="email" id="email" class="form-control" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input v-model="form.password" type="password" id="password" class="form-control" placeholder="Password">
                            </div>
                            <div class="form-group mb-0 text-right">
                                <button type="submit" class="btn btn-primary">Login</button>
                                <nuxt-link class="btn btn-secondary" to="/auth/register">Register</nuxt-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'authLayout',
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

