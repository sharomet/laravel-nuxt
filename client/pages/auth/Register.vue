<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header">
                        Register
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="register">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input v-model="form.name" type="text" id="name" class="form-control" placeholder="Name">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input v-model="form.email" type="email" id="email" class="form-control" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input v-model="form.password" type="password" id="password" class="form-control" placeholder="Password">
                            </div>
                            <div class="form-group mb-0">
                                <button type="submit" class="btn btn-primary">Submit</button>
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
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async register() {
            await this.$axios.post('/auth/register', this.form);
            this.$auth.login({ data: this.form });
            this.$router.push({name: 'index'});
        }
    }
}
</script>