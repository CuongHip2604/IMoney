import { projectAuth } from "@/configs/firebase";
import { createRouter, createWebHistory } from "vue-router";

const requiredAuth = (to, from, next) => {
  const user = projectAuth.currentUser;

  if (user) {
    next();
  } else {
    next("/login");
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    beforeEnter: requiredAuth,
    meta: {
      leading: true,
      text: "Hey, Sky Albert",
      showNavigateBottom: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
    beforeEnter: requiredAuth,
    meta: {
      leading: false,
      text: "Profile",
      showNavigateBottom: true,
    },
  },
  {
    path: "/report",
    name: "Report",
    component: () =>
      import(/* webpackChunkName: "Report" */ "../views/Report.vue"),
    beforeEnter: requiredAuth,
    meta: {
      leading: false,
      text: "Report",
      showNavigateBottom: true,
    },
  },
  {
    path: "/budget",
    name: "Budget",
    component: () =>
      import(/* webpackChunkName: "budget" */ "../views/Budget.vue"),
    beforeEnter: requiredAuth,
    meta: {
      showNavigateBottom: true,
      leading: false,
      text: "Budget",
    },
  },
  {
    path: "/create-transaction",
    name: "CreateTransaction",
    component: () =>
      import(
        /* webpackChunkName: "transaction" */ "../views/CreateTransaction.vue"
      ),
    beforeEnter: requiredAuth,
    meta: {
      showNavigateBottom: false,
      leading: false,
      text: "New Transaction",
    },
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/Logout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
