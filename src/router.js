import Vue from "vue";
import VueRouter from "vue-router";
// import store from "./store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/therapy",
      name: "therapy",
      component: () => import("./views/Therapists.vue"),
    },

    {
      path: "/emergency",
      name: "emergency",
      component: () => import("./views/Emergency.vue"),
      meta: {
        requiresAuth: false,
      },
    },
  ],
});

/*
router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    let user = store.state.user;
    if (user) {
      if (to.name == "profile") {
        next();
      } else {
        if (user.role) {
          next();
        } else {
          next({
            name: "profile"
          });
        }
      }
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.isAdmin)) {
    let user = store.state.user;
    if (user) {
      if (user.role == "Admin") {
        next();
      } else {
        next({
          name: "profile"
        });
      }
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.isSuperUser)) {
    let user = store.state.user;
    if (user) {
      if (user.role == "SuperUser") {
        next();
      } else {
        next({
          name: "home"
        });
      }
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});*/

export default router;
