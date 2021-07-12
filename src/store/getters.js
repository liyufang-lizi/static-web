// import { setMaxListeners } from "node-notifier"

/**
 * 全局响应数据防止位置
 */
const getters = {
  websiteInfo: state => state.website.websiteInfo,
  navInfo: state => state.nav.navInfo,
  about_community: state => state.community.about_community
}
export default getters
