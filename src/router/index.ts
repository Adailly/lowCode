import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import home from "../pages/home/index.vue";
import Layout from "../pages/layout/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
