<template>
  <div>
    <div class="mt-12">자식 뷰</div>
    <div>부모한테 받은 값 : {{ name }}</div>

    <div><button @click="parentDataBtn">자식버튼</button></div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// const props = defineProps({
//     name : String,
//     id : String
// })

defineProps(["name"]);

const emit = defineEmits(["data1"]);

const parentDataBtn = () => {
  emit("data1", 2222222222);
};
</script>
