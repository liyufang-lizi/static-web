const community = {
  state: {
    // aboutCommunity: [
    //   {
    //     id: 0,
    //     com_type: 'text',
    //     com_content: '固件联盟全程“固件产业创新技术联盟”，是在工信部信发司的指导下，由中国电子技术标准化研究院联合百敖软件有限公司、中电科技（北京）有限公司、阿里巴巴技术有限公司、华为技术有限公司、浪潮集团有限公司、联想集团等七家单位共同发起创建的。通过联合产业链上下游企业共同推进国产固件技术及产业的发展，提升国际影响力。'
    //   }, {
    //     id: 1,
    //     com_type: 'img',
    //     com_content: 'organization_chart_0'
    //   }, {
    //     id: 2,
    //     com_type: 'text',
    //     com_content: '开源工作组归属于固件联盟，核心工作就是创建国内BIOS开源社区，管理并维护其日产运作。开源工作组设置了管理委员会，负责对BIOS开源社区的发展方向进行规划，对社区重大事务进行决策。管理委员会下设4个工作小组，分别负责开源社区的相关流程制定和日产事务处理。'
    //   }, {
    //     id: 3,
    //     com_type: 'img',
    //     com_content: 'organization_chart_1'
    //   }
    // ],
    introduceKey: [
      {
        id: 0,
        key_words: '开放',
        key_content: '打造代码开源，民主开放的社区'
      }, {
        id: 1,
        key_words: '尊重',
        key_content: '成员相互尊重，共同遵守社区行为准则'
      }, {
        id: 2,
        key_words: '互助',
        key_content: '成员互帮互助，构建和谐社区氛围'
      }, {
        id: 3,
        key_words: '创新',
        key_content: '鼓励技术创新，繁荣固件软件生态'
      }
    ],
    communityContent: '欢迎访问固件联盟开源社区，本社区是由固件产业创新技术联盟下属开源工作组所创建的国内开源社区。社区专注于固件技术的研究和分享，致力于打造一个自由平等活跃的固件开发者生态圈，通过开源互助的形式，共同推动国内固件技术的发展和创新。'
  },
  mutations: {
    SET_ABOUT_COMMUNITY (state, aboutCommunity) {
      state.aboutCommunity = aboutCommunity
    },
    SET_INTRODUCE_KEY (state, introduceKey) {
      state.introduceKey = introduceKey
    },
    SET_COMMUNITY (state, communityContent) {
      state.communityContent = communityContent
    }
  },
  action: {
    SetAboutCommunity ({commit}, aboutCommunity) {
      commit('SET_ABOUT_COMMUNITY', aboutCommunity)
    },
    SetIntroduceKey ({commit}, introduceKey) {
      commit('SET_INTRODUCE_KEY', introduceKey)
    },
    setCommunityContent ({commit}, communityContent) {
      commit('SET_COMMUNITY', communityContent)
    }
  }
}
export default community
