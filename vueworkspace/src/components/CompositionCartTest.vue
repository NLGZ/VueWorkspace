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
        <button class="btn" @click="decrease(index)">-</button>
        {{ item.quantity }}
        <button class="btn" @click="increase(index)">+</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// 상품 목록
const items = ref([]);

// 상품 입력값
const newItem = ref({
  name: "",
  price: 0,
  quantity: 0,
});

const addItem = () => {
    items.value.push({
        name: newItem.value.name,
        price: newItem.value.price,
        quantity: 1,
    });
};
// 갯수 추가
const increase = (index) => {
  items.value[index].quantity++;
};
//갯수 빼기
const decrease = (index) => {
    if (items.value[index].quantity === 0) {
        alert("음수는 안돼요");
        return; 
    }
    items.value[index].quantity--;
};

//총액 계산
const totalPrice = computed(() =>
  items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);


</script>

