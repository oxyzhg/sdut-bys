<template>
  <div>
    <user-card></user-card>
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
    <div class="declearation">
      <p>计算公式</p>
      <ul>
        <li>平均学分绩点=(Σ课程成绩×课程学分)/Σ课程学分</li>
      </ul>
      <p>说明</p>
      <ul>
        <li>课程是指除公选课、辅修专业课程以外的主修课程；</li>
        <li>缓考补考、重修按考试成绩计算，重修补考、补考按最高成绩计算。</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserCard from '@/components/UserCard.vue';

export default {
  name: 'ScoreGpa',
  components: {
    UserCard
  },
  computed: {
    ...mapGetters(['isLogin', 'averageGPA', 'totalOptionXf', 'totalCourse', 'failCourse'])
  },
  created() {
    if (!this.isLogin) {
      this.$router.push('/login');
    }
  }
};
</script>

<style lang="less">
.declearation {
  margin-top: 20px;
  p {
    position: relative;
    margin: 10px 10px 5px;
    color: #424242;
    font-weight: 600;
    font-size: 12px;
    text-indent: 1em;
  }
  ul {
    margin: 0;
  }
  ul > li {
    color: #9e9e9e;
    font-size: 10px;
    font-family: sans-serif;
  }
}
</style>
