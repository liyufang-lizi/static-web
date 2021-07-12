// import { setMaxListeners } from "node-notifier"

/**
 * 全局响应数据防止位置
 */
const getters = {
  websiteInfo: state => state.website.websiteInfo,  // 网站公共参数配置部分
  navInfo: state => state.nav.navInfo,
  about_community: state => state.community.about_community
}
export default getters
