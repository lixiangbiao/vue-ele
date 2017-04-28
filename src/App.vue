<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './components/common/view/Home.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components:{
      Home
  }
}
</script>

<style>
  @import './assets/css/base.css'
</style>

