<template>
  <mu-chip class="user-avatar" color="blue300">
    <mu-icon value="child_care"></mu-icon>
    <span v-if="userinfo">{{userinfo.bj}}，{{userinfo.xm}}</span>
    <span v-else>Hi~</span>
  </mu-chip>
</template>

<script>
export default {
  name: 'UserCard',
  computed: {
    userinfo() {
      return this.$store.getters.userinfo;
    }
  }
};
</script>

<style>
.user-avatar {
  margin-left: 40px;
  margin-bottom: 30px;
}
</style>
