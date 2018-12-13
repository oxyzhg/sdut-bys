<template>
  <div>
    <h1>Result</h1>
    <mu-data-table
      height="400"
      :columns="scoreColumns"
      :sort.sync="sort"
      @sort-change="handleSortChange"
      :data="scoreList"
    >
      <template slot-scope="scope">
        <!-- <td>{{scope.row.name}}</td>
        <td class="is-right">{{scope.row.calories}}</td>
        <td class="is-right">{{scope.row.fat}}</td>
        <td class="is-right">{{scope.row.carbs}}</td>
        <td class="is-right">{{scope.row.protein}}</td>
        <td class="is-right">{{scope.row.iron}}%</td>-->
        <td class="is-center">{{scope.row.xnmmc}}</td>
        <td class="is-center">{{scope.row.xqmmc}}</td>
        <!-- <td class="is-center">{{scope.row.kch}}</td> -->
        <td class="is-center">{{scope.row.kcmc}}</td>
        <td class="is-center">{{scope.row.kcxzmc}}</td>
        <td class="is-center">{{scope.row.kcxzdm}}</td>
        <td class="is-center">{{scope.row.xf}}</td>
        <td class="is-center">{{scope.row.cj}}</td>
        <td class="is-center">{{scope.row.bfzcj}}</td>
        <td class="is-center">{{scope.row.jd}}</td>
        <td class="is-center">{{scope.row.kcbj}}</td>
        <td class="is-center">{{scope.row.kclbmc}}</td>
        <td class="is-center">{{scope.row.jsxm}}</td>
      </template>
    </mu-data-table>
  </div>
</template>

<script>
import qs from 'qs';

export default {
  name: 'SearchResult',
  data() {
    return {
      submitValue: {
        user: '',
        passwd: ''
      },
      sort: {
        name: '',
        order: 'asc'
      },
      columns: [
        { title: 'Dessert (100g serving)', width: 200, name: 'name' },
        {
          title: 'Calories',
          name: 'calories',
          width: 100,
          align: 'center',
          sortable: true
        },
        {
          title: 'Fat (g)',
          name: 'fat',
          width: 100,
          align: 'left',
          sortable: true
        },
        {
          title: 'Carbs (g)',
          name: 'carbs',
          width: 126,
          align: 'center',
          sortable: true
        },
        {
          title: 'Protein (g)',
          name: 'protein',
          width: 126,
          align: 'center',
          sortable: true
        },
        {
          title: 'Iron (%)',
          name: 'iron',
          width: 126,
          align: 'center',
          sortable: true
        }
      ],
      list: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6
        }
      ],
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
        {
          title: '课程性质代码',
          name: 'kcxzdm',
          width: 100,
          scotable: true,
          align: 'center'
        },
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
        {
          title: '百分制成绩',
          name: 'bfzcj',
          width: 90,
          scotable: true,
          align: 'center'
        },
        {
          title: '绩点',
          name: 'jd',
          width: 80,
          scotable: true,
          align: 'center'
        },
        {
          title: '课程标记',
          name: 'kcbj',
          width: 80,
          scotable: true,
          align: 'center'
        },
        {
          title: '课程类别',
          name: 'kclbmc',
          width: 180,
          scotable: true,
          align: 'center'
        },
        {
          title: '任课教师',
          name: 'jsxm',
          width: 100,
          scotable: true,
          align: 'center'
        }
      ],
      scoreList: []
    };
  },
  mounted() {
    console.log(this.$route);
    const { username, password } = this.$route.query;
    this.getUserScore(username, password);
  },
  methods: {
    handleSortChange({ name, order }) {
      this.list = this.list.sort((a, b) =>
        order === 'asc' ? a[name] - b[name] : b[name] - a[name]
      );
    },
    getUserScore(user, passwd) {
      const { BASE_API } = this.$store.state;
      const params = qs.stringify({ user, passwd, isauth: 0 });

      this.$axios
        .post(`${BASE_API}/getkb/allscore`, params)
        .then(res => {
          console.log(res);
          let scoreList = [];
          res.data.forEach(el => {
            if (el.items && el.items.length) {
              scoreList = [...scoreList, ...el.items];
            }
          });
          // console.log(scoreList);
          this.scoreList = scoreList;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style <style lang="less">
.mu-table {
  th,
  td {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>

