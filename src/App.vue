<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <img :src="websiteInfo.imageUrlPre + websiteInfo.websiteLogo" alt="">
          <a class="navbar-brand" href="#">{{ websiteInfo.websiteName }}</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li v-for="item in navList" :key="item.filename">
              <a v-if="item.children.length === 0" :href="'#/' + item.filename" :id="item.fliename">{{ item.name }}</a>
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

    <!-- <footer>
      <div class="container">
        <ul class="footer-list">
          <li v-for="item in navList" :key="item.filename">
            <router-link class="nav-item" :to="'/' + item.filename" :id="item.fliename">{{ item.name }}</router-link>
            <ul class="sub-footer-list">
              <li v-for="ite in item.children" :key="ite.filename">
                <a v-if="ite.filename === 'apply_issue'" href="https://gitee.com/unibios/proposal/tree/master" target="_blank">{{ ite.name }}</a>
                <router-link v-else :to="'/' + ite.filename" :id="ite.filename">{{ ite.name }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer> -->
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
  }
}
</script>

<style scoped>
@import './style/topStyle.css';
@import './style/footer.css';
section {
  width: 100%;
  min-height: calc(100vh - 50px);
  background: rgb(230, 231, 230);
  position: relative;
  top: 50px;
}
</style>
