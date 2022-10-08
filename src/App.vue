<template>
  <div id="app">
    <section class="body">
      <Sidebar /> 
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
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/reset.scss';
@import '@/assets/styles/vars.scss';
#app {
 background-color: $main-bg;
}
</style>
