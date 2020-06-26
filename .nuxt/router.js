import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _03e2631a = () => interopDefault(import('..\\pages\\category\\_id.vue' /* webpackChunkName: "pages_category__id" */))
const _9d8829aa = () => interopDefault(import('..\\pages\\search\\_keyword.vue' /* webpackChunkName: "pages_search__keyword" */))
const _244ae839 = () => interopDefault(import('..\\pages\\tag\\_id.vue' /* webpackChunkName: "pages_tag__id" */))
const _80c590e0 = () => interopDefault(import('..\\pages\\work\\_slug.vue' /* webpackChunkName: "pages_work__slug" */))
const _0090f96e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _03e2631a,
    name: "category-id"
  }, {
    path: "/search/:keyword?",
    component: _9d8829aa,
    name: "search-keyword"
  }, {
    path: "/tag/:id?",
    component: _244ae839,
    name: "tag-id"
  }, {
    path: "/work/:slug?",
    component: _80c590e0,
    name: "work-slug"
  }, {
    path: "/",
    component: _0090f96e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
