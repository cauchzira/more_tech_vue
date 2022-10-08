<template>
  <aside class="sidebar">
    <Avatar />
    <ul class="sidebar_list">
      <li class="sidebar_item" v-for="item in items" :key="item.title">
      <router-link class="sidebar_item-link" :class="{'active' : $route.name === item.name}" :to="{path: item.url}">
        <span>{{item.title}}</span>
      </router-link>
      </li>
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
        {title: 'Маркетплейс', url:'/', name: 'Feeds'},
        {title: 'Личный кабинет', url:'/user', name: 'User'},
      ]
    }
  },
}
</script>

<style lang="scss">
@import '@/components/Sidebar/Sidebar.scss';
</style>
