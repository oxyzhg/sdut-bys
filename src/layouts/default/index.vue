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


<style>
.page__hd {
  margin-bottom: 20px;
}
.page__bd {
  padding: 20px 0;
}
.page__ft {
  margin: 10px 0;
  color: #999;
  line-height: 1.5;
  font-size: 12px;
}
.page__hd,
.page__ft {
  text-align: center;
}
.page__title {
  margin: 20px 0 20px;
  padding: 10px;
  text-align: center;
}
</style>


