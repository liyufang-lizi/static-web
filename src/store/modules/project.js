const project = {
  state: {
    projectInfo: {
      introduce: 'flowchart_for_apply.png',
      applyProUrl: 'https://gitee.com/openfirmware/project',
      listData: [{
        id: 0,
        project_index: '项目序号-01',
        project_name: '测试数据-项目一',
        project_intro: [
          {
            id: 0,
            content: '段落标注-01'
          }, {
            id: 1,
            content: '段落标注-02'
          }
        ]
      }, {
        id: 1,
        project_index: '项目序号-02',
        project_name: '测试数据-项目二',
        project_intro: [
          {
            id: 0,
            content: '段落标注-01'
          }, {
            id: 1,
            content: '段落标注-02'
          }
        ]
      }]
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
