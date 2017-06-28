<template>
  <div class="page-list">
    <button class="prev-btn" @click="prevPage" :disabled="curPage<=1" :class="{'disable':curPage<=1}">
      <span class="icon iconfont icon-prev"></span> </button>
    <div class="pagination">
      <a class="item-num" v-for="(page,index) in pageList" :class="{'active':page===curPage}" @click="selectPage(page)" :key="index">{{page}}</a>
    </div>
    <!--<span>...</span>-->
    <button class="next-btn" @click="nextPage" :disabled="curPage>=total" :class="{'disable':curPage>=total}">
      <span class="icon iconfont icon-next"></span>
    </button>
    <span class="total-page">共 {{totalPage}} 页，到第
      <input type="text" class="ipt-num" v-model.trim.number="goPage"> 页</span>
    <button class="comfirm-btn" @click="goToPage">确定</button>
  </div>
</template>
<script>
export default {
  props: {
    total: {
      type: Number,
      require: true
    },
    display: {
      type: Number,
      default: 3
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageNum: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      curPage: this.pageNum,
      goPage: ''
    }
  },
  computed: {
    totalPage() {
      let total = this.total
      let size = this.pageSize
      return total % size === 0 ? (total / size) : parseInt(total / size + 1)
    },
    pageList() {
      let arr = []
      let curInt = 0
      let display = this.display
      let total = this.total
      let curPage = this.curPage
      if (curPage > display) {
        if (curPage % display === 0) {
          curInt = curPage / display - 1
        } else {
          curInt = parseInt(curPage / display)
        }
      }
      let start = curInt * display + 1
      let end = (curInt + 1) * display
      if (end > total) {
        end = total
      }
      for (var i = start; i <= end; i++) {
        arr.push(i)
      }
      return arr
    }
  },
  methods: {
    prevPage() {
      this.curPage--
    },
    nextPage() {
      this.curPage++
    },
    selectPage(index) {
      this.curPage = index
    },
    goToPage() {
      if (this.goPage < 1 || this.goPage > this.total) { return }
      this.curPage = this.goPage
    }
  }
}
</script>
<style lang="scss" scoped>
.page-list {
  margin: 20px;
  line-height: 30px;
  font-size: 0;
  .item-num,
  .ipt-num {
    display: inline-block;
    vertical-align: middle;
    padding: 0 2px;
    text-align: center;
    font-size: 12px;
    color: #333;
    border: 1px solid #d1dbe5;
    border-radius: 2px;
    cursor: pointer;
  }
  .item-num{
    width: 2rem;
    line-height: 2;
    border-right: 0;
  }
  .prev-btn,
  .next-btn {
    vertical-align: middle;
    padding: 4px;
    border: 1px solid #d1dbe5;
    background: none;
    cursor: pointer;
    &.disable {
      cursor: no-drop;
    }
  }
  .pagination {
    display: inline-block;
    vertical-align: middle;
    .active {
      background: #20a0ff;
    }
  }
  .total-page{
    display: inline-block;
    vertical-align: middle;
    margin: 0 8px;
    font-size: 14px;
  }
  .ipt-num {
    width: 2.4rem;
    padding: 5px 0px;
  }
  .comfirm-btn {
    vertical-align: middle;
    padding: 5px 14px;
    color: #fff;
    background: #20a0ff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>


