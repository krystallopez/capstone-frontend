import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from "../views/SignUpView.vue";
import LogInView from "../views/LogInView.vue";
import LogoutView from "../views/LogoutView.vue";
import ProductsIndex from "../views/ProductsIndex.vue";
import ProductsShow from "../views/ProductsShow.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/signup",
    name: "signup",
    component: SignUpView,
  },

  {
    path: "/login",
    name: "login",
    component: LogInView,
  },

  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },

  {
    path: "/products",
    name: "products-index",
    component: ProductsIndex,
  },

  {
    path: "/products/:id",
    name: "products-show",
    component: ProductsShow,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
