<template>
  <div>
    <mu-chip class="user-avatar" color="blue300">
      <mu-icon value="child_care"></mu-icon>食品1504，张强
    </mu-chip>
    <mu-paper :z-depth="3">
      <mu-list>
        <mu-list-item button :ripple="true">
          <mu-list-item-title>平均学分绩点</mu-list-item-title>
          <mu-list-item-action>
            <mu-badge
              :content="String(averageGPA)"
              :color="averageGPA >= 70 ? 'primary' : 'red500'"
            ></mu-badge>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="true">
          <mu-list-item-title>公选课累计已修学分</mu-list-item-title>
          <mu-list-item-action>
            <mu-badge
              :content="String(totalOptionXf)"
              :color="totalOptionXf >= 14 ? 'primary' : 'blue300'"
            ></mu-badge>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="true">
          <mu-list-item-title>主修课程总数</mu-list-item-title>
          <mu-list-item-action>
            <mu-badge :content="String(totalCourse)" color="cyan300"></mu-badge>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="true">
          <mu-list-item-title>未通过课程数</mu-list-item-title>
          <mu-list-item-action>
            <mu-badge :content="String(failCourse)" :color="failCourse ? 'red400' : 'primary'"></mu-badge>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </mu-paper>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  async beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');
    next();
  },
  created() {
    console.log('开始请求数据');
    this.$store.dispatch('getUserScore');
  },
  computed: {
    scoreList() {
      return this.$store.getters.scoreList;
    },
    averageGPA() {
      return this.$store.getters.averageGPA;
    },
    totalOptionXf() {
      return this.$store.getters.totalOptionXf;
    },
    totalCourse() {
      return this.$store.getters.totalCourse;
    },
    failCourse() {
      return this.$store.getters.failCourse;
    }
  }
};
</script>

<style lang="less">
.user-avatar {
  margin: 30px 50px;
}
.mu-table {
  th,
  td {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
