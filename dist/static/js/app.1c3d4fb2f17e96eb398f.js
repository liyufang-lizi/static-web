webpackJsonp([1],{"6VpE":function(t,e){},EE6G:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("Dd8w"),s=n.n(i),o=n("NYxO"),r={name:"App",data:function(){return{subNavsVisited:!1}},computed:s()({},Object(o.b)({navList:"navInfo",websiteInfo:"websiteInfo"}))},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("div",{staticClass:"top-nav"},[n("div",{staticClass:"nav-box"},[n("div",{staticClass:"nav-logo"},[n("span",{staticStyle:{"font-weight":"700","font-size":"32px"}},[t._v(t._s(t.websiteInfo.websiteName))])]),t._v(" "),n("ul",{staticClass:"nav-list"},t._l(t.navList,function(e){return n("li",{key:e.filename},[0===e.children.length?n("div",{staticClass:"item-index"},[n("router-link",{staticClass:"nav-item",attrs:{to:"/"+e.filename,id:e.fliename}},[t._v(t._s(e.name))])],1):n("div",{staticClass:"item-index"},[n("span",{staticClass:"nav-item",style:null!=e.children?"cursor: default":"cursor: pointer",attrs:{id:e.fliename}},[t._v(t._s(e.name))]),t._v(" "),n("ul",{staticClass:"sub-nav-list"},t._l(e.children,function(e){return n("li",{key:e.filename},["apply_issue"===e.filename?n("a",{attrs:{href:"https://gitee.com/unibios/proposal/tree/master",target:"_blank"}},[t._v(t._s(e.name))]):n("router-link",{attrs:{to:"/"+e.filename,id:e.filename}},[t._v(t._s(e.name))])],1)}),0)])])}),0)]),t._v(" "),t._m(0)])]),t._v(" "),n("section",[n("router-view")],1),t._v(" "),n("footer",[n("div",{staticClass:"footer-nav"},[n("ul",{staticClass:"footer-list"},t._l(t.navList,function(e){return n("li",{key:e.filename},[n("router-link",{staticClass:"nav-item",attrs:{to:"/"+e.filename,id:e.fliename}},[t._v(t._s(e.name))]),t._v(" "),n("ul",{staticClass:"sub-footer-list"},t._l(e.children,function(e){return n("li",{key:e.filename},["apply_issue"===e.filename?n("a",{attrs:{href:"https://gitee.com/unibios/proposal/tree/master",target:"_blank"}},[t._v(t._s(e.name))]):n("router-link",{attrs:{to:"/"+e.filename,id:e.filename}},[t._v(t._s(e.name))])],1)}),0)],1)}),0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-box"},[e("input",{attrs:{type:"text",placeholder:"请输入查询关键字"}})])}]};var m=n("VU/8")(r,c,!1,function(t){n("jVDT")},"data-v-c0e48396",null).exports,l=n("/ocq"),u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contain"},[e("div",{staticClass:"secction slideshow"},[this._v("\n    轮播图\n  ")]),this._v(" "),e("div",{staticClass:"secction news"},[this._v("\n    新闻\n  ")]),this._v(" "),e("div",{staticClass:"secction meeting"},[this._v("\n    会议\n  ")])])}]};var d=n("VU/8")({data:function(){return{msg:""}}},u,!1,function(t){n("xxVp")},"data-v-6dd9fcb7",null).exports,f=n("AHE6"),_={components:{SpringCalendar:n.n(f).a},data:function(){return{config:{title:"name",startDate:"start",endDate:"end"},events:[{title:"Event 0",startDate:"2021-07-01 08:00",endDate:"2021-07-01 09:20"},{title:"Event 1",startDate:"2021-07-01 10:00",endDate:"2021-07-01 12:00"},{title:"Event 2",startDate:"2021-07-01 13:00",endDate:"2021-07-01 15:30"},{title:"Event 3",startDate:"2021-07-01 15:46",endDate:"2021-07-01 17:30"},{title:"Event 4",startDate:"2021-07-01 17:50",endDate:"2021-07-01 19:30"},{title:"Event 3",startDate:"2021-07-03 08:00",endDate:"2021-07-03 12:00"}]}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("SpringCalendar",{attrs:{year:"2021","default-type":"month",color:"#0366d6",show:"month",events:this.events,locale:"ml","start-of-week":"0","labels-config":this.config}})],1)},staticRenderFns:[]};var v=n("VU/8")(_,p,!1,function(t){n("UUtA")},"data-v-7e067ba8",null).exports,h={data:function(){return{}},computed:s()({},Object(o.b)({aboutCommunityList:"about_community",websiteInfo:"websiteInfo"}))},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contain"},[t._m(0),t._v(" "),n("ul",{staticClass:"contain-text",attrs:{data:t.aboutCommunityList}},t._l(t.aboutCommunityList,function(e){return n("li",{key:e.id,staticClass:"contain-item"},["text"===e.com_type?n("p",[t._v(t._s(e.com_content))]):n("img",{attrs:{src:t.websiteInfo.imageUrlPre+e.com_content+"_hengban.jpg",alt:e.com_content}})])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"image-introduce"},[e("img",{attrs:{src:n("QrU7"),alt:""}})])}]};var g=n("VU/8")(h,b,!1,function(t){n("EE6G")},"data-v-aef0e760",null).exports;a.default.use(l.a);var y=l.a.prototype.push;l.a.prototype.push=function(t){return y.call(this,t).catch(function(t){return t})};var C=new l.a({base:"/",routes:[{path:"/home",name:"Home",component:d},{path:"/meeting_calendar",name:"MeetingCalendar",component:v},{path:"/about_community",name:"AboutCommunity",component:g}]}),E={state:{navInfo:[{id:0,name:"首页",filename:"home",children:[]},{id:1,name:"社区",filename:"community",children:[{id:0,name:"关于社区",filename:"about_community",parent_id:1},{id:1,name:"组织架构",filename:"organization_chart",parent_id:1},{id:2,name:"邮箱列表",filename:"mail_list",parent_id:1},{id:3,name:"加入我们",filename:"join_us",parent_id:1}]},{id:2,name:"新闻",filename:"news",children:[]},{id:3,name:"会议",filename:"meeting",children:[{id:0,name:"会议纪要",filename:"meeting_summary",parent_id:3},{id:1,name:"议题申请",filename:"apply_issue",parent_id:3},{id:2,name:"会议日历",filename:"meeting_calendar",parent_id:3}]},{id:4,name:"项目",filename:"project",children:[{id:0,name:"项目介绍",filename:"project_introduction",parent_id:4},{id:1,name:"贡献攻略",filename:"contribute",parent_id:4},{id:2,name:"问题上报",filename:"problem_report",parent_id:4}]},{id:5,name:"代码仓",filename:"code_base",children:[]}]},mutations:{SET_NAV_INFO:function(t,e){t.navInfo=e}},actions:{SetNavInfo:function(t,e){(0,t.commit)("SET_NAV_INFO",e)}}},w={state:{websiteInfo:{websiteName:"社区",websiteLogo:"",imageUrlPre:"https://github.com/liyufang-lizi/images-data/raw/master/"}},mutations:{SET_WEBSITE_INFO:function(t,e){t.websiteInfo=e}},actions:{SetWebsiteInfo:function(t,e){(0,t.commit)("SET_WEBSITE_INFO",e)}}},I={state:{about_community:[{id:0,com_type:"text",com_content:"固件联盟全程“固件产业创新技术联盟”，是在工信部信发司的指导下，由中国电子技术标准化研究院联合百敖软件有限公司、中电科技（北京）有限公司、阿里巴巴技术有限公司、华为技术有限公司、浪潮集团有限公司、联想集团等七家单位共同发起创建的。通过联合产业链上下游企业共同推进国产固件技术及产业的发展，提升国际影响力。"},{id:1,com_type:"img",com_content:"organization_chart_0"},{id:2,com_type:"text",com_content:"开源工作组归属于固件联盟，核心工作就是创建国内BIOS开源社区，管理并维护其日产运作。开源工作组设置了管理委员会，负责对BIOS开源社区的发展方向进行规划，对社区重大事务进行决策。管理委员会下设4个工作小组，分别负责开源社区的相关流程制定和日产事务处理。"},{id:3,com_type:"img",com_content:"organization_chart_1"}]},mutations:{SET_ABOUT_COMMUNITY:function(t,e){t.about_community=e}},action:{SetAboutCommunity:function(t,e){(0,t.commit)("SET_ABOUT_COMMUNITY",e)}}},x={websiteInfo:function(t){return t.website.websiteInfo},navInfo:function(t){return t.nav.navInfo},about_community:function(t){return t.community.about_community}};a.default.use(o.a);var D=new o.a.Store({modules:{nav:E,website:w,community:I},getters:x}),S=(n("6VpE"),n("tmRx"),n("UTxJ"));a.default.config.productionTip=!1,a.default.use(S.default),new a.default({el:"#app",router:C,store:D,components:{App:m},template:"<App/>"})},QrU7:function(t,e,n){t.exports=n.p+"static/img/about_community_introduce.cea2aef.png"},UUtA:function(t,e){},jVDT:function(t,e){},tmRx:function(t,e){},xxVp:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1c3d4fb2f17e96eb398f.js.map