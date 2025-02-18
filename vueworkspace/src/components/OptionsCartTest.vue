<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
    <!-- 상품 추가 입력 -->
    <div class="space-y-2">
      <label class="block text-gray-700 font-semibold">상품</label>
      <input v-model="newItem.name" type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="상품 이름" />
      <label class="block text-gray-700 font-semibold">가격</label>
      <input v-model.number="newItem.price" type="number" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="가격" />
      <button @click="addItem" class="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">추가</button>
    </div>

    <!-- 총 금액 -->
    <h3 class="text-xl font-bold text-gray-800 text-center">총 금액 : {{ totalPrice }} 원</h3>

    <!-- 상품 목록 -->
    <div v-for="(item, index) in items" :key="index" class="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <strong class="text-lg text-gray-900">{{ item.name }}</strong>
        <span class="text-gray-600"> - {{ item.price }}원</span>
      </div>
      <div class="flex items-center space-x-2">
        <button @click="decrease(index)" class="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">-</button>
        <span class="text-gray-900 font-semibold">{{ item.quantity }}</span>
        <button @click="increase(index)" class="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      newItem: {
        name: "",
        price: 0,
        quantity: 0,
      },
    };
  },
  methods: {
    addItem() {
      if (!this.newItem.name || this.newItem.price <= 0) {
        alert("상품명과 가격을 올바르게 입력해주세요.");
        return;
      }
      this.items.push({
        name: this.newItem.name,
        price: this.newItem.price,
        quantity: 1,
      });

      // 입력값 초기화
      this.newItem.name = "";
      this.newItem.price = 0;
    },
    increase(index) {
      this.items[index].quantity++;
    },
    decrease(index) {
      if (this.items[index].quantity === 1) {
        this.items.splice(index, 1);
      } else {
        this.items[index].quantity--;
      }
    },
  },
  computed: {
    totalPrice() {
      return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  },
};
</script>

<style>
body {
  background-color: #f3f4f6;
  font-family: Arial, sans-serif;
}
</style>
