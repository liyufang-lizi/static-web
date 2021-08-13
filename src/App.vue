<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button id="nav-btn" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#/home">
            <!-- <img :src="websiteInfo.imageUrlPre + websiteInfo.websiteLogo" alt=""> -->
            <span :style='"width:48px;height:48px;margin-right: 20px;display: inline-block;background: url(" + websiteInfo.imageUrlPre + websiteInfo.websiteLogo + ");background-size: contain;background-repeat: no-repeat;background-position: center;"'></span>
            {{ websiteInfo.websiteName }}
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li v-for="item in navList" :key="item.filename" @click="dealClick()">
              <a class="jump_a" v-if="item.filename === 'code_base'" href="https://gitee.com/open-firmware" target="_blank" :id="item.fliename">{{ item.name }}</a>
              <a class="jump_a" v-else :href="'#/' + item.filename" :id="item.fliename">{{ item.name }}</a>
              <!--包含子菜单的表述
                <a v-if="item.children.length === 0" :href="'#/' + item.filename == 'code_base' ? 'https://gitee.com/open-firmware' : item.filename" :id="item.fliename">{{ item.name }}</a>
                <a v-else :href="'#/' + item.filename" :id="item.fliename" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  {{ item.name }}
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li v-for="ite in item.children" :key="ite.filename">
                    <a v-if="ite.filename === 'apply_issue'" href="https://gitee.com/unibios/proposal/tree/master" target="_blank">{{ ite.name }}</a>
                    <a v-else :href="'#/' + ite.filename" :id="ite.fliename">{{ ite.name }}</a>
                  </li>
                </ul>
              -->
            </li>
          </ul>
          <form class="navbar-form navbar-right">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="关键字搜索...">
            </div>
            <button type="submit" class="btn btn-default">提交</button>
          </form>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    <section>
      <router-view/>
    </section>

    <footer>
      <div class="foot-content">
        <b>Copyright © 2009-2021</b>
      </div>
    </footer>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      subNavsVisited: false
    }
  },
  computed: {
    ...mapGetters({
      navList: 'navInfo',
      websiteInfo: 'websiteInfo'
    })
  },
  methods: {
    dealClick () {
      if (JSON.parse(document.querySelector('.navbar-toggle').getAttribute('aria-expanded'))) {
        document.querySelector('.navbar-toggle').click()
      }
    }
  }
}
</script>

<style scoped>
@import './style/topStyle.css';
@import './style/footer.css';
section {
  width: 100%;
  min-height: calc(100vh - 150px);
  background: rgb(230, 231, 230);
  position: relative;
  top: 50px;
}
a.navbar-brand {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
a.navbar-brand>img {
  height: 48px;
  margin-right: 20px;
}
form.navbar-form.navbar-right {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
@media (max-width: 768px) {
  .form-group{
    margin-bottom: 0;
    margin-right: 20px;
  }
}
footer {
  width: 100%;
  height: 100px;
  position: relative;
  background: #ffffff;
  top: 50px;
}
.foot-content {
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  padding: 0 10vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.foot-content b {
  font-size: 14px;
}
</style>
