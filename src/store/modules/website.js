const website = {
  state: {
    websiteInfo: {
      websiteName: '开源社区',
      websiteLogo: 'logo.png',
      imageUrlPre: 'https://github.com/liyufang-lizi/static-web/raw/gh-pages/static/image/', // 'https://github.com/liyufang-lizi/images-data/raw/master/'
      communityIntroduceImg: 'community_introduce.png'
    }
  },
  mutations: {
    SET_WEBSITE_INFO (state, websiteInfo) {
      state.websiteInfo = websiteInfo
    }
  },
  actions: {
    SetWebsiteInfo ({commit}, websiteInfo) {
      commit('SET_WEBSITE_INFO', websiteInfo)
    }
  }
}
export default website
