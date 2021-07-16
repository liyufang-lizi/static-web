const website = {
  state: {
    websiteInfo: {
      websiteName: '开源社区',
      websiteLogo: 'logo.png',
      imageUrlPre: 'https://github.com/liyufang-lizi/static-web/raw/gh-pages/static/image/', // 'https://github.com/liyufang-lizi/images-data/raw/master/'
      communityIntroduceImg: 'community_introduce.png'
    },
    organizationInfo: {
      chart: 'organization_chart_1_hengban.png',
      management: {
        name: '管理委员会',
        content: '由固件联盟下属开源工作组的核心成员组成，主要包括一下职责：',
        responsibility: [
          '社区定位、路标',
          '关键成员提名、投票',
          '需求/问题的排序',
          '关键技术方案和架构讨论决策',
          '分工决策'
        ]
      }
    }
  },
  mutations: {
    SET_WEBSITE_INFO (state, websiteInfo) {
      state.websiteInfo = websiteInfo
    },
    SET_ORGANIZATION_INFO (state, organizationInfo) {
      state.organizationInfo = organizationInfo
    }
  },
  actions: {
    SetWebsiteInfo ({commit}, websiteInfo) {
      commit('SET_WEBSITE_INFO', websiteInfo)
    },
    SetOrganizationInfo ({commit}, organizationInfo) {
      commit('SET_ORGANIZATION_INFO', organizationInfo)
    }
  }
}
export default website
