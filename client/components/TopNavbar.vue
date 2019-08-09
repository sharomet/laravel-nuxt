<template>
    <b-navbar toggleable="lg" type="dark" variant="primary">
        <div class="container">
            <nuxt-link class="navbar-brand" to="/">Logo</nuxt-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/auth/login">Login</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/auth/register">Register</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/admin/dashboard">Admin</nuxt-link>
                    </li>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>