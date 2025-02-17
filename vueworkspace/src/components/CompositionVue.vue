<template>
<div>
  <div>
    <h1>컴포지션 방식</h1>
  </div>

  <div>
    <button @click="showClick">쇼클릭</button>
  </div>

  <div>
    <button @click="ifClick">조건클릭</button>
  </div>

  <div>
    <button @click="showModel">모델버튼</button>
  </div>

  <div>
    <button @click="bindClick">바인드버튼</button>
  </div>

  <!-- v-if와 v-else는 반드시 연속해서 사용해야 함 -->
  <div v-if="ifData">v-if 실행 되었을때</div>
  <div v-else>v-else 실행 되었을때</div>

  <!-- showData를 이용하여 태그 숨김/보임 -->
  <div v-show="showData">쇼체크</div>

  <div>
    <input type="text" v-model="modelData" />
  </div>

  <div>
    <input type="checkbox" v-model="bindData" />
    <!-- 체크박스와 v-model 바인딩 -->
  </div>

  <div>
    <span :style="spanStyle">테스트 데이터</span>
  </div>
  <div>
    
  </div>
  <div style="text-align: center;">
    <table border="1" style="margin: auto;">
      <tr>
        <td v-for="(item, index) in forData" :key="index">
          {{ item }}
        </td>
      </tr>
    </table>
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const ifData = ref(true); // v-if / v-else 컨트롤
const showData = ref(true); // v-show 컨트롤
const modelData = ref("으아아아아아아"); // v-model 데이터
const bindData = ref(true); // 체크박스 데이터 바인딩
const spanStyle = ref({ color: "black", fontSize: "16px" }); // 스타일 바인딩용
const forData = ref(["혼다", "야마하", "가와사키", "스즈키", "베넬리", "CFMOTO"]);

const bindClick = () => {
  spanStyle.value = {
    color: "red",
    fontSize: "50px", 
    fontWeight: "bold"
  };
};

const ifClick = () => {
  ifData.value = !ifData.value; // 값 반전
};

const showClick = () => {
  showData.value = !showData.value; // 값 반전
};

const showModel = () => {
  alert(modelData.value);
};
</script>
