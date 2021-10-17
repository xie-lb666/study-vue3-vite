<template>
  <div><a-button type="primary" @click="toLogin">登录</a-button></div>
</template>

<script setup>
import { login } from "../../apis/test";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const toLogin = () => {
  login({ name: "admin", password: "123456" })
    .then((result) => {
      if (result.status === 200) {
        store.commit("user/SETTOKNE", result.token);
        store.commit("user/SETROLE", result.role);
        store.commit("user/SETUSERINFO", result.data);
        router.push({
          path: "/",
        });
      }
      // {
      //       status: 200,
      //       data: {
      //           name: 'admin',
      //           password: '123456',
      //           role: 'admin'
      //       },
      //       token: token,
      //       role: 'admin'
      //   }
    })
    .catch((err) => {
      console.log(err);
    });
  //   登录，可提交一个异步dispatch
  //   或者取到信息传给store保存 token，role，userinfo，
};
</script>

<style lang="scss" scoped></style>
