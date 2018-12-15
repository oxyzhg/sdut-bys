<template>
  <div id="app">
    <base-layout>
      <template slot="header">
        <h2 class="page__title">{{pageTitle}}</h2>
      </template>
      <template slot="main">
        <router-view/>
        <bottom-navbar v-if="isAuth"></bottom-navbar>
      </template>
    </base-layout>
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
    },
    isAuth() {
      return this.$route.meta.isAuth;
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
