<template>
  <div class="contain">
    <!-- 轮播图宣传部分 -->
    <div class="secction slideshow">
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <div class="carousel-caption image-introduce-0">
              <!-- 社区板块 -->
            </div>
          </div>
          <div class="item">
            <div class="carousel-caption image-introduce-1">
              <div class="introduce-txt">
                <ul class="int-list" :data="introduceKeyData">
                  <li v-for="item in introduceKeyData" :key="item.id">
                    <b>{{ item.key_words }}：</b>
                    <span>{{ item.key_content }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="carousel-caption image-introduce-2">
              <!-- 会议板块 -->
            </div>
          </div>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <!-- 社区介绍板块 -->
    <div class="secction community">
      <div class="row">
        <div class="col-xs-12 col-sm-4 col-md-3">
          <img style="width:100%;" :src="websiteInfo.imageUrlPre + 'home/' + websiteInfo.communityIntroduceImg" alt="社区介绍版本">
        </div>
        <div class="col-xs-12 col-sm-8 col-md-9">
          <div class="community-content" :data="communityContent">
            {{ communityContent }}
          </div>
        </div>
      </div>
    </div>

    <!-- 组织架构板块 -->
    <div class="secction organization">
      <div class="row">
        <div class="col-xs-12 col-sm-5 col-md-4" style="padding: 0;">
          <img style="width:100%;" :src="websiteInfo.imageUrlPre + organizationInfo.chart" alt="组织架构">
          <!-- <div class="bg-btn-div">
            <div class="btndiv"></div>
            <div class="btndiv"></div>
            <div class="btndiv"></div>
            <div class="btndiv"></div>
            <div class="btndiv"></div>
          </div> -->

        </div>
        <div class="col-xs-12 col-sm-7 col-md-8 organization-subs">
          <div class="glwyh subs-panel">
            <h5>管理委员会</h5>
            <p>由固件联盟下属开源工作组的核心成员组成，主要包含一下职责：</p>
            <ol>
              <li>社区定位、路标</li>
              <li>关键成员提名、投票</li>
              <li>需求/问题的排序</li>
              <li>关键技术方案和架构讨论决策</li>
              <li>分工决策</li>
            </ol>
            <p>管理委员会定期收集提案系统中提交的议题，并召开线上会议进行讨论决策。</p>
          </div>
          <div class="dmglz subs-panel">
            <h5>代码管理组</h5>
            <p>负责社区项目的开发和管理，保障开源项目的代码提交、检视、issue管理等日常操作的有序进行，同时负责输出项目的快速入门指南，帮助新人尽快熟悉项目，根据权限划分为一下三类角色：</p>
            <table>
              <thead>
                <td>角色</td>
                <td>色调</td>
              </thead>
              <tbody>
                <tr>
                  <td>Maninmatain</td>
                  <td>负责版本发布，功能开发，代码检视，拥有代码合入</td>
                </tr>
                <tr>
                  <td>Developer</td>
                  <td>负责功能开发，问题修复，有评审Contributor提交的patch权限，有申请代码合入的权限，但没有代码合入的权限，同时作为Maintainer的后备人选。</td>
                </tr>
                <tr>
                  <td>Contributor</td>
                  <td>开源代码使用者和贡献者，可以通过邮件提交patch，报告缺陷，无直接申请代码合入的权限。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="jccsz subs-panel">
            <h5>集成测试组</h5>
            <p>负责C环境的搭建维护和自动化测试的集成，其中自动化测试用例由项目提供，集成测试组不负责用例的编写。</p>
          </div>
          <div class="aqz subs-panel">
            <h5>安全组</h5>
            <p>安全组负责社区开源项目的漏洞管理，需要及时响应社区成员上报的疑似漏洞，同时要主动关注业界披露的漏洞。一旦发现受影响漏洞，要按照社区漏洞处理流程尽快分析解决。对于已经修复的漏洞需要整理后输出漏洞分析到代码仓的wiki页面。</p>
          </div>
          <div class="sqyyz subs-panel">
            <h5>社区运营组</h5>
            <p>负责社区基础设置的维护和日常运作，如社区门户网站内容的更新，培训和活动的策划、会议的组织、反馈意见的收集处理。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      introduceKeyData: 'introduceKey',
      communityContent: 'communityContent',
      websiteInfo: 'websiteInfo',
      organizationInfo: 'organizationInfo'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.secction {
  width: 100%;
  box-sizing: border-box;
  padding: 40px 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.secction.organization {
  width: 100%;
  box-sizing: border-box;
  padding: 40px 10vw;
  display: flex;
  flex-flow: column;
}
.secction>div {
  width: 100%;
  background: white;
}
.secction.organization>div.row,
.secction.community>div.row {
  box-sizing: border-box;
  padding: 15px 0;
  margin: 0;
}
.secction.slideshow {
  padding: 0;
}
.carousel-caption {
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-introduce-0 {
  background: url('../../../static/image/eg_01.png') no-repeat 0 0;
  background-size: 100% 100%;
}
.image-introduce-1 {
  background: url('../../../static/image/about_community_introduce.png') no-repeat 0 0;
  background-size: 100% 100%;
}.image-introduce-2 {
  background: url('../../../static/image/eg_02.png') no-repeat 0 0;
  background-size: 100% 100%;
}
.introduce-txt {
  box-sizing: border-box;
  padding: 16px 32px;
  background: #ffffff60;
  border-radius: 6px;
}
.int-list>li,
.community-content {
  list-style: inside;
  font-size: 1.6rem;
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 2em;
  text-indent: 2em;
  text-align: left;
}
.int-list>li {
  color: #ffffff;
}
.community-content {
  color: rgb(63, 63, 63);
}

.carousel-caption {
  position: static;
  color: #ffffff;
  padding: 0;
  font-size: 18px;
  font-weight: 500;
}
div#carousel-example-generic {
  width: 100%;
  height: 280px;
}
.swiper-container {
  width: 600px;
  height: 280px;
}
.secction:nth-child(odd) {
  background: rgb(240, 240, 240);
}
.secction:nth-child(even) {
  background: rgb(230, 231, 230);
}
.bg-btn-div{
  width: 546px;
  height: 266px;
  position: absolute;
  top: 0;
  left: 0;
}
.btndiv{
  position: absolute;
  background: #c4262675;
}
.btndiv:nth-child(1){
  width: 139px;
  height: 57px;
  top: 34px;
  left: 205px;
}
.btndiv:nth-child(2){
  width: 120px;
  height: 40px;
  top: 190px;
  left: 23px;
}
.btndiv:nth-child(3){
  width: 120px;
  height: 40px;
  top: 190px;
  left: 162px;
}
.btndiv:nth-child(4){
  width: 88px;
  height: 40px;
  top: 190px;
  left: 301px;
}
.btndiv:nth-child(5){
  width: 120px;
  height: 40px;
  top: 190px;
  left: 408px;
}

</style>
