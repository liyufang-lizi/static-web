const community = {
  state: {
    aboutCommunity: [
      {
        id: 0,
        com_type: 'text',
        com_content: '固件联盟全程“固件产业创新技术联盟”，是在工信部信发司的指导下，由中国电子技术标准化研究院联合百敖软件有限公司、中电科技（北京）有限公司、阿里巴巴技术有限公司、华为技术有限公司、浪潮集团有限公司、联想集团等七家单位共同发起创建的。通过联合产业链上下游企业共同推进国产固件技术及产业的发展，提升国际影响力。'
      }, {
        id: 1,
        com_type: 'img',
        com_content: 'organization_chart_0'
      }, {
        id: 2,
        com_type: 'text',
        com_content: '开源工作组归属于固件联盟，核心工作就是创建国内BIOS开源社区，管理并维护其日产运作。开源工作组设置了管理委员会，负责对BIOS开源社区的发展方向进行规划，对社区重大事务进行决策。管理委员会下设4个工作小组，分别负责开源社区的相关流程制定和日产事务处理。'
      }, {
        id: 3,
        com_type: 'img',
        com_content: 'organization_chart_1'
      }
    ]
  },
  mutations: {
    SET_ABOUT_COMMUNITY (state, aboutCommunity) {
      state.aboutCommunity = aboutCommunity
    }
  },
  action: {
    SetAboutCommunity ({commit}, aboutCommunity) {
      commit('SET_ABOUT_COMMUNITY', aboutCommunity)
    }
  }
}
export default community
