<template>
  <div class="login">
    <form @submit.prevent="loginHandler">
      <div class="login_header">
        <span class="login_header-text">VNet</span>
      </div>
      <div class="login_inputs">
          <div class="login_inputs login_inputs-login">
            <p>Логин</p>
            <input type="text">
          </div>
          <div class="login_inputs login_inputs-password">
            <p>Пароль</p>
            <input type="password">
          </div>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss">
@import './Login.scss';
</style>