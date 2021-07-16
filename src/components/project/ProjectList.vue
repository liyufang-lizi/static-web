<template>
  <div class="contain">
    <div class="project-introduce">
      <img :src="websiteInfo.imageUrlPre + projectInfo.introduce" alt="项目申请流程图">
      <a :href="projectInfo.applyProUrl" style="width: 120px;" class="btn btn-primary active" role="button">申请新项目</a>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {

    }
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
.project-introduce{
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 10vw;
}
</style>
