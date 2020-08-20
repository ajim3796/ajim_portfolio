import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6d9db1f8 = () => interopDefault(import('../pages/category/_id.vue' /* webpackChunkName: "pages/category/_id" */))
const _ea867eb4 = () => interopDefault(import('../pages/search/_keyword.vue' /* webpackChunkName: "pages/search/_keyword" */))
const _4386983a = () => interopDefault(import('../pages/tag/_id.vue' /* webpackChunkName: "pages/tag/_id" */))
const _41dd9427 = () => interopDefault(import('../pages/work/_slug.vue' /* webpackChunkName: "pages/work/_slug" */))
const _ab6f97f2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/category/:id?",
    component: _6d9db1f8,
    name: "category-id"
  }, {
    path: "/search/:keyword?",
    component: _ea867eb4,
    name: "search-keyword"
  }, {
    path: "/tag/:id?",
    component: _4386983a,
    name: "tag-id"
  }, {
    path: "/work/:slug?",
    component: _41dd9427,
    name: "work-slug"
  }, {
    path: "/",
    component: _ab6f97f2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
