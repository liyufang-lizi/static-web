<template>
  <div class="contain">
    <div class="secction declare">
      <h4>邮箱列表使用说明</h4>
      <ul class="declare-list">
        <li><b>选择：</b>在邮件列表页面选择要订阅的邮件列表；</li>
        <li><b>订阅：</b>填入邮件地址和名字，名字可选，点击订阅</li>
        <li><b>确认：</b>您的邮箱将收到一封来自邮件列表的电子邮件，要求您确认订阅了邮件列表，回复该电子邮件确认订阅</li>
        <li><b>成功：</b>您的邮箱收到来自一封来自邮件列表的欢迎邮件，即成功订阅该邮件列表</li>
      </ul>
    </div>
    <div class="secction list-table">
      <table>
        <thead>
          <tr>
            <td>邮件讨论区</td>
            <td>邮箱列表地址</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>需求开发</td>
            <td><a href="mailto:dev@firmware.com" style="font-weight: 700;">dev@firmware.com</a></td>
          </tr>
          <tr>
            <td>日常讨论</td>
            <td><a href="mailto:discuss@firmware.com" style="font-weight: 700;">discuss@firmware.com</a></td>
          </tr>
        </tbody>
      </table>
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
      // meetingInfo: 'meetingInfo'
    })
  }
}
</script>

<style scoped>
.contain {
  box-sizing: border-box;
  padding: 40px 10vw;
}
.secction {
  box-sizing: border-box;
  padding: 32px;
  background: #ffffff;
  margin: 20px;
}
@media (max-width: 768px) {
  .contain{
    padding: 0;
  }
  .secction {
    margin: 0;
  }
}
.secction h4 {
  font-weight: 700;
  width: 100%;
  text-align: center;
  margin: 20px 0;
}
.declare-list li{
  list-style: inside;
  font-size: 1.6rem;
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 2em;
  text-align: left;
}
.secction table {
  width: 100%;
}
.secction table thead tr td,
.secction table tbody tr td {
  border: 1px solid gray;
  box-sizing: border-box;
  padding: 20px;
  list-style: inside;
  font-size: 1.6rem;
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 2em;
  text-align: left;
}
.secction table thead tr td {
  font-weight: 700;
  text-align: center;
}
.secction table tbody tr td {
  text-align: center;
}
</style>
