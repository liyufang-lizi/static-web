const website = {
  state: {
    websiteInfo: {
      websiteName: 'ubios社区',
      websiteLogo: ''
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
