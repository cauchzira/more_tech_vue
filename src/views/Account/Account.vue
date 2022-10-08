<template>
  <div class="account">
    <div class="account_medal">
      <div class="account_box">
        <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>
        <div class="account_title">
          <div>
            <p>Витрина Медалей</p>
          </div>
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
                <img :src="require('@/assets/img/bronze-medal.png')" alt="" srcset=""></img>
            </div>
            <div class="account_medal_img">
                <img :src="require('@/assets/img/silver-medal.png')" alt="" srcset=""></img>
            </div>
            <div class="account_medal_img">
                <img :src="require('@/assets/img/bronze-medal.png')" alt="" srcset=""></img>
            </div>
            <div class="account_medal_img">
                <img :src="require('@/assets/img/bronze-medal.png')" alt="" srcset=""></img>
            </div>
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

.account_box {
  width: 100%;
  height: 300px;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.wave {
  opacity: 0.6;
  position: absolute;
  top: -80%;
  left: 40%;
  background: rgb(0, 170, 255);
  width: 1000px;
  height: 900px;
  margin-left: -400px;
  margin-top: -500px;
  border-radius: 43%;
  animation: wave 3000ms infinite linear;

  overflow: hidden;
}

.wave.-three {
  animation: wave 5000ms infinite linear;
}

.wave.-two {
  animation: wave 7000ms infinite linear;
  opacity: .3;
  background: rgb(58, 194, 212);
}

.account_box:after {
  content: '';
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(rgb(255, 255, 255), 1), rgba(rgb(221, 238, 255), 0)100%, rgba(241,241,241, 1));
  z-index: 11;
  transform: translate3d(0, 0, 0);
}

.account_title {
  position: absolute;
  width: 100%;
  z-index: 1;
  text-align: center;
  transform: translate3d(0, 30px, 0);
  color: black;
  letter-spacing: .4em;
  font-size: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
@keyframes wave {
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
}

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
  margin:20px 0;
}

.account_medal_button {
  display: flex;
  justify-content: center;
  clear: both;
  width: 100%;
  margin: 0 auto;

  transform: translate3d(0, 30px, 0);
}

.account_medal_img {
  float: left;
  cursor: pointer;
  margin: 0 10px
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
