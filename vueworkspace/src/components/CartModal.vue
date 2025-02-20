<template>
      <div v-show="modalCheck" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div class="bg-white w-[550px] rounded-lg p-6 shadow-lg">
        
        <!-- 모달 내용 -->
        <div class="text-center text-gray-800">
          <h2 class="text-xl font-bold">모달 제목</h2>
          <p class="mt-4">여기에 모달 내용을 추가하세요.</p>
        </div>

        <!-- 버튼 그룹 -->
        <div class="flex justify-end gap-4 mt-6">
          <button @click="modalOpen" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
            닫기
          </button>
          <button @click="modalOpen" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            확인
          </button>
        </div>

      </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

const modalCheck = ref(false); // 반응형 변수

const modalOpen = () => {
  modalCheck.value = !modalCheck.value; // 값 변경 시 `.value` 사용
};
</script>