<template>
  <header class="header">

    <div class="button-container">
      <router-link to="/root1">
        <button class="nav-button">화면1</button>
      </router-link>
      <router-link to="/root2">
        <button class="nav-button">화면2</button>
      </router-link>
      <router-link to="/root3">
        <button class="nav-button">화면3</button>
      </router-link>
    </div>
  </header>
</template>

<style>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  padding: 15px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
}

.nav-link {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
  font-size: 16px;
}

.nav-link:hover {
  color: #42b983;
}

.button-container {
  display: flex;
  gap: 10px;
}

.nav-button {
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 5px;
}

.nav-button:hover {
  background-color: #369b73;
}
</style>
