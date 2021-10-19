import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BuscarProfesional from "../views/BuscarProfesional.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/buscar-profesional",
    name: "BuscarProfesional",
    component: BuscarProfesional,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
