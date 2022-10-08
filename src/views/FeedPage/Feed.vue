<template>
  <div class="feeds">
    <div class="tabs">
      <div class="tabs-content">
        <p class="tabs-content-item" @click="setTab('reaction')">Реакции</p>
        <p class="tabs-content-item" @click="setTab('medals')">Медали</p>
      </div>
      <div class="" v-if="currentTab === 'reaction'">
        <Feeds />
      </div>
      <div class="" v-else>
        <Feeds />
      </div>
    </div>
  </div>
</template>

<script>
import Feeds from '@/components/Feeds/Feeds.vue'
export default {
  name: 'FeedsPage',
  components: {
    Feeds
  },
  data() {
    return {
      currentTab: 'reaction'
    }
  },
  methods: {
    setTab(tab) {
      this.currentTab = tab
    }
  }
}
</script>

<style lang="scss">
@import '@/views/FeedPage/Feeds.scss';
@import '@/assets/styles/vars.scss';

.tabs {
  position: relative;
}

.tabs-content {
  display: flex;
  justify-content: flex-start;
  position: absolute;
  text-align: center;
  width: 300px;
  top: 4%;
  left: 150px;
  &-item {
    width: 100px;
    background-color: rgb(0, 170, 255);
    margin-right: 8px;
    padding: 6px;
    border-radius: 8px;
    color: #ffff;
    cursor: pointer;
    transition: all $sidebar-transition;
    &:hover {
      background: transparent;
	    color: $primary-color;
	    box-shadow: inset 0 0 0 3px $primary-color;
    }
  };
}

</style>