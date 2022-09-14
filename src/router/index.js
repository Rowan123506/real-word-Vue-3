import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import EventDetails from "../views/event/Details.vue";
import EventEdit from "../views/event/Edit.vue";
import EventRegister from "../views/event/Register.vue";
import EventLayout from "../views/event/Layout.vue";
import NotFound from "../views/event/NotFound.vue";
import NProgress from 'nprogress'

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
      name: "EventLayout",
      props: true,
      component: EventLayout,
      children: [
        // <-----
        {
          path: "",
          name: "EventDetails",
          component: EventDetails,
        },
        {
          path: "register",
          name: "EventRegister",
          component: EventRegister,
        },
        {
          path: "edit",
          name: "EventEdit",
          component: EventEdit,
        },
      ],
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "/404/:resource",
      name: "404Resource",
      component: NotFound,
      props:true
    },
  ],
});


router.beforeEach(()=>{
  NProgress.start()
})

router.afterEach(()=>{
  NProgress.done()
})


export default router;
