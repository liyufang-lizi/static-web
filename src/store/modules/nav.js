const nav = {
  state: {
    navInfo: [
      {
        id: 0,
        name: '首页',
        filename: 'home',
        children: []
      }, {
        id: 1,
        name: '社区',
        filename: 'community',
        children: [{
          id: 0,
          name: '关于社区',
          filename: 'about_community',
          parent_id: 1
        }, {
          id: 1,
          name: '组织架构',
          filename: 'organization_chart',
          parent_id: 1
        }, {
          id: 2,
          name: '邮箱列表',
          filename: 'mail_list',
          parent_id: 1
        }, {
          id: 3,
          name: '加入我们',
          filename: 'join_us',
          parent_id: 1
        }]
      }, {
        id: 2,
        name: '新闻',
        filename: 'news',
        children: []
      }, {
        id: 3,
        name: '会议',
        filename: 'meeting',
        children: [{
          id: 0,
          name: '会议纪要',
          filename: 'meeting_summary',
          parent_id: 3
        }, {
          id: 1,
          name: '议题申请',
          filename: 'apply_issue',
          parent_id: 3
        }, {
          id: 2,
          name: '会议日历',
          filename: 'meeting_calendar',
          parent_id: 3
        }]
      }, {
        id: 4,
        name: '项目',
        filename: 'project',
        children: [{
          id: 0,
          name: '项目介绍',
          filename: 'project_introduction',
          parent_id: 4
        }, {
          id: 1,
          name: '贡献攻略',
          filename: 'contribute',
          parent_id: 4
        }, {
          id: 2,
          name: '问题上报',
          filename: 'problem_report',
          parent_id: 4
        }]
      }, {
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
