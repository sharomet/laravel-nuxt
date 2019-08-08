<template>
    <b-navbar toggleable="lg" type="light" variant="light">
        <div class="container">

            <nuxt-link class="navbar-brand" to="/">Logo</nuxt-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <li class="nav-item active">
                        <nuxt-link class="nav-link" to="/">
                            Home
                            <span class="sr-only">(current)</span>
                        </nuxt-link>
                    </li>
                    <li class="nav-item active">
                        <nuxt-link class="nav-link" to="/auth/register">
                            Register
                        </nuxt-link>
                    </li>
                    <li class="nav-item active">
                        <nuxt-link class="nav-link" to="/dashboard">
                            Dashboard
                        </nuxt-link>
                    </li>

                    <b-nav-item-dropdown right>
                        <template slot="button-content">User</template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

            </b-collapse>
        </div>
    </b-navbar>
</template>