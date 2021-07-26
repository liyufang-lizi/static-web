<template>
  <div class="contain">
    <!-- 会议纪要 -->
    <div class="meeting-summary row">
      <div class="col-xs-12 col-sm-5 col-md-4">
        <!-- <full-calendar :events="monthData" class="test-fc" first-day='1' locale="fr"
          @changeMonth="changeMonth"
          @eventClick="eventClick"
          @dayClick="dayClick"
          @moreClick="moreClick">
        </full-calendar> -->
        <Calendar
          :sundayStart="true"
          v-on:changeMonth="changeDate"
          :markDate="meetingInfo.meetingDateData"
        ></Calendar>
        <!--
          // v-on:choseDay="clickDay"
          // v-on:changeMonth="changeDate"
          // v-on:isToday="clickToday"
          // :markDate=arr // arr=['2018/4/1','2018/4/3'] 标记4月1日和4月3日 简单标记
          //:markDateMore=arr // 多种不同的标记
          // 第一个标记和第二个标记不能同时使用
          // :agoDayHide='1514937600' //某个日期以前的不允许点击  时间戳10位
          // :futureDayHide='1525104000' //某个日期以后的不允许点击  时间戳10位
          // :sundayStart="true" //默认是周一开始 当是true的时候 是周日开始
         -->
      </div>
      <div class="col-xs-12 col-sm-7 col-md-8">
        <div class="jump-btn row">
          <a :href="meetingInfo.applyMeetingUrl" style="width: 120px;" class="btn btn-primary active" role="button" target="_blank">会议议题申请</a>
        </div>
        <div class="meeting-list row">
          <div class="panel panel-default">
            <ul :data="meetingInfo.meetingListData">
              <li class="meeting-item" v-for="item in meetingInfo.meetingListData" :key="item.id">
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import FullCalendar from '../../assets/vue-fullcalendar/fullCalendar.vue'
import Calendar from '../../assets/vue-calendar-component/index'
import {mapGetters} from 'vuex'
export default {
  components: {
    // FullCalendar
    // 'full-calendar': FullCalendar
    Calendar
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      meetingInfo: 'meetingInfo'
    })
  },
  methods: {
    changeDate (data) {
      console.log('改变月份！' + data)
    }
  }
}
</script>

<style scoped>
.contain {
  box-sizing: border-box;
  padding: 40px 10vw;
}
.row {
  margin: 0;
}
.jump-btn.row {
  margin: 32px;
}
.meeting-list.row {
  margin: 0 32px;
}
.meeting-list .panel {
  box-sizing: border-box;
  padding: 20px;
}
.meeting-con-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
