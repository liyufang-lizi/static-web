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
            <div class="carousel-caption image-introduce-0">
              <!-- 社区板块 -->
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
          <div class="img-contain"></div>
          <!-- <img style="width:100%;" :src="websiteInfo.imageUrlPre + 'home/' + websiteInfo.communityIntroduceImg" alt="社区介绍版本"> -->
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
        <div class="col-xs-12 col-sm-5 col-md-4 organization-chart">
          <!-- <img :src="websiteInfo.imageUrlPre + organizationInfo.chart" alt="组织架构"> ‘已取消，改成了ann’ -->
          <div class="bg-btn-div">
            <div class="btndiv click-active" id="glwyh" title="管理委员会" @click="toShowCurrentClass('glwyh')">管理委员会</div>
            <div class="btndiv" id="maintainer" title="Maintainer" @click="toShowCurrentClass('maintainer')">Maintainer</div>
            <div class="btndiv" id="committer" title="Committer" @click="toShowCurrentClass('committer')">Committer</div>
            <div class="btndiv" id="contributor" title="Contributor" @click="toShowCurrentClass('contributor')">Contributor</div>
            <!-- <div class="btndiv" id="dmglz" title="代码管理组" @click="toShowCurrentClass('dmglz')">代码管理组</div>
            <div class="btndiv" id="jccsz" title="测试集成组" @click="toShowCurrentClass('jccsz')">测试集成组</div>
            <div class="btndiv" id="aqz" title="安全组" @click="toShowCurrentClass('aqz')">安全组</div>
            <div class="btndiv" id="sqyyz" title="社区运营组" @click="toShowCurrentClass('sqyyz')">社区运营组</div> -->
          </div>
          <div class="btn-line">
            <div class="vertical-line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <!-- <div class="line"></div> -->
          </div>

        </div>
        <div class="col-xs-12 col-sm-7 col-md-8 organization-subs">
          <div class="glwyh subs-panel">
            <h5>管理委员会</h5>
            <p>由开源工作组的核心成员组成，主要包含以下职责：</p>
            <ol>
              <li>社区定位、路标</li>
              <li>关键成员提名、投票</li>
              <li>定期召开会议</li>
              <li>需求/问题的排序</li>
              <li>关键技术方案和架构讨论决策</li>
              <li>分工决策</li>
            </ol>
          </div>
          <div class="maintainer subs-panel">
            <h5>Maintainer</h5>
            <p>由项目的发起人承担，主要包含以下职责：</p>
            <ol>
              <li>技术路线规划</li>
              <li>版本发布</li>
              <li>开发活动协商</li>
              <li>代码合入</li>
            </ol>
          </div>
          <div class="committer subs-panel">
            <h5>Committer</h5>
            <p>由开发经验丰富或者对模块熟悉的成员承担，主要包含以下职责：</p>
            <ol>
              <li>功能开发</li>
              <li>问题修复</li>
              <li>代码检视</li>
              <li>任务分发</li>
            </ol>
          </div>
          <div class="contributor subs-panel">
            <h5>Contributor</h5>
            <p>由开源代码使用者和社区成员组成，主要包含以下职责：</p>
            <ol>
              <li>代码提交</li>
              <li>问题上报</li>
              <li>问题讨论</li>
              <li>任务响应</li>
            </ol>
          </div>

        <!--
          <div class="dmglz subs-panel">
            <h5>代码管理组</h5>
            <p>负责社区项目的开发和管理，保障开源项目的代码提交、检视、issue管理等日常操作的有序进行，同时负责输出项目的快速入门指南，帮助新人尽快熟悉项目，根据权限划分为以下三类角色：</p>
            <table>
              <thead>
                <tr>
                  <td>角色</td>
                  <td>职责</td>
                </tr>
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
        -->
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
  },
  methods: {
    toShowCurrentClass (className) {
      var tips = document.getElementsByClassName('subs-panel')
      for (var i = 0; i < tips.length; i++) {
        if (tips[i].className.indexOf(className) !== -1) {
          document.getElementsByClassName(tips[i].className)[0].style.display = 'block'
          document.getElementById(className).className = 'btndiv click-active'
          var subs = document.getElementById(className).parentElement.children
          for (var j = 0; j < subs.length; j++) {
            if (subs[j].id !== className) {
              subs[j].className = 'btndiv'
            }
          }
        } else {
          document.getElementsByClassName(tips[i].className)[0].style.display = 'none'
        }
      }
    }
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

/* 补充的div用来替换img标签 */
.img-contain {
  width: 100%;
  height: 240px;
  background: url('../../../static/image/community_introduce.png') no-repeat 0 0;
  background-size: contain;
  background-position: center;
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
.bg-btn-div {
  height: 330px;
  position: absolute;
  top: 0;
  left: 0;
}
.organization-subs{
  box-sizing: border-box;
  padding: 20px;
}
.organization-chart{
  padding: 0;
  height: 330px;
}

@media (max-width: 768px) {
  .secction{
    padding: 20px 0;
  }
  .int-list>li{
    font-size: 1.2rem;
  }
  .organization-chart {
    position: relative;
    left: -20px;
  }
}
.subs-panel {
  display: none;
}
.glwyh{
  display: block;
}
.subs-panel h5 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
}
.subs-panel ol li {
  list-style: inside;
  font-size: 1.6rem;
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 2em;
  /* text-indent: 2em; */
  text-align: left;
}
.subs-panel p {
  list-style: inside;
  font-size: 1.6rem;
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 2em;
  /* text-indent: 2em; */
  text-align: left;
}
.subs-panel table {
  margin-top: 20px;
}
.subs-panel table tr td {
  text-align: center;
  list-style: inside;
  font-size: 1.6rem;
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 2em;
  text-align: left;
  border: 1px solid #507b9b;
  box-sizing: border-box;
  padding: 10px 24px;
}
.btndiv{
  position: absolute;
  border-radius: 6px;
  width: 120px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #507b9b;
  line-height: 40px;
  text-align: center;
}
.btndiv:hover {
  cursor: pointer;
  box-shadow: 0 0 18px 0 #507b9b;
}
.click-active{
  box-shadow: 0 0 18px 0 #507b9b;
}
.btndiv:nth-child(1){
  top: 129px;
  left: 20px;
}
.btndiv:nth-child(2){
  top: 35px;
  left: 200px;
}
.btndiv:nth-child(3){
  top: 128px;
  left: 200px;
}
.btndiv:nth-child(4){
  top: 221px;
  left: 200px;
}
.btndiv:nth-child(5){
  top: 314px;
  left: 200px;
}

/* 分割线 */
.btn-line{
  position: relative;
}
.vertical-line {
  width: 0;
  height: 187px;
  border-right: 1px solid #507b9b;
  position: absolute;
  top: 54px;
  left: 170px;
}
.line {
  width: 20px;
  height: 0;
  border-top:  1px solid #507b9b;
}
.line:nth-child(2) {
  position: absolute;
  top: 54px;
  left: 170px;
}
.line:nth-child(3) {
  position: absolute;
  top: 147px;
  left: 170px;
}
.line:nth-child(4) {
  position: absolute;
  top: 147px;
  left: 150px;
}
.line:nth-child(5) {
  position: absolute;
  top: 240px;
  left: 170px;
}
.line:nth-child(6) {
  position: absolute;
  top: 338px;
  left: 170px;
}
</style>
