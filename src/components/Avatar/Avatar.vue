<template>
  <div class="user_avatar">
    <img class="user_img" :src="url ? url : gender" alt="">
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    url: {
    type: String,
    },
  },
  computed: {
    gender() {
      if(true) return require('@/assets/img/male-placeholder-image.jpeg')
    }
  }

}
</script>

<style lang="scss">
.user {
  &_img {
    width: 200px;
    border-radius: 50%;
  }
}

</style>