<template>
  <div class="header clearfix">
    <div class="avatar">
      <img :src="personal.avatar" v-show="personal.avatar" @click.stop="showDialog">
    </div>
    <div class="header-content clearfix">
      <h1 class="name">{{personal.name}}</br>
        <span class="ping">zhangsan</span>
      </h1>
      <ul class="menu clearfix">
        <li>
          <span class="icon iconfont icon-peoples"></span>
          <span class="status">在职状态</span>
        </li>
        <li>
          <span class="icon iconfont icon-marry"></span>
          <span class="status">婚姻情况</span>
        </li>
        <li>
          <span class="icon iconfont icon-outCountry"></span>
          <span class="status">出国情况</span>
        </li>
        <li>
          <span class="icon iconfont icon-events"></span>
          <span class="status">重大事项</span>
        </li>
      </ul>
      <dl class="info">
        <dt>入档时间</dt>
        <dd>{{personal.entryTime | formatDate}}</dd>
        <dt>风险系数</dt>
        <dd>{{personal.riskFactor}}</dd>
        <dt class="special">
          <a href="#">资料完善度</a>
        </dt>
        <dd>
          <a href="#">{{personal.dataIntegrity}}</a>
        </dd>
      </dl>
    </div>
    <transition name="fade">
      <div class="showImg" v-show="avatarShow" @click.stop="hideDialog">
        <div class="showImg-content">
          <div class="close">
            <span class="icon iconfont icon-close" @click="hideDialog"></span>
          </div>
          <div class="show-avatar">
            <img :src="personal.avatar" v-show="personal.avatar" />
          </div>
        </div>

      </div>
    </transition>
  </div>
</template>
<script>
import { formatDate } from '@/common/js/date'
export default {
  props: ['personal'],
  data() {
    return {
      baseData: {},
      avatarShow: false
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(1469281964000);
      return formatDate(date, 'yyyy-MM-dd hh:mm');
    }
  },
  methods: {
    showDialog() {
      this.avatarShow = true
      document.body.style.overflow = 'hidden'
    },
    hideDialog() {
      this.avatarShow = false
      document.body.style.overflow = 'auto'
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .avatar {
    width: 13.3rem;
    img {
      width: 10rem;
      height: 10rem;
      vertical-align: middle;
      border-radius: 50%;
    }
  }
  .header-content {
    padding: 10px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    .name {
      font-size: 32px;
      color: #4d6f83;
      font-weight: 700;
      padding: 6px 4px;
      width: 10rem;
      .ping {
        font-size: 16px;
      }
    }
    .menu {
      margin: 0 40px;
      width: 28.3rem;
      display: flex;
      justify-content: center;
      li {
        width: 6rem;
        padding: 6px 4px;
        text-align: center;
        .icon {
          display: inline-block;
          vertical-align: bottom;
          margin-right: 4px;
          width: 2rem;
          height: 2rem;
          line-height: 24px;
          font-size: 20px;
          color: #4f7385;
          text-align: center;
          border-radius: 50%;
          cursor: pointer;
        }
        .status {
          display: block;
          font-size: 12px;
        }
      }
    }
    .info {
      // padding-top: 16px;
      text-align: right;
      color: #4d6f83;
      width: 11.5rem;
      dt {
        font-size: 14px;
        padding-right: 4px;
        border-right: 2px solid #4d6f83;
        font-weight: 700;
      }
      dd {
        line-height: 1.5;
        font-size: 14px;
      }
      .special {
        color: red;
        border-right: 2px solid red;
      }
      a {
        color: red;
      }
    }
  }
  .showImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, .8);
    z-index: 10;
    &.fade-enter-active,
    &.fade-leave-active {
      transition: all .2s ease;
    }
    &.fade-enter,
    &.fade-leave-active {
      transform: translateY(-100%);
    }
    .showImg-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #eee;
      text-align: center;
      .close {
        height: 35px;
        line-height: 1.5;
        text-align: right;
        margin-right: 8px;
        .icon {
          cursor: pointer;
          font-size: 24px;
          color: #333;
          transition: all .3s ease-in-out;
          &:hover{
            color: red;
            font-size: 30px;
          }
        }
      }
      .show-avatar {
        padding: 20px 40px 30px;
        img {
          width: 24rem;
          height: 22rem;
        }
      }
    }
  }
}
</style>

