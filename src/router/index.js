import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home'
import CheckLogin from '@/views/CheckLogin'
import { isNil } from 'lodash'
import store from '@/store'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/check-login',
      name: 'check-login',
      component: CheckLogin,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "client-chunk-login" */ '@/views/Login.vue'),
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/products',
      name: 'products',
      component: () =>
        import(/* webpackChunkName: "client-chunk-products" */ '@/views/Products.vue')
    },
    {
      path: '/products/:id',
      name: 'product',
      props: true,
      component: () =>
        import(/* webpackChunkName: "client-chunk-product-details" */ '@/views/Product.vue')
    },
    {
      path: '/species',
      name: 'species',
      component: () =>
        import(/* webpackChunkName: "client-chunk-products" */ '@/views/Species.vue')
    },
    {
      path: '/species/:id',
      name: 'specie',
      props: true,
      component: () =>
        import(/* webpackChunkName: "client-chunk-product-details" */ '@/views/Specie.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () =>
        import(/* webpackChunkName: "client-chunk-products" */ '@/views/News.vue')
    },
    {
      path: '/news/:id',
      name: 'post',
      props: true,
      component: () =>
        import(/* webpackChunkName: "client-chunk-product-details" */ '@/views/Post.vue')
    },
    { path: '*', redirect: '/home' }
  ]
})

/**
 * Handle user redirections
 */
// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  if (
    !(to.meta && to.meta.authNotRequired) &&
    isNil(store.state.authentication.user)
  ) {
    const path =
      store.state.authentication.user === null ? '/login' : '/check-login'
    return next(`${path}?redirectUrl=${to.path}`)
  }
  next()
})

export default router
