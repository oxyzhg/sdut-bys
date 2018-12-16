<template>
  <div>
    <user-card></user-card>
    <mu-paper :z-depth="5">
      <mu-tabs :value.sync="active" inverse color="secondary" text-color="red500" center>
        <mu-tab>主修课</mu-tab>
        <mu-tab>公选课</mu-tab>
      </mu-tabs>
      <mu-data-table
        stripe
        v-if="active === 0"
        :data="majorCourse"
        :columns="scoreColumns"
        :sort.sync="sort"
        @sort-change="handleSortChange"
      >
        <template slot-scope="scope">
          <td class="is-center">{{scope.row.xnmmc}}-{{scope.row.xqmmc}}</td>
          <td class="is-center">{{scope.row.kcmc}}</td>
          <td class="is-center">{{scope.row.xf}}</td>
          <td class="is-cente" :class="{ red500: scope.row.bfzcj<60 }">{{scope.row.cj}}</td>
          <td class="is-center">{{scope.row.jd}}</td>
          <td class="is-center">{{scope.row.kcxzmc}}</td>
          <td class="is-center">{{scope.row.jsxm}}</td>
          <td class="is-center">{{scope.row.kch}}</td>
        </template>
      </mu-data-table>
      <mu-data-table
        stripe
        v-if="active === 1"
        :data="optionCourse"
        :columns="scoreColumns"
        :sort.sync="sort"
        @sort-change="handleSortChange"
      >
        <template slot-scope="scope">
          <td class="is-center">{{scope.row.xnmmc}}-{{scope.row.xqmmc}}</td>
          <td class="is-center">{{scope.row.kcmc}}</td>
          <td class="is-center">{{scope.row.xf}}</td>
          <td class="is-center">{{scope.row.cj}}</td>
          <td class="is-center">{{scope.row.jd}}</td>
          <td class="is-center">{{scope.row.kcxzmc}}</td>
          <td class="is-center">{{scope.row.jsxm}}</td>
          <td class="is-center">{{scope.row.kch}}</td>
        </template>
      </mu-data-table>
    </mu-paper>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserCard from '../components/UserCard.vue';

export default {
  name: 'ScoreList',
  components: {
    UserCard
  },
  data() {
    return {
      active: 1,
      sort: {
        name: '',
        order: 'asc'
      },
      scoreColumns: [
        {
          title: '学期',
          name: 'xqmmc',
          width: 126,
          sortable: false,
          align: 'center'
        },
        {
          title: '课程名称',
          name: 'kcmc',
          width: 180,
          sortable: false,
          align: 'center'
        },

        {
          title: '学分',
          name: 'xf',
          width: 80,
          sortable: true,
          align: 'center'
        },
        {
          title: '成绩',
          name: 'cj',
          width: 90,
          sortable: true,
          align: 'center'
        },
        {
          title: '绩点',
          name: 'jd',
          width: 80,
          sortable: true,
          align: 'center'
        },
        {
          title: '课程性质',
          name: 'kcxzmc',
          width: 100,
          sortable: false,
          align: 'center'
        },
        {
          title: '任课教师',
          name: 'jsxm',
          width: 100,
          sortable: false,
          align: 'center'
        },
        {
          title: '课程代码',
          name: 'kch',
          width: 120,
          sortable: false,
          align: 'center'
        }
      ]
    };
  },
  computed: {
    ...mapGetters(['isLogin']),
    majorCourse: {
      get() {
        return this.$store.getters.filterMajorCourse;
      },
      set(value) {
        return value;
      }
    },
    optionCourse: {
      get() {
        return this.$store.getters.optionCourse;
      },
      set(value) {
        return value;
      }
    }
  },
  created() {
    if (!this.isLogin) {
      this.$router.push('/login');
    }
  },
  methods: {
    handleSortChange({ name, order }) {
      console.log(this.active);
      if (this.active === 0) {
        this.majorCourse = this.majorCourse.sort((a, b) =>
          order === 'asc' ? a[name] - b[name] : b[name] - a[name]
        );
      } else {
        this.optionCourse = this.optionCourse.sort((a, b) =>
          order === 'asc' ? a[name] - b[name] : b[name] - a[name]
        );
      }
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
  .red500 {
    color: #f44336;
  }
}
</style>
