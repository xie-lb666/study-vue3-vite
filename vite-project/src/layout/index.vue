<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo"></div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        @click="goPage"
      >
        <a-sub-menu :key="item.path" v-for="(item, i) in navList">
          <template #icon>
            <MailOutlined />
          </template>
          <template #title>{{item.name}}</template>
          <a-menu-item :key="v.path" v-for="(v) in item.children">{{v.name}}</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff" class="flex-center-between">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <a-dropdown-button style="flot: right">
          <template #overlay>
            <a-menu @click="handleMenuClick">
              <a-menu-item key="1">
                <UserOutlined />
                1st menu item
              </a-menu-item>
              <a-menu-item key="2">
                <UserOutlined />
                2nd menu item
              </a-menu-item>
              <a-menu-item key="3">
                <UserOutlined />
                3rd item
              </a-menu-item>
            </a-menu>
          </template>
          <template #icon><UserOutlined /></template>
        </a-dropdown-button>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view></router-view>
        <!-- <AppMain></AppMain> -->
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
console.log(store.state.app.routerList);

const navList = store.state.app.routerList;

const selectedKeys = ref(["/user/home"]);

const collapsed = ref(false);
const show = () => {
  collapsed = !collapsed;
};

const handleMenuClick = (e) => {};

const goPage = (item) => {
  router.push({ path: item.key });
};
</script>

<style lang="scss" scoped>
.layout {
  height: 80vh;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
.logo {
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
