<template>
  <div class="table-list">
    <table>
      <caption>2017年6月份高二（3）班期末考试成绩汇总明细表</caption>
      <thead>
        <tr>
          <th v-for="(item,index) in message.name" :key="index">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in table" :key="index">
          <td v-for="(content,index) in item" :key="index">{{content}}</td>
        </tr>

      </tbody>
    </table>
  </div>
</template>
<script>
const ERR_OK = 0
export default {
  data() {
    return {
      message: {},
      table: {}
    }
  },
  created() {
    this.$http.get('/api/message').then(res => {
      if (res.data.errno === ERR_OK) {
        this.message = res.data.data
        this.table = this.message.contents
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.table-list {
  padding: 20px;
  border-top: 1px dotted #ccc;
  table {
    border: 1px solid #ddd;
    width: 52.66rem;
    text-align: center;
    caption{
      margin-bottom: 6px;
      font-size: 18px;
    }
    td,
    th {
      border: 1px solid #ddd;
      color: #333;
      padding: 4px 2px;
      width: 6rem;
    }
    thead {
      tr {
        line-height: 1.5;
        th {
          font-weight: 700;
          font-size: 16px;
        }
      }
    }
    tbody {
      tr {
        line-height: 1.5;
      }
    }
  }
}
</style>


