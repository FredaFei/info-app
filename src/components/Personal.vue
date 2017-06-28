<template>
  <div class="personal">
    <ul class="baseInfo">
      <li class="name">
        <p>基本信息</p>
        <ul class="item clearfix">
          <li>性别：
            <span class="strong">{{personal.sex}}</span>
          </li>
          <li>年龄：
            <span class="strong">{{personal.age}}</span>
          </li>
          <li>身份证号：
            <span class="strong">{{personal.IDnumber}}</span>
          </li>
          <li>政治面貌：
            <span class="strong">{{personal.politicalStatus}}</span>
          </li>
          <li>婚姻情况：
            <span class="strong">{{personal.maritalStatus}}</span>
          </li>
          <li>手机：
            <span class="strong">{{personal.tel}}</span>
          </li>
          <li>职务昵称：
            <span class="strong">{{personal.jobTitle}}</span>
          </li>
          <li>证照保管情况：
            <span class="strong">{{personal.custodyofCustody}}</span>
          </li>
          <li>证照持有情况：
            <span class="strong">{{personal.passport}}</span>
          </li>
          <li>港澳通行证：
            <span class="strong">{{personal.HongKongAndMacaoPass}}</span>
          </li>
          <li>台湾通行证：
            <span class="strong">{{personal.TaiwanPass}}</span>
          </li>
        </ul>
      </li>
      <li class="name">
        <p>岗位情况</p>
        <ul class="item clearfix">
          <li v-for="(item,index) in personal.jobSituation" :key="index">姓名：
            <span class="strong">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <!--出境情况-->
    <ul class="list clearfix">
      <li class="name">
        <p>出境情况</p>
        <ul class="item clearfix">
          <li v-for="item in personal.outboundSituation" :key="item.id">
            <span>{{`${item.id}、`}}</span>
            <span class="time">{{item.time | formatDate}}</span>
            <span class="country">{{item.country}}</span>
            <span class="reason">{{item.cause}}</span>
          </li>
        </ul>
      </li>
      <li class="name">
        <p>培训情况</p>
        <ul class="item clearfix">
          <li v-for="item in personal.trainSituation" :key="item.id">
            <span>{{`${item.id}、`}}</span>
            <span class="time">{{item.time | formatDate}}</span>
            <span class="content">内容：{{item.content}}</span>
          </li>
        </ul>
      </li>
      <li class="name">
        <p>配偶情况</p>
        <ul class="item clearfix">
          <li v-for="item in personal.spouseSituation" :key="item.id">
            <span>{{`${item.id}、`}}</span>
            <span class="time">{{item.time | formatDate}}</span>
            <span class="content">内容：{{item.content}}</span>
          </li>
        </ul>
      </li>
      <li class="name">
        <p>重大事项报告</p>
        <ul class="item clearfix">
          <li v-for="item in personal.significantEvents" :key="item.id">
            <span>{{`${item.id}、`}}</span>
            <span class="time">{{item.time | formatDate}}</span>
            <span class="content">内容：{{item.content}}</span>
          </li>
        </ul>
      </li>
    </ul>

  </div>
</template>

<script>
import { formatDate } from '@/common/js/date'
export default {
  name: 'personal',
  props: ['personal'],
  data() {
    return {
      baseData: {}
    }
  },
  computed: {
    getBaseData() {
      this.baseData = this.personal
    }
  },
  filters: {
    formatDate(time) {
      var date = new Date(1469281964000);
      return formatDate(date, 'yyyy-MM-dd hh:mm');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.name {
  p {
    text-align: right;
    font-size: 12px;
    color: #555;
    padding: 4px;
  }
}
.personal {
  font-size: 14px;
  .baseInfo {
    border-top: 1px dotted #ccc;
    .item {
      padding: 2px;
      border-bottom: 1px dotted #ccc;
      li {
        float: left;
        min-width: 19.16rem;
        line-height: 1.8;
        .strong {
          color: #4d6f83;
          font-weight: 700;
        }
      }
    }
  }
  .list{
    .item{
       border-bottom: 1px dotted #ccc;
       li{
         line-height: 1.8;
         span{
           color: #4d6f83;
           font-weight: 700;
           margin: 0 6px;
           &:nth-child(1){
             margin: 0 -16px 0 2px;
           }
         }
       }
    }
  }
}
</style>
