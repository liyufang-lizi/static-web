/**
 * store 总线
 */
import Vue from 'vue'
import Vuex from 'vuex'
import nav from './modules/nav'
import website from './modules/website'
import community from './modules/community'
import project from './modules/project'
import meeting from './modules/meeting'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    nav,
    website,
    community,
    project,
    meeting
  },
  getters
})

export default store
