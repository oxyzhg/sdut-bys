<template>
  <div id="app">
    <base-layout v-if="1">
      <template slot="header">
        <h2 class="page__title">{{pageTitle}}</h2>
      </template>
      <template slot="main">
        <router-view/>
        <bottom-navbar></bottom-navbar>
      </template>
    </base-layout>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import BaseLayout from '@/layouts/default/BaseLayout.vue';
import BottomNavbar from '@/layouts/default/BottomNavbar.vue';

export default {
  name: 'App',
  components: {
    BaseLayout,
    BottomNavbar
  },
  computed: {
    pageTitle() {
      return this.$route.meta.title;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
