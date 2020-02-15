import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Apple from "../views/Apple.vue";
import Instagram from "../views/Instagram.vue";
import InstagramFeed from "../views/InstagramFeed.vue";
import Mammut from "../views/Mammut.vue";
import MammutMen from "../views/MammutMen.vue";
import MammutWomen from "../views/MammutWomen.vue";
import MammutKids from "../views/MammutKids.vue";

Vue.use(VueRouter);

const routes = [
  {
    // this is the root of the web app
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
  },
  {
    path: "/instagramFeed",
    name: "instagramFeed",
    component: InstagramFeed,
    meta: { layout: 'instagram', authentication: true },
  },
  {
    path: "/mammut",
    name: "mammut",
    component: Mammut,
    meta: { layout: 'mammut' },
    children: [
      {
        path: "men",
        name: "mammutMen",
        component: MammutMen,
        meta: { layout: 'mammut' },
      },
      // here insert women view
      {
        path: "kids",
        name: "mammutKids",
        component: MammutKids,
        meta: { layout: 'mammut' },
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
