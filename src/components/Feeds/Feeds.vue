<template>
  <div class="container">
    <ul class="items-list">
      <FeedItem  v-for="el in 20" :key="el"/>
    </ul>
  </div>
</template>

<script>
import FeedItem from '@/components/Feeds/FeedItem.vue'
export default {
  name: 'Feeds',
  components: {
    FeedItem
  }
}
</script>

<style lang="scss">
.items-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 35px;
  @media (max-width: 1000px)  {
    padding: 100px
  }
}
.container {
  margin-top: 60px;
}
</style>