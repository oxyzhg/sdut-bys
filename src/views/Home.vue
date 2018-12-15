<template>
  <div>
    <h2 class="page__title">绩点查询</h2>
    <search-box></search-box>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBox from '@/components/SearchBox.vue';

export default {
  name: 'Home',
  components: {
    SearchBox
  }
};
</script>

<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button {
    margin: 8px;
  }
}
</style>