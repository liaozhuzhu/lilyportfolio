import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _067c70e9 = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _a4925448 = () => interopDefault(import('../pages/Explore.vue' /* webpackChunkName: "pages/Explore" */))
const _be45e934 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "pages/Home" */))
const _0ea3e9f2 = () => interopDefault(import('../pages/Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _ceb052ba = () => interopDefault(import('../pages/Recommendations.vue' /* webpackChunkName: "pages/Recommendations" */))
const _c1deabbc = () => interopDefault(import('../pages/Reels.vue' /* webpackChunkName: "pages/Reels" */))
const _578f84fb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Contact",
    component: _067c70e9,
    name: "Contact"
  }, {
    path: "/Explore",
    component: _a4925448,
    name: "Explore"
  }, {
    path: "/Home",
    component: _be45e934,
    name: "Home"
  }, {
    path: "/Profile",
    component: _0ea3e9f2,
    name: "Profile"
  }, {
    path: "/Recommendations",
    component: _ceb052ba,
    name: "Recommendations"
  }, {
    path: "/Reels",
    component: _c1deabbc,
    name: "Reels"
  }, {
    path: "/",
    component: _578f84fb,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
