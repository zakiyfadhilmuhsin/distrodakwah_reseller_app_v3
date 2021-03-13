<template>
    <div>
        <div class="grid grid-rows-2 grid-flow-col mx-5 py-5">
            <div class="row-span-2 w-12">
                <img class="mt-1" src="@/assets/logo.svg" alt="">
            </div>
            <div class="row-span-1 col-span-2 bg-white w-48"> 
                <h1 class="capitalize text-lg font-semibold">
                    Nurul Huda
                </h1>
            </div>
            <div class="row-span-1 col-span-2 bg-white">
                <h1 class="capitalize text-sm">
                    reseller exclusif
                </h1>
            </div>
            <div class="row-span-2 w-10">
                <router-link to="/cart">
                    <img class="mt-3" src="@/assets/cart2.svg" alt="">
                    <span class="cart-quantity"></span>
                </router-link>
            </div>
            <div class="row-span-2 w-10">
                <img class="mt-3 ml-1" src="@/assets/notif.svg" alt="">
                <span class="cart-quantity"></span>
            </div>
        </div>
        <div class="bg-gray-100 h-2"></div>
    </div>  
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
.cart-quantity{
  position: relative;
  align-items: center;
  left: 14px;
  bottom: 30px;
  background:#FF0000;
  border-radius: 50%;
  display: flex;
  font-weight: bold;
  font-size: 12px;
  color: white;
  height: 10px;
  justify-content: center;
  padding: 0.5rem;
  width: 10px;
  cursor: pointer;
}
</style>