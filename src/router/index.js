import Vue from 'vue'
import VueRouter from 'vue-router'
import Storefront from '../views/CatalogView/Storefront.vue'
import AllProduct from '../views/CatalogView/AllProduct.vue'
import DetailProduct from '../views/CatalogView/DetailProduct.vue'
import Cart from '../views/CatalogView/Cart.vue'
import Checkout from '../views/CatalogView/Checkout.vue'
import CheckoutPembayaran from '../views/CatalogView/CheckoutPembayaran.vue'
import CheckoutKonfirmasi from '../views/CatalogView/CheckoutKonfirmasi.vue'
import OrderList from '../views/CatalogView/OrderList.vue'
import DetailInvoice from '../views/CatalogView/DetailInvoice.vue'
import Dashboard from '../views/ResellerArea/Dashboard.vue'
import SettingStore from '../views/ResellerArea/SettingStore.vue'
import SettingAkun from '../views/ResellerArea/SettingAkun.vue'
import SetGoals from '../views/ResellerArea/SetGoals.vue'
import IncomeReseller from '../views/ResellerArea/IncomeReseller.vue'
import Dzikir from '../views/CatalogView/Dzikir.vue'
import Penukaran from '../views/CatalogView/Penukaran.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Storefront',
    component: Storefront
  },
  {
    path: '/allproduct',
    name: 'AllProduct',
    component: AllProduct
  },
  {
    path: '/detailproduct',
    name: 'DetailProduct',
    component: DetailProduct
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/checkout/pembayaran',
    name: 'CheckoutPemabayaran',
    component: CheckoutPembayaran
  },
  {
    path: '/checkout/konfirmasi',
    name: 'CheckoutKonfirmasi',
    component: CheckoutKonfirmasi
  },
  {
    path: '/orderlist',
    name: 'OrderList',
    component: OrderList
  },
  {
    path: '/detailinvoice',
    name: 'DetailInvoice',
    component: DetailInvoice
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/settingstore',
    name: 'SettingStore',
    component: SettingStore
  },
  {
    path: '/settingakun',
    name: 'SettingAkun',
    component: SettingAkun
  },
  {
    path: '/setgoals',
    name: 'SetGoals',
    component: SetGoals 
  },
  {
    path: '/incomereseller',
    name: 'IncomeReseller',
    component: IncomeReseller 
  },
  {
    path: '/dzikir',
    name: 'Dzikir',
    component: Dzikir
  },
  {
    path: '/penukaran',
    name: 'Penukaran',
    component: Penukaran
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
