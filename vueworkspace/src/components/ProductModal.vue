<template>
  <div v-if="modalCheck" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
    <div class="bg-white w-[550px] rounded-lg p-6 shadow-lg">
      
      <!-- 모달 내용 -->
      <div class="text-center text-gray-800">
        <h2 class="text-xl font-bold">상품 수정</h2>

        <div class="mt-4">
          <label class="block">상품명</label>
          <input v-model="editItem.name" type="text" class="border rounded p-2 w-full" />

          <label class="block mt-2">가격</label>
          <input v-model.number="editItem.price" type="number" class="border rounded p-2 w-full" />

          <label class="block mt-2">수량</label>
          <input v-model.number="editItem.quantity" type="number" class="border rounded p-2 w-full" />
        </div>
      </div>

      <!-- 버튼 그룹 -->
      <div class="flex justify-end gap-4 mt-6">
        <button @click="closeModal" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
          닫기
        </button>
        <button @click="saveChanges" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          저장
        </button>
        <button @click="deleteItem" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          삭제
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps(["modalCheck", "selectedItem"]);
const emit = defineEmits(["updateItem", "deleteItem", "close"]);

const editItem = ref({ ...props.selectedItem });

// 선택된 아이템이 변경될 때 업데이트
watch(() => props.selectedItem, (newVal) => {
  editItem.value = { ...newVal };
}, { deep: true });

const saveChanges = () => {
  emit("updateItem", editItem.value);
  emit("close");
};

const deleteItem = () => {
  emit("deleteItem", editItem.value);
  emit("close");
};

const closeModal = () => {
  emit("close");
};
</script>
