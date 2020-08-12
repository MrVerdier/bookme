import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Test from "../views/Test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Login",
    name: "login",
    component: Login,
  },
  {
    path: "/Test",
    name: "test",
    component: Test,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
