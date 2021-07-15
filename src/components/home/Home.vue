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
              社区板块
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
              会议板块
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
    <div class="secction meeting">
      <div>
        组织架构
      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapGetters({
      introduceKeyData: 'introduceKey',
      communityContent: 'communityContent',
      websiteInfo: 'websiteInfo'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.secction {
  width: 100%;
  box-sizing: border-box;
  padding: 40px 16vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.secction>div{
  width: 100%;
}
.secction.slideshow{
  padding: 0;
}
.carousel-caption{
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
.introduce-txt{
  box-sizing: border-box;
  padding: 16px 32px;
  background: #ffffff60;
  border-radius: 6px;
}
.int-list>li,
.community-content{
  list-style: inside;
  font-size: 1.6rem;
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 2em;
  text-indent: 2em;
  text-align: left;
}
.int-list>li{
  color: #ffffff;
}
.community-content{
  color: rgb(63, 63, 63);
}

.carousel-caption{
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
</style>
