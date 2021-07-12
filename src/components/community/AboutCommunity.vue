<template>
  <div class="contain">
    <div class="image-introduce">
      <img src="../../../static/image/about_community_introduce.png" alt="">
    </div>
    <ul class="contain-text" :data="aboutCommunityList">
      <li class="contain-item" v-for="item in aboutCommunityList" :key="item.id">
        <p v-if="item.com_type === 'text'">{{ item.com_content }}</p>
        <!-- <img v-else :src="'../../../static/image/' + item.com_content" :alt="item.com_content"> -->
        <img v-else :src="'https://github.com/liyufang-lizi/images-data/raw/master/' + item.com_content" :alt="item.com_content">
      </li>
    </ul>
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
      aboutCommunityList: 'about_community'
    })
  }
}
</script>

<style scoped>
/*
https://github.com/liyufang-lizi/images-data/raw/master/about_community_introduce.png
*/
.contain {
  box-sizing: border-box;
  padding: 0 10vw;
}
.contain-text{
  box-sizing: border-box;
  padding-bottom: 30px;
}
.image-introduce{
  width: 100%;
  height: 280px;
}
.image-introduce img{
  width: 100%;
  height: 100%;
}
li.contain-item {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 12px 20px;
}
li.contain-item p {
  text-indent: 32px;
}
</style>
