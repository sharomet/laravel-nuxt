<template>
  <div>
    <TopNavBar></TopNavBar>
    <nuxt />
  </div>
</template>

<script>
  import TopNavBar from '~/components/TopNavbar'

  export default {
    components: {
      TopNavBar
    }
  }
</script>
