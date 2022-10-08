<template>
  <div style=" width: 100%; display: flex; flex-direction: column; justify-content: flex-start; height: 80vh;">
    <div class="account_medal">
        <div class="card">
          <h3>Медали</h3>
          <p>Текст</p>
          <p v-on:click="false">Развернуть</p>
        </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="card">
          <h3>Операция 1</h3>
          <p>Текст</p>
          <p v-on:click="false">Развернуть</p>
          <div>
            asdkksod
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <h3>Операция 2</h3>
          <p>Текст</p>
          <p>Some text</p>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <h3>Операция 3</h3>
          <p>Текст</p>
          <p>Some text</p>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div style="display: flex; justify-content: center">
            <h3>Операция 4</h3>
            <p></p>
          </div>
          <p>Текст</p>
          <p>Some text</p>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div style="display: flex; justify-content: center">
            <h3>Операция 4</h3>
            <p></p>
          </div>
          <p>Текст</p>
          <p>Some text</p>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div style="display: flex; justify-content: center">
            <h3>Операция 4</h3>
            <p></p>
          </div>
          <p>Текст</p>
          <p>Some text</p>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div style="display: flex; justify-content: center">
            <h3>Операция 4</h3>
            <p></p>
          </div>
          <p>Текст</p>
          <p>Some text</p>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div style="display: flex; justify-content: center">
            <h3>Операция 4</h3>
            <p></p>
          </div>
          <p>Текст</p>
          <p>Some text</p>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div style="display: flex; justify-content: center">
            <h3>Операция 4</h3>
            <p></p>
          </div>
          <p>Текст</p>
          <p>Some text</p>
        </div>
      </div>

</div>
  </div>
</template>

<script>
export default {
  name: 'Account'
}
</script>

<style>
* {
  box-sizing: border-box;
}

.account_name {
  display:flex;
  justify-content: center;
  margin:50px 0;
}
.account_medal {
  width: 100%
}

.column {
  float: left;
  width: 25%;
  padding: 0 10px;
  margin-bottom: 20px;
}

.row {margin: 0 -5px;}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  text-align: center;
  background-color: #f1f1f1;
}
</style>
