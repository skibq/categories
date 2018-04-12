<template>
  <div id="app">
    <h1>Welcom in budget planning.</h1>
    <h2>You can start by adding some categories below</h2>
    <hr>
    <div class="container">
      <categoryListing></categoryListing>
    </div>
  </div>
</template>

<script>
import categoryListing from './components/categoryListing.vue'

export default {
  name: 'app',
  components: {
    categoryListing
  }
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
</style>
