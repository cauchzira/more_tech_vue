<template>
  <div class="account">
    <div class="account_medal">
        <div class="card">
          <h3>Витрина медалей</h3>
          <p>Текст</p>
          <div class="account_medal_button">
            <div class="account_medal_img">
              <img :src="require('@/assets/img/bronze-medal.png')" alt="" srcset=""></img>
            </div>
            <div class="account_medal_img">
              <img :src="require('@/assets/img/silver-medal.png')" alt="" srcset=""></img>
            </div>
            <div class="account_medal_img">
              <img :src="require('@/assets/img/gold-medal.png')" alt="" srcset=""></img>
            </div>
            <div class="account_medal_img">
              <img :src="require('@/assets/img/gold-medal.png')" alt="" srcset=""></img>
            </div>
            <div class="account_medal_img">
              <img :src="require('@/assets/img/silver-medal.png')" alt="" srcset=""></img>
            </div>
            <div class="account_medal_img">
              <img :src="require('@/assets/img/bronze-medal.png')" alt="" srcset=""></img>
            </div>
          </div>
        </div>
    </div>
    <div class="row">

      <AccountCard/>
      <AccountCard/>
      <AccountCard/>
      <AccountCard/>
      <AccountCard/>
      <AccountCard/>
      <AccountCard/>
      <AccountCard/>
      <AccountCard/>
      <AccountCard/>

    </div>
  </div>
</template>
<script>
import AccountCard from '@/components/Account_card/AccountCard.vue'
export default {
  name: 'Account',
  components: {
    AccountCard
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
* {
  box-sizing: border-box;
}
.account {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  overflow: hidden;
}

.account_medal {
  width: 100%;
  padding: 0 10px;
  margin:50px 0;
}

.account_medal_button {
  display: flex;
  justify-content: center;
  clear: both;
  width: 100%;
  margin: 0 auto;
}

.account_medal_img {
  float: left;
  margin: 0 10px;
}

.row {
  margin: 0 -5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
  .account_medal_button {
    display: table;
    clear: both;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
