import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CoursesView from "../views/CoursesView.vue";
import LoginView from "../views/Auth/LoginView.vue";
import DashboardView from "../views/Dashboard/DashboardView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/courses",
    name: "courses",
    component: CoursesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("router.beforeEach, to", to);
  const token = localStorage.getItem("user_token");

  // prevet access to any page if not logged in
  if (!token && to.name !== "login") {
    next({ name: "login" }); // redirect to login
    return;
  }
  next();
});

export default router;
