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
    <div v-for="(item, index) in items" :key="index" class="item-box">
      <div>
        <strong>{{ item.name }}</strong> : {{ item.price}}원
        <span> 수량 </span>
        <button class="btn" @click="decreaseQty(index)">-</button>
        {{ item.quantity }}
        <button class="btn" @click="increaseQty(index)">+</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// 상품 목록
const items = ref([]);

// 새 상품 입력값
const newItem = ref({
  name: "",
  price: 0,
});

// 상품 추가 함수
const addItem = () => {
 
  items.value.push({
    name: newItem.value.name,
    price: newItem.value.price,
    quantity: 1,
  });

//   // 입력값 초기화
//   newItem.value.name = "";
//   newItem.value.price = 0;
};

// 수량 증가
const increaseQty = (index) => {
  items.value[index].quantity++;
};

// 수량 감소
const decreaseQty = (index) => {
  if (items.value[index].quantity > 1) {
    items.value[index].quantity--;
  }
};

// 총 금액 계산
const totalPrice = computed(() =>
  items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
</script>

<style scoped>
/* 스타일 추가 */
.item-box {
  border: 2px solid black;
  padding: 10px;
  margin: 10px 0;
  text-align: center;
  font-size: 18px;
}

.btn {
  background-color: lightgreen;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 16px;
  cursor: pointer;
}
</style>
