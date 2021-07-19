<template>
  <div class="contain">
    <!-- 会议纪要 -->
    <div class="meeting-summary row">
      <div class="col-xs-12 col-sm-4 col-md-4">
        <full-calendar :events="monthData" class="test-fc" first-day='1' locale="fr"
          @changeMonth="changeMonth"
          @eventClick="eventClick"
          @dayClick="dayClick"
          @moreClick="moreClick">
        </full-calendar>
      </div>
      <div class="col-xs-12 col-sm-8 col-md-8">
        <div class="jump-btn row">
          <a href="#" style="width: 120px;" class="btn btn-primary active" role="button" target="_blank">会议议题申请</a>
        </div>
        <div class="meeting-list row">
          <div class="panel panel-default">
            <ul>
              <li>日期标记事件</li>
              <!-- <li v-for="event in selectDay.events"
                :key="event"
                v-show="event.isShow" :class="event.cssClass"
                @click="dayClick(event,$event)">
                {{event.content ? event.content: event.title}}
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullCalendar from '../../assets/vue-fullcalendar/fullCalendar.vue'
export default {
  components: {
    // FullCalendar
    'full-calendar': FullCalendar
  },
  data () {
    return {
      monthData: [
        {
          title: 'eeeeeeeee',
          start: '2021-07-03',
          end: '2021-07-03',
          cssClass: 'red'
        },
        {
          title: 'sssss',
          start: '2021-07-25',
          end: '2021-07-26',
          cssClass: 'blue'
        },
        {
          title: 'dddddddd',
          start: '2021-07-09',
          end: '2021-07-10',
          cssClass: 'blue'
        },
        {
          title: 'cccccc',
          start: '2021-07-09',
          end: '2021-07-20',
          cssClass: 'red'
        },
        {
          title: 'aaaaaa',
          start: '2021-07-01',
          end: '2021-07-01',
          cssClass: 'red'
        },
        {
          title: 'bbbbbb',
          start: '2021-07-05',
          end: '2021-07-05',
          cssClass: 'blue'
        }
      ]
    }
  },
  methods: {
    // 选择月份
    changeMonth (start, end, current) {
      console.log('changeMonth', start.format(), end.format(), current.format())
    },
    // 点击事件
    eventClick (event, jsEvent, pos) {
      console.log('eventClick', event, jsEvent, pos)
    },
    // 点击当天
    dayClick (day, jsEvent) {
      console.log('dayClick', day, jsEvent)
    },
    // 查看更多
    moreClick (day, events, jsEvent) {
      console.log('moreCLick', day, events, jsEvent)
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
</style>
