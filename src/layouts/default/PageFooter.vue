<template>
  <mu-tooltip content="oxyzhg@163.com">
    <span>© {{ currentYear }} 青春在线 kq</span>
  </mu-tooltip>
</template>

<script>
export default {
  name: 'PageFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>
