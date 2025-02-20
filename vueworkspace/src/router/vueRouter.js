import { createRouter, createWebHistory } from "vue-router";
import ViewOne from "@/components/ViewOne.vue";
import ViewTwo from "@/components/ViewTwo.vue";
import ViewThree from "@/components/ViewThree.vue";
import BoardList from '@/components/BoardList.vue';


const routes = [
//   { path: "/", component: Home },
  { path: "/root1", component: ViewOne },
  { path: "/root2", component: ViewTwo },
  { path: "/root3", component: ViewThree },
  { path: '/board', component: BoardList },  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
