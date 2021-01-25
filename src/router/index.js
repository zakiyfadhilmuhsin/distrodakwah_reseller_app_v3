import Vue from 'vue'
import VueRouter from 'vue-router'
import Storefront from '../views/CatalogView/Storefront.vue'
import AllProduct from '../views/CatalogView/AllProduct.vue'
import DetailProduct from '../views/CatalogView/DetailProduct.vue'
import Cart from '../views/CatalogView/Cart.vue'
import CheckoutPengiriman from '../views/CatalogView/CheckoutPengiriman.vue'
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
import Refund from '../views/CatalogView/Refund.vue'
import Retur from '../views/CatalogView/Retur.vue'
import DzikirPetang from '../components/Dzikir/DzikirPetang.vue'
import Pesanan from '../views/StatusPengiriman/Pesanan.vue'
import Dikemas from '../views/StatusPengiriman/Dikemas.vue'
import Dikirim from '../views/StatusPengiriman/Dikirim.vue'
import StatusRetur from '../views/StatusPengiriman/StatusRetur.vue'
import Selesai from '../views/StatusPengiriman/Selesai.vue'
import Login from '../views/CatalogView/Login.vue'
import PencairanDana from '../views/ResellerArea/PencairanDana/PencairanDana.vue'
import AjukanPencairan from '../views/ResellerArea/PencairanDana/AjukanPencairan.vue'
import KonfirmasiPencairan from '../views/ResellerArea/PencairanDana/KonfirmasiPencairan.vue'

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
    path: '/checkout/pengiriman',
    name: 'CheckoutPengiriman',
    component: CheckoutPengiriman
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
    path: '/refund',
    name: 'Refund',
    component: Refund
  },
  {
    path: '/retur',
    name: 'Retur',
    component: Retur
  },
  {
    path: '/dzikir/Petang',
    name: 'DzikirPetang',
    component: DzikirPetang
  },
  {
    path: '/pesanan',
    name: 'Pesanan',
    component: Pesanan
  },
  {
    path: '/dikemas',
    name: 'Dikemas',
    component: Dikemas
  },
  {
    path: '/dikirim',
    name: 'Dikirim',
    component: Dikirim
  },
  {
    path: '/StatusRetur',
    name: 'StatusRetur',
    component: StatusRetur
  },
  {
    path: '/selesai',
    name: 'Selesai',
    component: Selesai
  },
  {
    path: '/loginPage',
    name: 'Login',
    component: Login
  },
  {
    path: '/pencairanDana',
    name: 'PencairanDana',
    component: PencairanDana
  },
  {
    path: '/ajukanPencairan',
    name: 'AjukanPencairan',
    component: AjukanPencairan
  },
  {
    path: '/konfirmasiPencairan',
    name: 'KonfirmasiPencairan',
    component: KonfirmasiPencairan
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
