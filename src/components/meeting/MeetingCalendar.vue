<template>
  <div class="content">   <!-- #5118ac -->
    <SpringCalendar year="2021" default-type="month" color="#A9A9A9" show="month" :events="events" locale="ml" start-of-week="0" :labels-config="config" />
  </div>
</template>

<script>
import SpringCalendar from 'vue-spring-calendar'

export default {
  components: {
    SpringCalendar
  },
  data () {
    return {
      config: {
        title: 'name',
        startDate: 'start',
        endDate: 'end'
      },
      events: [{
        title: 'Event 0',
        startDate: '2021-07-01 08:00',
        endDate: '2021-07-01 09:20'
      }, {
        title: 'Event 1',
        startDate: '2021-07-01 10:00',
        endDate: '2021-07-01 12:00'
      }, {
        title: 'Event 2',
        startDate: '2021-07-01 13:00',
        endDate: '2021-07-01 15:30'
      }, {
        title: 'Event 3',
        startDate: '2021-07-01 15:46',
        endDate: '2021-07-01 17:30'
      }, {
        title: 'Event 4',
        startDate: '2021-07-01 17:50',
        endDate: '2021-07-01 19:30'
      }, {
        title: 'Event 3',
        startDate: '2021-07-03 08:00',
        endDate: '2021-07-03 12:00'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
