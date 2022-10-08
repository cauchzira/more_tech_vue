<template>
  <div>
    <button class="btn btn--primary mx-auto" @click="$refs.modalName.openModal()">Просмотр события</button>
    <ModalMain ref="modalName">
        <template v-slot:header>
          <div style="display: flex">
            <Avatar class="modal_avatar"/>
            <div>
              <h1>Имя пользователя</h1>
              <h2>01.01.2000</h2>
            </div>
          </div>
          <div>
            <div style="text-align: center;">
              <h3>Собрано: 122 из 500</h3>
            </div>
            <progress id="file" max="100" value="70"></progress>
          </div>
        </template>

        <template v-slot:body>
          <img src="" alt="img" srcset="">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </template>

        <template v-slot:footer>
          <div class="mod">
            <div class="mod_like">
              <img :src="require('../../assets/img/like.png')" alt="">
              <p>Нравится</p>
            </div>
            <div class="mod_share">
              <img :src="require('../../assets/img/share.png')" alt="">
              <p>Поделиться</p>
            </div>
            <div class="mod_invest">
              <img :src="require('../../assets/img/token.png')" alt="">
              <p>Инвестировать</p>
            </div>
          </div>
          <div class="">
            <div class="mod_comments">
              Коментарии
            </div>
            <!-- <button class="btn" @click="$refs.modalName.closeModal()">Cancel</button> -->
            <div class="modal_comments_user">
              <Avatar class="modal_avatar"/>
              <div>
                <h1>Пользователь</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
                <h2>01.01.2000</h2>
              </div>
            </div>
            <div class="modal_comments_user">
              <Avatar class="modal_avatar"/>
              <div>
                <h1>Пользователь</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
                <h2>01.01.2000</h2>
              </div>
            </div>
            <div class="modal_comments_user">
              <Avatar class="modal_avatar"/>
              <div>
                <h1>Пользователь</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
                <h2>01.01.2000</h2>
              </div>
            </div>
          </div>
        </template>
      </ModalMain>
  </div>
</template>

<script>
import ModalMain from '@/components/modal_view/ModalMain.vue'
import Avatar from '@/components/Avatar/Avatar.vue'

export default {
  name: 'ModalView',
  components: {
    ModalMain,
    Avatar
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
.modal_avatar {
  margin-right: 5px;
  img {
    width: 50px;
    height: 50px;
  }
}

.mod {
  display: flex;
  border-radius: 15%;
  img {
    width: 20px;
    height: 20px;
  }
  &_like {
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: rgb(0, 0, 255, 0.1);
    border-radius: 10px;
    padding: 5px;
  }
  &_share {
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: rgb(0, 0, 255, 0.1);
    border-radius: 10px;
    padding: 5px;
    margin: 0 15px;
  }
  &_invest {
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: rgb(0, 0, 255, 0.1);
    border-radius: 10px;
    padding: 5px;
  }
}
.mod_comments {
  display: flex;
  margin: 10px 0;
  cursor: pointer;
}
.modal_comments_user {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;

  p{
    margin: 5px 0;
    font-family: 'Times New Roman', Times, serif;
  }
  h2 {
    color: #5c5c5c;
    font-weight: 400;
    font-size: 13px;
    line-height: 14px;
    font-family: 'Times New Roman', Times, serif;
  }
}
.btn {
  background-color: $primary-color;
    padding: 12px 24px;
    font-weight: bold;
    color: #ffffff;
    border: none;
    transition: all $sidebar-transition;
    &:hover {
      background: transparent;
	    color: $primary-color;
	    box-shadow: inset 0 0 0 3px $primary-color;
    }
}

.overflow-hidden {
  overflow: hidden;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.d-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}
.justify-content-between {
  justify-content: space-between;
}

button {
  border: none;
  outline: inherit;
  cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
</style>
