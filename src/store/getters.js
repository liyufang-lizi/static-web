// import { setMaxListeners } from "node-notifier"

/**
 * 全局响应数据防止位置
 */
const getters = {
  websiteInfo: state => state.website.websiteInfo,
  navInfo: state => state.nav.navInfo,
  // aboutCommunity: state => state.community.aboutCommunity,
  introduceKey: state => state.community.introduceKey,
  communityContent: state => state.community.communityContent
}
export default getters
