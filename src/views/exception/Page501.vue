<!--
 * @Author: swipth
 * @Description:501
-->
<template>
  <div class="box">
    <img src="@/assets/images/exception/501.png" alt="" width="488" height="200" />
    <div class="title">页面尚未实现</div>
    <div class="subTitle">服务器无法完成请求，请尝试重新加载页面！</div>
    <div class="btn" @click="goToLogin">返回主页</div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Page501 extends Vue {
  goToLogin() {
    this.$router.push("/");
  }
}
</script>

<style scoped lang="less">
.box {
  width: 100vw;
  background: #fbfbfc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.main {
  width: 100%;
  height: 680px;
  display: flex;
  margin-top: 16px;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn {
  background: #ff0000;
  box-shadow: 0px 8px 28px -8px rgba(255, 0, 0, 0.8);
  border-radius: 4px;
  color: #fff;
  padding: 5px 15px;
  margin-top: 50px;
  font-size: 18px;
  cursor: pointer;
}
.title {
  font-size: 40px;
  font-weight: 600;
  color: #2d3033;
  line-height: 40px;
  margin: 90px 0 20px 0;
}
.subTitle {
  font-size: 20px;
  color: #8d9399;
  line-height: 24px;
}
</style>
