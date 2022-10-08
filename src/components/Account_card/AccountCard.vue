<template>
  <div class="column">
        <div class="card">
          <h3>Операция 1</h3>
          <p>Текст</p>
          <p @click="toggle = !toggle" class="card_info">Развернуть</p>
          <div v-if="toggle">
            <div style="margin: 10px 0">
              <h4>Приобретено тоекенов</h4>
              <p>01.01.2000</p>
            </div>
            <div style="margin: 10px 0">
              <h4>Приобретено тоекенов</h4>
              <p>01.01.2000</p>
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
  background-color: #ffffff;

  h3{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
  }
}
</style>
