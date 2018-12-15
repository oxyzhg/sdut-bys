<template>
  <div class="bottom-navbar">
    <mu-bottom-nav :value.sync="shift" shift>
      <mu-bottom-nav-item value="gpa" title="绩点" icon="functions" to="/gpa"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="score" title="成绩表" icon="playlist_play" to="/score"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>

<script>
export default {
  name: 'BottomNavbar',
  computed: {
    shift() {
      return this.$route.name;
    }
  }
};
</script>

<style>
.bottom-navbar {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
