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
            <input v-model="login" ref="login" type="text">
          </div>
          <div class="login_inputs login_inputs-password">
            <p>Пароль</p>
            <input v-model="password" ref="userpassword" type="password">
          </div>
          <button class="login-btn" type="submit">Войти</button>
        </div>
        <button class="btn">Войти</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { REQUEST_AUTH } from '@/store/action-types'

export default {
  name: 'Login',
  data() {
    return {
      login: '',
      password: ''
    }
  },
  computed: {
    userlogin: {
      get() {
        return this.login
      },
      set(login) {
        this.$refs.login.value = login
        this.login = login
      }
    },
    userpassword: {
      get() {
        return this.password
      }, 
      set(password) {
        this.$refs.password.value = password
        this.password = password
      }
    }
  },
  methods: {
    ...mapActions({
      auth: REQUEST_AUTH,
    }),
    loginHandler() {
      const formData = new FormData();
      formData.append("username", this.login);
      formData.append("password", this.password);

      this.auth(formData).then(response => {
        if(response.access_token) {
          this.$router.push({path: '/'})
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import './Login.scss';
</style>
