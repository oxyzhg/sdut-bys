<template>
  <div>
    <mu-chip class="user-avatar" color="blue300">
      <mu-icon value="child_care"></mu-icon>食品1504，张强
    </mu-chip>
    <mu-data-table
      height="400"
      :columns="scoreColumns"
      :sort.sync="sort"
      @sort-change="handleSortChange"
      :data="scoreList"
    >
      <template slot-scope="scope">
        <td class="is-center">{{scope.row.xnmmc}}</td>
        <td class="is-center">{{scope.row.xqmmc}}</td>
        <td class="is-center">{{scope.row.kcmc}}</td>
        <td class="is-center">{{scope.row.kcxzmc}}</td>
        <!-- <td class="is-center">{{scope.row.kcxzdm}}</td> -->
        <td class="is-center">{{scope.row.xf}}</td>
        <td class="is-center">{{scope.row.cj}}</td>
        <!-- <td class="is-center">{{scope.row.bfzcj}}</td> -->
        <td class="is-center">{{scope.row.jd}}</td>
        <!-- <td class="is-center">{{scope.row.kcbj}}</td> -->
        <!-- <td class="is-center">{{scope.row.kclbmc}}</td> -->
        <td class="is-center">{{scope.row.jsxm}}</td>
        <td class="is-center">{{scope.row.kch}}</td>
      </template>
    </mu-data-table>
  </div>
</template>

<script>
export default {
  name: 'ScoreDataList',
  data() {
    return {
      sort: {
        name: '',
        order: 'asc'
      },
      scoreColumns: [
        {
          title: '学年',
          name: 'xnmmc',
          width: 126,
          scotable: true,
          align: 'center'
        },
        {
          title: '学期',
          name: 'xqmmc',
          width: 70,
          scotable: true,
          align: 'center'
        },
        {
          title: '课程名称',
          name: 'kcmc',
          width: 180,
          scotable: true,
          align: 'center'
        },
        {
          title: '课程性质',
          name: 'kcxzmc',
          width: 100,
          scotable: true,
          align: 'center'
        },
        // {
        //   title: '课程性质代码',
        //   name: 'kcxzdm',
        //   width: 100,
        //   scotable: true,
        //   align: 'center'
        // },
        {
          title: '学分',
          name: 'xf',
          width: 80,
          scotable: true,
          align: 'center'
        },
        {
          title: '成绩',
          name: 'cj',
          width: 90,
          scotable: true,
          align: 'center'
        },
        // {
        //   title: '百分制成绩',
        //   name: 'bfzcj',
        //   width: 90,
        //   scotable: true,
        //   align: 'center'
        // },
        {
          title: '绩点',
          name: 'jd',
          width: 80,
          scotable: true,
          align: 'center'
        },
        // {
        //   title: '课程标记',
        //   name: 'kcbj',
        //   width: 80,
        //   scotable: true,
        //   align: 'center'
        // },
        // {
        //   title: '课程类别',
        //   name: 'kclbmc',
        //   width: 180,
        //   scotable: true,
        //   align: 'center'
        // },
        {
          title: '任课教师',
          name: 'jsxm',
          width: 100,
          scotable: true,
          align: 'center'
        },
        {
          title: '课程代码',
          name: 'kch',
          width: 120,
          scotable: false,
          align: 'center'
        },
      ]
    };
  },
  created() {
    console.log('开始请求数据');
    this.$store.dispatch('getUserScore');
  },
  methods: {
    handleSortChange({ name, order }) {
      this.list = this.list.sort((a, b) =>
        order === 'asc' ? a[name] - b[name] : b[name] - a[name]
      );
    }
  },
  computed: {
    scoreList() {
      return this.$store.getters.optionCourse;
    }
  }
};
</script>

<style lang="less">
.mu-table {
  th,
  td {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
