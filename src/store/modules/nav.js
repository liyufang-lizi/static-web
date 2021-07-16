const nav = {
  state: {
    navInfo: [
      {
        id: 0,
        name: '首页',
        filename: 'home',
        children: []
      },
      {
        id: 1,
        name: '邮箱列表',
        filename: 'mail_list',
        children: []
      },
      {
        id: 2,
        name: '会议',
        filename: 'meeting',
        children: []
      },
      {
        id: 3,
        name: '项目',
        filename: 'project_list',
        children: []
      },
      {
        id: 4,
        name: 'FAQ',
        filename: 'faq',
        children: []
      },
      {
        id: 5,
        name: '代码仓',
        filename: 'code_base',
        children: []
      }
    ]
  },
  mutations: {
    SET_NAV_INFO (state, navInfo) {
      state.navInfo = navInfo
    }
  },
  actions: {
    SetNavInfo ({commit}, navInfo) {
      commit('SET_NAV_INFO', navInfo)
    }
  }
}
export default nav
