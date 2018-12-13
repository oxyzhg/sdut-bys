<template>
  <span>© {{ currentYear }} 青春在线</span>
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