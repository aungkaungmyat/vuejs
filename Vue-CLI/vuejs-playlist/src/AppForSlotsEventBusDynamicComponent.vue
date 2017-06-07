<template>
  <div>
    <!-- from previous Ninja      (comment here)    -->

    <!-- <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer> -->


    <!-- slots -->
    <!-- <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="password" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper> -->

    <keep-alive>
    <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form one</button>
  </div>

</template>

<script>
//from previos Ninja  -----  comment here

/* import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas
  },
  data(){
    return {
      ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ],
      title: "Vue Ninjas"
    }
  },
  methods: {
    updateTitle: function(updatedTitle){
      this.title = updatedTitle
    }
  }
 }*/


//slots         ----- from slots
// import formHelper from './components/formHelper.vue'
import formOne from './components/formOne.vue'
import formTwo from './components/formTwo.vue'

export default {
  components: {
    // 'form-helper': formHelper
    'form-one': formOne,
    'form-two': formTwo
  },
  data() {
    return {
      // title: 'I am dynamic slot title'
      component: 'form-two'
    }
  },
  methods: {

  }
}

</script>

<style scoped>

</style>
