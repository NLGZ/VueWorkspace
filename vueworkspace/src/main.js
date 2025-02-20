import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css';
import router from './router/vueRouter.js';

const app = createApp(App); // ✅ 'app'을 먼저 선언
app.use(router);
app.mount('#app');  // ✅ 이제 'app'을 사용할 수 있음.
