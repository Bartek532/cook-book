import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Hero = () => import("../views/Hero.vue");
const Recipes = () => import("../views/Recipes.vue");

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Hero },
  { path: "/recipes", component: Recipes },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
