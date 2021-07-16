// import { setMaxListeners } from "node-notifier"

/**
 * 全局响应数据放置位置
 */
const getters = {
  websiteInfo: state => state.website.websiteInfo,
  navInfo: state => state.nav.navInfo,
  // aboutCommunity: state => state.community.aboutCommunity,
  introduceKey: state => state.community.introduceKey,
  communityContent: state => state.community.communityContent,
  projectInfo: state => state.project.projectInfo
}
export default getters
