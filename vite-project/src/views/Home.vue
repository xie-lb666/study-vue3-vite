<template>
  <div>
    主要内容
    <!-- <JsxComVue /> -->
    <!-- <HelloWorld :msg="'哈哈哈'" @myclick="onmyclick" ref="hw" /> -->
  </div>
</template>

<script setup>
//1.直接导入组件
import HelloWorld from "@/components/HelloWorld.vue";
import JsxComVue from "@/components/JsxCom.vue";
import { reactive, defineProps, ref } from "vue";
const hw = ref(null);
const onmyclick = () => {
  hw.value.someMethods();
};
</script>

<style lang="scss" scoped></style>
