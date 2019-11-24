import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Apple from "../views/Apple.vue";
import Instagram from "../views/Instagram.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/apple",
    name: "apple",
    component: Apple,
    meta: { layout: 'apple' },
  },
  {
    path: "/instagram",
    name: "instagram",
    component: Instagram,
    meta: { layout: 'instagram' },
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
