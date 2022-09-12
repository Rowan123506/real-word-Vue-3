import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import EventDetails from "../views/event/Details.vue";
import EventEdit from "../views/event/Edit.vue";
import EventRegister from "../views/event/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/event/:id",
      name: "EventDetails",
      component: EventDetails,
      props: true,
    },
    {
      path: "/event/:id/edit",
      name: "EventEdit",
      component: EventEdit,
      props: true,
    },
    {
      path: "/event/:id/register",
      name: "EventRegister",
      component: EventRegister,
      props: true,
    },
  ],
});

export default router;
