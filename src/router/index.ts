import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AppHome from "../views/appHome.vue";

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  {
    path: "/app-home",
    name: "AppHome",
    component: AppHome,
  },
  {
    path: "/app-about",
    name: "AppAbout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/appAbout.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
