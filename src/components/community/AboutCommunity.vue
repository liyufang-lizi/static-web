<template>
  <div class="contain">
    <div class="image-introduce">
      <div class="introduce-txt">
        <ul class="int-list" :data="introduceKeyData">
          <li v-for="item in introduceKeyData" :key="item.id">
            <b>{{ item.key_words }}：</b>
            <span>{{ item.key_content }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="content">
      <ul class="contain-text" :data="aboutCommunityList">
        <li class="contain-item" v-for="item in aboutCommunityList" :key="item.id">
          <p v-if="item.com_type === 'text'">{{ item.com_content }}</p>
          <img v-else :src="websiteInfo.imageUrlPre + item.com_content + '_hengban.jpg'" :alt="item.com_content + '_hengban.jpg'">
        </li>
      </ul>
    </div> -->

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
      introduceKeyData: 'introduceKey'
      // aboutCommunityList: 'aboutCommunityn',
      // websiteInfo: 'websiteInfo'
    })
  }
}
</script>

<style scoped>
.contain {
  width: 100%;
}
.image-introduce {
  width: 100%;
  height: 280px;
  background: url('../../../static/image/about_community_introduce.png') no-repeat 0 0;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.introduce-txt{
  box-sizing: border-box;
  padding: 16px 32px;
  background: #ffffff60;
  border-radius: 6px;
}
.int-list>li{
  list-style: inside;
  font-size: 1.6rem;
  color: #ffffff;
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 2em;
  text-indent: 2em;
}

.content {
  box-sizing: border-box;
  padding: 0 10vw;
}
.contain-text {
  box-sizing: border-box;
  padding-bottom: 30px;
}
li.contain-item {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 12px 0;
}
li.contain-item p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 2em;
  text-indent: 2em;
  text-align: justify;
}
</style>
