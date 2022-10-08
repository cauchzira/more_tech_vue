<template>
  <div>
    <button class="btn btn--primary mx-auto" @click="$refs.modalName.openModal()">Создать события</button>
    <ModalMain ref="modalName">
      <template v-slot:header><Avatar class="modal_avatar"/></template>
      <template v-slot:body><textarea name="asds" id="" cols="30" rows="10" placeholder="Введите текст..."></textarea></template>
      <template v-slot:footer><input type="image"><button class="btn" @click="$refs.modalName.closeModal()">Добавить</button> </template>
    </ModalMain>
  </div>
</template>

<script>
import ModalMain from '@/components/modal_view/ModalMain.vue'
import Avatar from '@/components/Avatar/Avatar.vue'

export default {
  name: 'ModalCreate',
  components: {
    ModalMain,
    Avatar
  }
}
</script>

<style lang="scss">
.modal_avatar {
  margin-right: 5px;
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
