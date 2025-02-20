<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">
    <Header />
    <router-view /> 
  <!-- <compositionVue /> -->
  <CompositionCartTest />
  <!-- <OptionsCartTest /> -->
  <!-- <ParentView /> -->
   <BoardList /> 
  <ModalComponent />
  
  </div>
</template>

<script setup>
// import CompositionVue from './components/CompositionVue.vue'
import CompositionCartTest from './components/CompositionCartTest.vue'
// import OptionsCartTest from './components/OptionsCartTest.vue'
// import liveTest from './components/LifecycleExample.vue'
  // import ParentView  from "./components/ParentView.vue";
  // import ModalComponent from "./components/ModalComponent.vue";
import Header from "./components/HeaderApp.vue";
import BoardList from "./components/BoardList.vue"; // ✅ 추가



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
