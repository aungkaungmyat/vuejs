<template>
    <div>
        <!-- <show-blog></show-blog>
        <list-blog></list-blog> -->
        <!-- <app-header></app-header>
        <router-view></router-view> -->
        <app-test></app-test>
    </div>
</template>

<script>
// Imports
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import listBlog from './components/listBlog.vue';
import header from './components/header.vue';
import tester from './components/formtest.vue';

export default {
    components: {
        'add-blog': addBlog,
        'show-blog': showBlog,
        'list-blog': listBlog,
        'app-header': header,
        'app-test': tester
    },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
