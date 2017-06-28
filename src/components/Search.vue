<template>
  <div>
    <div class="search">
      <input type="text" placeholder="请输入搜索的关键字">
      <button class="search-btn">搜索</button>
    </div>
    <!--<pagelist :total="total" :page-size="pageSize" :page-num="pageNum" :display="3" @change="changePage"></pagelist>-->
  </div>
</template>
<script>
import Pagelist from '@/components/pagelist'
export default {
  data(){
    return {
      total: 10,
      pageSize: 3,
      pageNum: 1
    }
  },
  components: { Pagelist },
  methods: {
    changePage(){}
  }
}
</script>
<style lang="scss" scoped>
.search {
  padding: 20px;
  border-top: 1px dotted #ccc;
  input {
    padding: 4px;
    width: 15.3rem;
    line-height: 24px;
    border: 1px solid #ccc;
    font-size: 14px;
    border-radius: 4px;
  }
  .search-btn {
    color: #fff;
    font-size: 14px;
    padding: 6px 16px;
    background: #eeddaa;
    border: none;
    border-radius: 8px;
    box-shadow: 0 0 0 1px #d79a47 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 2px 0 0 #D79A34, 0 2px 2px 1px rgba(0, 0, 0, 0.5);
    background-color: #FEAF20;
    transition: all 0.04s linear;
    &:active {
      box-shadow: 0 0 0 1px #d79a47 inset, 0 0 0 1px rgba(255, 255, 255, 0.15) inset, 0 1px 1px 1px rgba(0, 0, 0, 0.3);
      transform: translate(0, 2px);
    }
  }
}
</style>

