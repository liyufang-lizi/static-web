<template>
  <div class="contain">
    <div class="panel panel-default">
      <div class="panel-body">
        <div class="panel panel-default" v-for="item in faqInfo" :key="item.id">
          <div class="panel-heading">Q：{{ item.question }}</div>
          <div class="panel-body">A：{{ item.answer }}</div>
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
      faqInfo: 'faqInfo'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  width: 100%;
  box-sizing: border-box;
  padding: 40px 10vw;
}
.panel{
  margin: 20px;
}
.panel-heading{
  font-size: 16px;
  font-weight: 700;
}
.panel-body{
  font-size: 1.6rem;
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 2em;
  text-indent: 2em;
  text-align: left;
}
</style>
