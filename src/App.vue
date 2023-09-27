<template>
  <a-config-provider :locale="locale" :autoInsertSpaceInButton="false">
    <div :class="{ ow_content: inner }">
      <router-view />
    </div>
  </a-config-provider>
</template>
<script lang="ts">
// @ts-ignore
import en from "ant-design-vue/lib/locale-provider/en_US";
// @ts-ignore
import zhCN from "ant-design-vue/es/locale/zh_CN";
import {Vue, Component} from "vue-property-decorator";
import {getLanguage} from "@/utils/clientStorage";

const lang = getLanguage();
@Component({
  name: "AdminLayout",
  watch: {
    // 在 vue2-sub 路由下主动告知主应用路由跳转，主应用也跳到相应路由高亮菜单栏
    $route() {
      // @ts-ignore
      window.$wujie?.bus.$emit("sub-route-change", "{{key}}", this.$route.path);
    },
  },
})
export default class Layout extends Vue {
  get locale() {
    return lang === "zh" ? zhCN : en;
  }
  get inner() {
    // @ts-ignore
    return window.__POWERED_BY_WUJIE__;
  }
}
</script>
<style lang="less" scoped>
.ow_content {
  padding: 5px;
  background: #fff;
}
</style>
