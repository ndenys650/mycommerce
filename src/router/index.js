import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import StoreHome from '@/components/Store/StoreHome'
import ProductPage from '@/components/Store/ProductPage'
import Cart from '@/components/Cart/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/store',
      name: 'Store',
      component: StoreHome
    },
    {
      path: '/store/:slug',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
