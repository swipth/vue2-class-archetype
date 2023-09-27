<!--
 * @Author: swipth
 * @Description:管理端布局
-->
<template>
  <div class="container">
    <a-layout class="components-layout-demo-custom-trigger h100">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible theme="light">
        <div class="logo">
          <img v-if="!collapsed" src="./../../assets/images/logo/logo_admin.png" />
          <img v-else src="./../../assets/images/logo/logo.png" width="50" height="50" />
        </div>
        <a-menu theme="light" mode="inline" :selectedKeys="selectedKeys" @click="menuClick">
          <a-menu-item key="/workbench">
            <a-icon type="video-camera" />
            <span>工作台</span>
          </a-menu-item>
          <a-menu-item key="/banner">
            <a-icon type="wechat" />
            <span>Banner</span>
          </a-menu-item>
          <a-menu-item key="/award">
            <a-icon type="wechat" />
            <span>奖项</span>
          </a-menu-item>
          <a-menu-item key="/history">
            <a-icon type="wechat" />
            <span>发展历程</span>
          </a-menu-item>
          <a-menu-item key="/business">
            <a-icon type="message" />
            <span>Business</span>
          </a-menu-item>
          <a-menu-item key="/managementTeam">
            <a-icon type="message" />
            <span>ManagementTeam</span>
          </a-menu-item>
          <a-menu-item key="/globalLayout">
            <a-icon type="profile" />
            <span>GlobalLayout</span>
          </a-menu-item>
          <a-menu-item key="/news">
            <a-icon type="mail" />
            <span>News</span>
          </a-menu-item>
          <a-menu-item key="/customer">
            <a-icon type="upload" />
            <span>Customer</span>
          </a-menu-item>
          <a-menu-item key="/resourceCenter">
            <a-icon type="user" />
            <span>ResourceCenter</span>
          </a-menu-item>
          <a-menu-item key="/user">
            <a-icon type="user" />
            <span>用户管理</span>
          </a-menu-item>
          <a-menu-item key="/department">
            <a-icon type="user" />
            <span>部门管理</span>
          </a-menu-item>
          <a-menu-item key="/role">
            <a-icon type="user" />
            <span>角色管理</span>
          </a-menu-item>
          <a-menu-item key="/dictionaryType">
            <a-icon type="user" />
            <span>数据字典分类管理</span>
          </a-menu-item>
          <a-menu-item key="/dictionary">
            <a-icon type="user" />
            <span>数据字典管理</span>
          </a-menu-item>
          <a-menu-item key="/menu">
            <a-icon type="user" />
            <span>菜单管理</span>
          </a-menu-item>
          <a-menu-item key="/button">
            <a-icon type="user" />
            <span>按钮管理</span>
          </a-menu-item>
          <a-menu-item key="/suggestion">
            <a-icon type="user" />
            <span>平台反馈</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #3f4c93; padding: 0; position: relative">
          <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
          <a-dropdown class="userClass">
            <a class="ant-dropdown-link userNameClass" @click="(e) => e.preventDefault()"
              ><img src="https://bp.pharmablock.com/resources/avatar.png" alt="" /> 管理员
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item key="1">
                <a-icon type="interaction" />
                刷新权限
              </a-menu-item>
              <a-menu-item key="2">
                <a-icon type="logout" />
                退出登录
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-layout-header>
        <a-layout-content :style="{ margin: '10px', padding: '5px', background: '#fff', minHeight: '280px', maxHeight: '845px', overflowY: 'auto' }">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component } from "vue-property-decorator";
@Component({
  name: "AdminLayout",
})
export default class Layout extends Vue {
  collapsed = false;
  selectedKeys: string[] = [];


  menuClick(item: { key: string }) {
    this.$router.push(item.key);
  }

  @Watch("$route", { immediate: true })
  routeChange(val: any) {
    this.selectedKeys = [val.path];
  }

}
</script>

<style scoped lang="less">
.container {
  min-height: 100vh;
}

.components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  color: #fff;
}

.components-layout-demo-custom-trigger .logo {
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  margin: 5px 0;
  display: flex;
  justify-content: center;
}

.h100 {
  min-height: 100vh;
}

.ant-dropdown-link {
  color: #fff;
}

.userClass {
  position: absolute;
  right: 20px;
}

.userNameClass {
  font-size: 16px;

  img {
    margin-right: 5px;
    width: 30px;
    height: 30px;
  }
}
</style>
