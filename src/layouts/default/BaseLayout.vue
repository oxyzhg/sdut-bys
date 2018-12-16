<template>
  <div class="wrap">
    <header class="page__hd">
      <slot name="header"></slot>
    </header>
    <main class="page__bd">
      <slot name="main"></slot>
    </main>
    <footer class="page__ft">
      <page-footer></page-footer>
    </footer>
  </div>
</template>

<script>
import PageFooter from './PageFooter.vue';

export default {
  name: 'BaseLayout',
  components: {
    PageFooter
  }
};
</script>

<style lang="less">
.page__hd {
  margin: 30px 0;
  .page__title {
    margin: 20px 0 20px;
    padding: 10px;
    text-align: center;
    span {
      position: relative;
    }
    span::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: -10%;
      width: 120%;
      height: 2px;
      background-color: #008aff;
    }
  }
}
.page__bd {
  padding: 10px 0;
}
.page__ft {
  margin: 10px 0 64px;
  color: #999;
  line-height: 1.5;
  font-size: 12px;
}
.page__hd,
.page__ft {
  text-align: center;
}
</style>
