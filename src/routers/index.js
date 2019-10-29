import Vue from "vue";
import Router from "vue-router";
import Layout from "@/pages/layout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "layout",
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import('@/pages/home'),
        }
      ]
    }, {
      path: "/login",
      name: "login",
      component: () => import('@/pages/login'),
    }
  ]
});
