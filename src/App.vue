<template>
  <div id="app">
    <base-layout>
      <template slot="header">
        <div id="nav">
          <router-link to="/">Home</router-link>|
          <router-link to="/about">About</router-link>
        </div>
      </template>
      <template slot="main">
        <router-view/>
      </template>
    </base-layout>
  </div>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  name: 'App',
  components: {
    BaseLayout
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
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
