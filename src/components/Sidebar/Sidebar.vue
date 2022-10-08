<template>
  <aside class="sidebar">
    <Avatar />
    <ul class="sidebar_list">
      <li class="sidebar_item" v-for="item in items" :key="item.title">{{item.title}}</li>
    </ul>
    <button class="sidebar_logout-btn">
      Выход
    </button>
  </aside>
</template>

<script>
import Avatar from '@/components/Avatar/Avatar.vue'
export default {
  name: 'Sidebar',
  components: {
    Avatar
  },
  data() {
    return {
      items: [
        {title: 'Лента', url:''},
        {title: 'Сообщения', url:''},
        {title: 'Маркетплейс', url:''},
        {title: 'Мероприятия', url:''},
        {title: 'Кошелёк', url:''},
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/components/Sidebar/Sidebar.scss';
</style>