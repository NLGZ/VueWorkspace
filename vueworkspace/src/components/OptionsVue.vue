<template>
    <button onclick="clickVisible">버튼</button>
</template>
<script>
export default {
  data() { //여기에 화면에 뿌려줄 변수값을 미리 세팅.
    return {
      isVisi: true,
      isShow: true,
    };
  },
  methods: { //여기서 에로우함수 못씀, 일반함수 써야됨
    clickVisible() {
      this.isVisi = !this.isVisi;
    },
    clickShow() {
      this.Show = !this.Show;
    },
  },
};
</script>