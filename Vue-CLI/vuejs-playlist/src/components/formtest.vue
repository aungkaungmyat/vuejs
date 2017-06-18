<template>
  <div id="tester">
    <h1>Events Test</h1>
    <button v-on:click="add(1)">Add a Year</button>
    <button v-on:click="subtract(1)">Subtract a Year</button>
    <button v-on:dblclick="add(10)">Add 10 Years</button>
    <button v-on:dblclick="subtract(10)">Subtract 10 Years</button>
    <p>My age is {{age}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      age: 25
    }
  },
  methods: {
    add:function(inc){
      this.age += inc;
    },
    subtract:function(dec){
      this.age -= dec;
    }
  }
}
</script>

<style>
</style>
