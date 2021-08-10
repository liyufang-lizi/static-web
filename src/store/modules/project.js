const project = {
  state: {
    projectInfo: {
      introduce: 'flowchart_for_apply.png',
      applyProUrl: 'https://gitee.com/open-firmware/project',
      project_img_url: '', // 项目图片地址前缀
      listData: [{
        id: 0,
        project_img: '', // 项目图片
        project_index: '项目序号-01',
        project_name: '测试数据-项目一',
        project_codebase: '', // 项目代码仓地址
        project_type: '', // 项目类型
        project_start: '', // 项目热度
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
        project_img: '',
        project_index: '项目序号-02',
        project_name: '测试数据-项目二',
        project_codebase: '',
        project_type: '',
        project_start: '',
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
        id: 2,
        project_img: '',
        project_index: '项目序号-03',
        project_name: '测试数据-项目三',
        project_codebase: '',
        project_type: '',
        project_start: '',
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
