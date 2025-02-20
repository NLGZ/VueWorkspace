<template>
  <div>
    <h2>게시판 목록</h2>
    <table v-if="boardList.length" class="board-table">
      <thead>
        <tr>
          <th>#</th>
          <th>제목</th>
          <th>작성자</th>
          <th>조회수</th>
          <th>등록 날짜</th>
        </tr>
      </thead>
      <tbody>
<tr v-for="item in boardList" :key="item.seq">  <!-- ✅ index 제거 -->
          <td>{{ item.seq }}</td>
          <td>{{ item.boardSubject || "제목 없음" }}</td>
          <td>{{ item.memName || "익명" }}</td>
          <td>{{ item.viewCnt || 0 }}</td>
          <td>{{ formatDate(item.regDate) }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>게시글이 없습니다.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const boardList = ref([]); // 데이터를 저장할 변수

const fetchBoardList = async () => {
  try {
    const response = await fetch("http://localhost:8080/board"); // JSON 데이터 요청
    const data = await response.json();
    boardList.value = data; // JSON 데이터를 boardList에 저장
    console.log(boardList.value);
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
  }
};

// 날짜 변환 함수 (밀리초 → YYYY-MM-DD HH:MM:SS 형식)
const formatDate = (timestamp) => {
  if (!timestamp) return "-";
  const date = new Date(timestamp);
  return date.toISOString().replace("T", " ").split(".")[0]; // YYYY-MM-DD HH:MM:SS 형식
};

// 컴포넌트가 마운트될 때 데이터 불러오기
onMounted(fetchBoardList);
</script>

<style>
.board-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.board-table th, .board-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.board-table th {
  background-color: #42b983;
  color: white;
}
</style>
