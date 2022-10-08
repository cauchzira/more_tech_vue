<template>
  <div class="login">
    <div class="login_background">
      <img :src="require('@/assets/img/login.png')" alt="" srcset="">
    </div>
    <form @submit.prevent="loginHandler">
      <div class="login_header">
        <span class="login_header-text">ReadStarter</span>
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
        <button class="btn">Войти</button>
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
