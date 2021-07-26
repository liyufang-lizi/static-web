<template>
  <div class="contain">
    <div class="project-title">
      项目申请流程
    </div>
    <div class="project-introduce row">
      <div class="col-xs-12 col-sm-10 col-md-10">
        <img :src="websiteInfo.imageUrlPre + projectInfo.introduce" alt="项目申请流程图">
      </div>
      <div class="col-xs-12 col-sm-2 col-md-2">
        <a :href="projectInfo.applyProUrl" style="width: 120px;" class="btn btn-primary active" role="button" target="_blank">申请新项目</a>
      </div>
    </div>
    <div class="project-list" :data="projectInfo.listData">
      <div class="project-item row" v-for="item in projectInfo.listData" :key="item.id">
        <div class="col-xs-12 col-sm-3 col-md-2">
          <img src="#" alt="项目图片">
        </div>
        <div class="col-xs-12 col-sm-7 col-md-8">
          <h4>{{ item.project_name }}</h4>
          <p v-for="ite in item.project_intro" :key="ite.id">{{ ite.content }}</p>
        </div>
        <div class="col-xs-12 col-sm-2 col-md-2">
          <a href="#" style="width: 120px;" class="btn btn-primary active" role="button" target="_blank">项目代码仓</a>
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
      projectInfo: 'projectInfo',
      websiteInfo: 'websiteInfo'
    })
  }
}
</script>

<style scoped>
.project-introduce.row {
  margin: 0;
  background: #ffffff;
  box-sizing: border-box;
  padding: 20px 10vw;
}
.project-title {
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  box-sizing: border-box;
  padding: 20px 10vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
}
.project-introduce>div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-height: 180px;
  box-sizing: border-box;
  padding: 20px;
}
.project-introduce>div>img {
  width: 80%;
}
.project-list {
  box-sizing: border-box;
  padding: 20px 10vw;
}
.project-item.row {
  margin: 10px 0;
}
.project-item h4{
  font-weight: 600;
}
.project-item p{
  list-style: inside;
  font-size: 1.6rem;
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 2em;
  text-indent: 2em;
  text-align: left;
}
.project-item.row>:last-child{
  text-align: center;
}
</style>
