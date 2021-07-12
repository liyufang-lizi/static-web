const website = {
  state: {
    websiteInfo: {
      websiteName: '社区',
      websiteLogo: '',
      imageUrlPre: 'https://github.com/liyufang-lizi/images-data/raw/master/'
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
