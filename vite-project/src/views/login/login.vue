<template>
  <div><a-button type="primary" @click="toLogin">登录</a-button></div>
</template>

<script setup>
import { login } from "../../apis/test";
const toLogin = () => {
  login({})
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style lang="scss" scoped></style>
