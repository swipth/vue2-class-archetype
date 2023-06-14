<!--
 * @Author: swipth
 * @Description:公司业务
-->
<template>
  <div>
    Business
    <router-link to="/business/2">详情页</router-link>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";

@Component({
  name: "Business"
})
export default class Business extends Vue {
}
</script>

<style scoped lang="less">

</style>
