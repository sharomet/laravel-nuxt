<template>
  <div class="container">
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    async fetch({ store }) {
      if(store.getters['users/GET_USERS'].length === 0) {
        await store.dispatch('users/FETCH_USERS');
      }
    },
    computed: {
      users() {
        return this.$store.getters['users/GET_USERS'];
      }
    }
  }
</script>
