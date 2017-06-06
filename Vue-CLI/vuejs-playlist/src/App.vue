<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div> -->
  <div>
    <h1>{{title}}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import Ninjas from './Ninjas.vue'

export default {
  // name: 'app',
  // components: {
  //   Hello
  // }
  components: {
    'ninjas': Ninjas
  },
  data(){
    return{
      title: 'Ninja App'
    }
  },
  methods:{

  }
}
</script>

<style scoped>
h1{
    color: purple;
}
</style>
