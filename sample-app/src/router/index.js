import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Addresses from '../views/Boardgamelist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/boardgamelist",
    name: "boardgamelist",
    component: Addresses
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/capture-page",
    name: "capture-page",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "capture" */ "../views/CapturePage.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
