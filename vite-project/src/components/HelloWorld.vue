<script setup>
import { ref, defineProps, defineEmits, defineExpose } from "vue";

// 接收属性 defineProps  ===》props
const props = defineProps({
  msg: String,
});
// 派发事件  defineEmits   ===》emit
const emit = defineEmits(["myclick"]);
const onclick = () => {
  emit("myclick");
};
// console.log(this); // undefined
const someMethods = () => {
  console.log("哈哈哈哈");
};

// 将组件暴露出去
defineExpose({
  someMethods,
});
const count = ref(0);
</script>

<template>
  <div>
    <a>{{ msg }}</a>
    <button type="button" @click="count++">count is: {{ count }}</button>

    <el-button type="button" @click="onclick">count is: {{ count }}</el-button>
  </div>
</template>

<style scoped>
</style>
