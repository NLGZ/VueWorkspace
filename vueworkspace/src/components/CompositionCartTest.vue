<template>
  <div>
    <!-- 상품 추가 입력 -->
    <div>
      <label>상품</label>
      <input v-model="newItem.name" type="text" />
      <label>가격</label>
      <input v-model.number="newItem.price" type="number" />
      <button @click="addItem">추가</button>
    </div>

    <!-- 총 금액 -->
    <h3>총 금액 : {{ totalPrice }} 원</h3>

    <!-- 상품 목록 -->
    <div v-for="(item, index) in items" :key="index" class="item-box" @click="openModal(item, index)">
      <div class="mt-3 py-12 px-12 bg-blue-300">
        <strong>{{ item.name }}</strong> : {{ item.price }}원
        <span> 수량 </span>
        <button class="btn" @click.stop="decrease(index)">-</button>
        {{ item.quantity }}
        <button class="btn" @click.stop="increase(index)">+</button>
      </div>
    </div>

    <!-- 모달 컴포넌트 -->
    <ProductModal 
      :modalCheck="modalCheck" 
      :selectedItem="selectedItem"
      @updateItem="updateItem"
      @deleteItem="deleteItem"
      @close="modalCheck = false"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ProductModal from "./ProductModal.vue";

// 모달 상태 및 선택된 상품 정보
const modalCheck = ref(false);
const selectedItem = ref({});
const selectedIndex = ref(null);

// 상품 목록
const items = ref([]);

// 상품 입력값
const newItem = ref({
  name: "",
  price: 0,
  quantity: 1,
});

// 상품 추가
const addItem = () => {
  items.value.push({ ...newItem.value });
};

// 모달 열기 (클릭한 상품 정보 저장)
const openModal = (item, index) => {
  selectedItem.value = { ...item };
  selectedIndex.value = index;
  modalCheck.value = true;
};

// 상품 수정
const updateItem = (updatedItem) => {
  if (selectedIndex.value !== null) {
    items.value[selectedIndex.value] = { ...updatedItem };
  }
};

// 상품 삭제
const deleteItem = () => {
  if (selectedIndex.value !== null) {
    items.value.splice(selectedIndex.value, 1);
  }
};

// 갯수 추가
const increase = (index) => {
  items.value[index].quantity++;
};

// 갯수 빼기
const decrease = (index) => {
  if (items.value[index].quantity > 0) {
    items.value[index].quantity--;
  } else {
    alert("음수는 안돼요");
  }
};

// 총액 계산
const totalPrice = computed(() =>
  items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
</script>
