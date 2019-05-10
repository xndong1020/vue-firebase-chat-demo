<template>
  <div class="home">
    <Welcome />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'home',
  components: {
    Welcome
  }
}
</script>

<style lang="scss">
.home{
  display: flex;
  height: 100vh;
  align-items: center;
}
</style>

