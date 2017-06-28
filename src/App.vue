<template>
  <div id="app" class="wrap">
    <v-header :personal="personal"></v-header>
    <div class="content clearfix">
      <!--左边栏-->
      <div class="left-side">
        <div class="tab-item" >
          <router-link :to="{path: '/personal'}"><span class="icon iconfont icon-personal"></span>1</router-link>
        </div>
        <div class="tab-item">
          <router-link :to="{path: '/search'}"><span class="icon iconfont icon-search"></span>2</router-link>
        </div>
        <div class="tab-item">
          <router-link :to="{path: '/message'}"><span class="icon iconfont icon-message"></span>3</router-link>
        </div>
      </div>
      <!--右边内容-->
      <div class="right-content">
        <keep-alive>
          <router-view :personal="personal"></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/Header'
const ERR_OK = 0
export default {
  name: 'app',
  components: { vHeader },
  data() {
    return {
      personal: {}
    }
  },
  created() {
    this.$http.get('/api/personal').then(res => {
      if (res.data.errno === ERR_OK) {
        this.personal = res.data.data
      }
    })
    console.log(this.$router)
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 76rem;
  margin: 20px auto;
  .content {
    padding: 10px;
    display: flex;
    .left-side {
      flex: 0 0 15rem;
      width: 15rem;
      text-align: center;
      padding-top: 20px;
      .tab-item{
        padding-bottom: 16px;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        cursor: pointer;
        a {
          transition: all .2s ease;
          &.active {
            color: #bababa;
            .icon{
              background: #bababa;
            }
          }
        }
        .icon{
          display: inline-block;
          vertical-align: bottom;
          margin-right: 4px;
          width: 2rem;
          height: 2rem;
          line-height: 24px;
          color: #fff;
          text-align: center;
          background: #4f7385;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
    .right-content {
      flex: 1;
      margin-left: 10px;
    }
  }
}

</style>
