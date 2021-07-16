const project = {
  state: {
    projectInfo: {
      introduce: 'flowchart_for_apply.png',
      applyProUrl: 'https://gitee.com/openfirmware/project',
      listData: []
    }
  },
  mutations: {
    SET_PROJECT_INFO (state, projectInfo) {
      state.projectInfo = projectInfo
    }
  },
  action: {
    SetProjectInfo ({commit}, projectInfo) {
      commit('SET_PROJECT_INFO', projectInfo)
    }
  }
}
export default project
