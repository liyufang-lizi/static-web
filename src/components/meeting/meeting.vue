<template>
  <div class="contain">
    <!-- 会议纪要 -->
    <div class="meeting-banner"></div>
    <div class="meeting-summary row">
      <div class="col-xs-12 col-sm-5 col-md-4">
        <Calendar
          :sundayStart="true"
          v-on:changeMonth="changeDate"
          :markDate="markDate"
        ></Calendar>
        <!--
          // v-on:choseDay="clickDay"
          // v-on:changeMonth="changeDate"
          // v-on:isToday="clickToday"
          // :markDate=arr // arr=['2018/4/1','2018/4/3'] 标记4月1日和4月3日 简单标记
          // :markDateMore=arr // 多种不同的标记
          // 第一个标记和第二个标记不能同时使用
          // :agoDayHide='1514937600' // 某个日期以前的不允许点击  时间戳10位
          // :futureDayHide='1525104000' // 某个日期以后的不允许点击  时间戳10位
          // :sundayStart="true" // 默认是周一开始 当是true的时候 是周日开始
         -->
      </div>
      <div class="col-xs-12 col-sm-7 col-md-8">
        <div class="jump-btn row">
          <a :href="meetingInfo.applyMeetingUrl" style="width: 120px;" class="btn btn-primary active" role="button" target="_blank">会议议题申请</a>
        </div>
        <div class="meeting-list row">
          <div class="panel panel-default">
            <ul :data="meetingInfo.meetingListData">
              <li class="meeting-item" :id="item.meetingDate" v-for="item in meetingInfo.meetingListData" :key="item.id">
                <div class="meeting-date row">
                  {{ item.meetingDate }}
                </div>
                <div class="meeting-content row">
                  <div class="meeting-con-item row" v-for="ite in item.meetingContent" :key="ite.index">
                    <div class="date-time col-xs-1 col-sm-1 col-md-1">{{ ite.meetingTime }}</div>
                    <div class="meeting-con-ite col-xs-11 col-sm-11 col-md-11">
                      <h4>{{ ite.conferenceTheme }}</h4>
                      <p>{{ ite.meetingSummary }}</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>{{ tips }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from '../../assets/vue-calendar-component/index'
import moment from 'moment'
import {mapGetters} from 'vuex'
export default {
  components: {
    Calendar
  },
  data () {
    return {
      markDate: [],
      tips: ''
    }
  },
  computed: {
    ...mapGetters({
      meetingInfo: 'meetingInfo'
    })
  },
  created () {
    for (var i = 0; i < this.meetingInfo.meetingListData.length; i++) {
      this.markDate.push(this.meetingInfo.meetingListData[i].meetingDate)
    }
    // console.log(this.ate)
  },
  methods: {
    changeDate (date) {
      var compStr = moment(date).format('YYYY-MM-DD').replace(/\//g, '-').substring(0, 7)
      var lists = document.getElementsByClassName('meeting-item')
      var count = 0
      for (var i = 0; i < lists.length; i++) {
        if (lists[i].id.indexOf(compStr) !== -1) {
          lists[i].style.display = 'block'
          count++
        } else {
          lists[i].style.display = 'none'
        }
      }
      if (count > 0) {
        this.tips = ''
      } else {
        this.tips = '当前暂时没有会议安排！'
      }
    }
  }
}
</script>

<style scoped>
.meeting-summary{
  box-sizing: border-box;
  padding: 40px 10vw;
}
.meeting-summary>div{
  margin: 16px 0;
}
.row {
  margin: 0;
}
.jump-btn.row {
  margin-bottom: 32px;
}
.meeting-list .panel {
  box-sizing: border-box;
  padding: 20px;
  margin: 0;
  height: calc(100vh - 608px);
  overflow: auto;
}
.meeting-date {
  color: #53b3e1;
  font-weight: 700;
  margin-top: 20px;
}

.meeting-con-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6px 0;
  /* border-top: 1px dashed lightslategray; */
  /* border-bottom: 1px dashed lightslategray; */
}
.date-time {
  color: #657f8f;
  font-weight: 700;
  /* border-right: 1px dashed lightslategray; */
}
.meeting-con-ite {
  display: flex;
  flex-direction: column;
  /* border-left: 1px dashed lightslategray; */
}
.meeting-con-ite h4 {
  box-sizing: border-box;
  padding: 6px 0;
  /* border-bottom: 1px dashed lightslategray; */
}
.meeting-con-ite p {
  box-sizing: border-box;
  padding: 6px 0;
}
.meeting-banner{
  width: 100%;
  height: 280px;
  background: url('../../../static/image/meeting-banner.png') no-repeat 0 0;
  background-size: 100% 100%;
}
@media (max-width: 768px) {
  .meeting-summary{
    padding: 20px 0;
  }
  .meeting-list .panel{
    height: auto;
  }
  .meeting-banner{
    background: url('../../../static/image/meeting-banner-sm.jpg') no-repeat 0 0;
    background-size: 100% 100%;
  }
  .date-time {
    margin: 8px 0;
  }
  .meeting-con-item {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px dashed lightslategray;
  }
}
</style>
