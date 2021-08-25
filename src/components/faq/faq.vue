<template>
  <div class="contain">
    <div class="panel panel-default">
      <div class="panel-body">
        <div class="panel panel-primary" v-for="item in faqInfo" :key="item.id">
          <div class="panel-heading">Q：{{ item.question }}</div>
          <div class="panel-body" v-if="item.extra_url">
            <b>A：</b>{{ item.answer }}
            <a :href="item.extra_url" style="width: 120px;font-weight: 700;">{{ item.extra_name }}</a>
          </div>
          <div class="panel-body" v-else>
            <b>A：</b>{{ item.answer }}
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
@media (max-width: 768px) {
  .contain{
    padding: 0;
  }
  .panel{
    margin: 20px 0;
  }
}
.panel-heading{
  font-size: 16px;
  font-weight: 700;
}
.panel-body>.panel-primary>.panel-body{
  font-size: 1.6rem;
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 2em;
  text-indent: 2em;
  text-align: left;
}
</style>
