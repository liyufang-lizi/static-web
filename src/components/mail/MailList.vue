<template>
  <div class="contain">
    <div class="secction declare">
      <h4>邮箱列表使用说明</h4>
      <ul>
        <li>1. ......</li>
        <li>2. ......</li>
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
            <td>dev@firmware.com</td>
          </tr>
          <tr>
            <td>日常讨论</td>
            <td>discuss@firmware.com</td>
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
  },
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
.secction h4 {
  font-weight: 700;
  width: 100%;
  text-align: center;
  margin: 20px 0;
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
