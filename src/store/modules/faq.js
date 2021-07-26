const faq = {
  state: {
    faqInfo: [{
      id: 0,
      question: '我在社区可以做什么？',
      answer: '固件联盟开源社区是以固件技术为核心的开源社区，在社区内成员可以自由地参与固件技术讨论、项目开发。如果有好的idea，也欢迎提交到社区，社区鼓励一切固件技术相关的改进和创新。'
    }, {
      id: 1,
      question: '怎么参与社区项目？',
      answer: '在网站的项目里面，罗列了目前正在开发和维护的固件项目，每个项目都附有介绍和代码仓跳转链接，社区成员可以选择自己感兴趣的项目并申请加入对应的代码仓。成为代码仓成员之后，就可以提交issue或者贡献代码。'
    }, {
      id: 2,
      question: '怎么与社区的成员交流？',
      answer: '社区鼓励成员使用邮件进行沟通交流，社区成员可以访问网站的邮箱列表页面，该页面列举了社区所有的讨论组，社区成员可以选择自己感兴趣的讨论组并加入讨论。关于讨论组的加入和使用方法，可参考以下链接。',
      extra_url: 'https://liyufang-lizi.github.io/static-web/dist/index.html#/mail_list'
    }, {
      id: 3,
      question: '我有一些关于社区的意见建议，如何提交？',
      answer: '在网站的会议页面，有一个会议议题申请按钮，点击后会跳转到提案收集页面，有任何关于社区的想法，都可以在该页面进行提交。社区会定期开展会议并讨论收集到的议题，会议日程以及会议纪要也会更新在网站上。'
    }]
  },
  mutations: {
    SET_FAQ_INFO (state, faqInfo) {
      state.faqInfo = faqInfo
    }
  },
  actions: {
    SetFaqInfo ({commit}, faqInfo) {
      commit('SET_FAQ_INFO', faqInfo)
    }
  }
}
export default faq
