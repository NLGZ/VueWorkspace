<template>
  <div>
    <div><button @click="testBtn">버튼</button></div>

    <div>부모 값:::::::::::::{{ parentData }}</div>
    <div>
      <ChildView :name="name" @data1="dataBtn" />
    </div>
  </div>
</template>

<script setup>
import {
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onUnmounted,
  onMounted,
  onUpdated,
  ref,
} from "vue";
import ChildView from "./ChildView.vue";

const name = ref("");
const aaa = ref("");
const parentData = ref("");

const testBtn = () => {
  name.value = "1111111111";
  aaa.value = "aaaaaaaaaaaaaaaaa";
};

const dataBtn = (val) => {
  parentData.value = val;
};

onBeforeMount(() => {
  console.log("beforMount:::::::::::::::::::::");
});

onMounted(() => {
  console.log("onMount:::::::::::::::::::::");
});

onBeforeUpdate(() => {
  console.log("berfor Update:::::::::::::::::::");
});

onUpdated(() => {
  console.log("Update:::::::::::::::::::");
});

onBeforeUnmount(() => {
  console.log("berfor Unmount:::::::::::::::::::");
});

onUnmounted(() => {
  console.log("Unmount:::::::::::::::::::");
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
