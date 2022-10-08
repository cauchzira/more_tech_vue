<template>
  <div class="column">
        <div class="card">
          <h3>Начислено токенов</h3>
          <p>08.10.22</p>
          <p @click="toggle = !toggle" class="card_info">Подробнее</p>
          <div v-if="toggle">
            <div style="margin: 10px 0; display: flex; justify-content: center; align-items: center;">
              <img :src="require('@/assets/img/token.png')" alt="" srcset=""></img>
              <div style="text-align: start">
                <h4>Начислено тоекенов 20 шт.</h4>
                <p>08.10.2022 18:33</p>
              </div>
            </div>
            <div style="margin: 10px 0; display: flex; justify-content: center; align-items: center;">
              <img :src="require('@/assets/img/token.png')" alt="" srcset=""></img>
              <div style="text-align: start">
                <h4>Начислено тоекенов 13 шт.</h4>
                <p>08.10.2022 20:01</p>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'AccountCard',
  data () {
    return {
      toggle: false
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
.card_info {
  cursor: pointer;
  display: inline-flex;
  color: black;
  background-color:  rgb(0,170,255, 0.2);
  padding: 4px;
  &:hover {
    color: $primary-color;
  }
}

.column {
  padding: 0 10px;
  width: 60%;
  margin-bottom: 20px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 12px;
  text-align: center;
  background-color: $sidebar-bg;

  h3{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
  }
}
</style>
