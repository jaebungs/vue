<template>
  <div id="app">
    <img class ="logo" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.flex {
  display: flex;
  align-items: center;
}

.center {
  width: max-content;
  margin: 0 auto;
}

.logo {
  width: 50px;
  height: 50px;
}

.button {
  padding: 0.3rem 1rem;
  background-color: #66bb6a;
}

</style>
