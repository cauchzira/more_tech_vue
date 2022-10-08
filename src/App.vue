<template>
  <div id="app">
    <section class="body">
      <Sidebar v-if="hideSide" /> 
      <router-view/>
    </section>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar"
export default {
  name: 'App',
  components: {
    Sidebar
  },
  computed: {
    hideSide() {
      return this.$route.name !== 'Login'
  }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/reset.scss';
@import '@/assets/styles/vars.scss';
#app {
  height: 100vh;
  background-color: $main-bg;
}
.body {
  display: flex;
}
</style>
