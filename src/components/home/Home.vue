<template>
  <div class="contain">
    <!-- 轮播图宣传部分 -->
    <div class="secction slideshow">
      轮播图
    </div>

    <!-- 新闻板块 -->
    <div class="secction news">
      新闻
    </div>

    <!-- 会议板块 -->
    <div class="secction meeting">
      会议
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.secction {
  width: 100%;
  height: 280px;
  box-sizing: border-box;
  padding: 0 16vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.secction:nth-child(odd) {
  background: rgb(240, 240, 240);
}
.secction:nth-child(even) {
  background: rgb(230, 231, 230);
}
</style>
