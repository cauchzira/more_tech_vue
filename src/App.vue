<template>
  <div id="app">
    <section class="body">
      <Sidebar v-if="hideSide"/>
      <!-- <ModalView v-if="hideSide"/>
      <ModalCreate v-if="hideSide"/> -->
      <router-view/>
    </section>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar"
import ModalView from "@/components/modal_view/ModalView.vue"
import ModalCreate from "@/components/modal_view/ModalCreate.vue"
import Account from "@/views/Account/Account.vue"
export default {
  name: 'App',
  components: {
    Sidebar,
    ModalView,
    ModalCreate,
    Account
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
  box-sizing: border-box;
}
</style>
