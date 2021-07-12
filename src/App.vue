<template>
  <div id="app">
    <header>
      <div class="top-nav">
        <div class="nav-box">
          <div class="nav-logo">
            <!-- <img src="" alt="" srcset=""> -->
            <span style="font-weight: 700;font-size: 32px;">社区logo</span>
          </div>
          <ul class="nav-list">
            <li v-for="item in navList" :key="item.filename">
              <div class="item-index" v-if="item.children.length === 0">
                <router-link class="nav-item" :to="'/' + item.filename" :id="item.fliename">{{ item.name }}</router-link>
              </div>
              <div class="item-index" v-else>
                <span class="nav-item" :id="item.fliename" :style="item.children != null ? 'cursor: default' : 'cursor: pointer'">{{ item.name }}</span>
                <ul class="sub-nav-list">
                  <li v-for="ite in item.children" :key="ite.filename">
                    <a v-if="ite.filename === 'apply_issue'" href="https://gitee.com/unibios/proposal/tree/master" target="_blank">{{ ite.name }}</a>
                    <router-link v-else :to="'/' + ite.filename" :id="ite.filename">{{ ite.name }}</router-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="search-box">
          <input type="text" placeholder="请输入查询关键字">
        </div>
      </div>
    </header>

    <section>
      <router-view/>
    </section>

    <footer>
      <div class="footer-nav">
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
      navList: 'navInfo'
    })
  }
}
</script>

<style scoped>
@import './style/topStyle.css';
@import './style/footer.css';
section {
  width: 100%;
  min-height: calc(100vh - 360px);
  background: rgb(230, 231, 230);
  position: relative;
  top: 80px;
}
</style>
