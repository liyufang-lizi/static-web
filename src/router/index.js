import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
// import MeetingCalendar from '@/components/meeting/MeetingCalendar'
import Meeting from '@/components/meeting/Meeting'
import ProjectList from '@/components/project/ProjectList'
// import AboutCommunity from '@/components/community/AboutCommunity'

Vue.use(Router)

// 获取原型对象上的push函数
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  // mode: 'history',
  base: '/',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
    //   path: '/meeting_calendar',
    //   name: 'MeetingCalendar',
    //   component: MeetingCalendar
    // }, {
      path: '/project_list',
      name: 'ProjectList',
      component: ProjectList
    }, {
      path: '/meeting',
      name: 'Meeting',
      component: Meeting
    }
    // , {
    //   path: '/about_community',
    //   name: 'AboutCommunity',
    //   component: AboutCommunity
    // }
  ]
})
