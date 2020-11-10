<template>
    <div class="bg-gray-200">
        <div class="mobile-view bg-white">
            <!-- navbar -->
            <div class="bg-blue-900 rounded-b-3xl">
                <div class="grid grid-cols-3 mx-5 pt-4">
                    <div class="col-span-1 w-12">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12z" fill="white"/>
                        </svg>
                    </div>
                    <div class="col-span-1 w-56 -ml-16">
                        <h1 class="text-white text-lg text-center font-semibold capitalize">
                            produk fashion
                        </h1>
                    </div>
                    <div class="col-span-1" style="margin-left: 83px;">
                        <img class="w-5 h-5 mt-1" src="@/assets/icon-cart2.svg" alt="">
                        <span class="cart-quantity">0</span>
                    </div>
                </div>
                <!-- search -->
                <div class="flex px-5 py-8">
                    <!-- <div class="w-64 rounded-full flex-grow">
                         <div class="absolute pl-3 py-2">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" fill="gray"/>
                            </svg>
                        </div> 
                        <input type="text" placeholder="Cari Produk" class="rounded-full h-8 pl-10 py-5 text-md" style="width: 270px;">
                    </div> -->
                    <div class="relative flex w-full flex-wrap items-stretch mb-3 mr-3">
                        <span class="z-10 h-full font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-sm items-center justify-center w-8 pl-3 pt-3">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" fill="gray"/>
                            </svg>
                        </span>
                        <input type="text" placeholder="Cari Produk" class="rounded-full px-3 py-2 placeholder-gray-700 text-gray-700 relative bg-white text-md shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
                    </div>
                    <div class="flex-grow">
                        <div class="flex items-center justify-center bg-orange-400 rounded-full w-10 h-10">
                            <img src="@/assets/icon-menu.svg">
                       </div>
                    </div>
                </div>
            </div>
            <!-- kategori product -->
            <div class="grid grid-cols-4 mt-5 mx-3 gap-1 justify-items-center">
                <button v-for="(n,i) in 4" :key="i" class="col-span-1 bg-orange-300 px-5 py-2 text-xs text-gray-500 rounded-md hover:bg-orange-400 hover:text-white focus:bg-orange-400 focus:text-white capitalize" type="button">
                    <div class="grid grid-cols-1 justify-items-center">
                        <img class="mb-1" style="width: 30px;" src="@/assets/image-2.svg">
                            kurta
                    </div>
                </button>
            </div>
            <!-- product populer -->
            <div class="grid grid-cols-2 mx-5 my-5">
                <div class="col-span-1">
                    <h1 class="text-gray-900 text-base font-semibold capitalize">produk </h1>
                </div>
                <div class="col-span-1"> 
                    <h1 class="text-orange-400 text-right">lihat semua</h1>
                </div>
            </div>
            
                <div class="flex flex-wrap mx-3 my-8">
                    <div v-for="(n,i) in 4" :key="i" class="w-1/2 px-3 pb-5">
                        <div class="bg-white h-64 w-auto rounded-lg shadow-lg">
                            <div class="flex justify-end">
                                <div class="w-4 h-4 mr-3 bg-orange-400 mt-2 rounded-full absolute" style="box-shadow: 1px 5px 10px orange">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#626262"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="grid grid-cols-3">
                                <img class="col-span-3 h-40 w-40 rounded-t-lg" src="@/assets/1.jpg" alt="">
                                <h1 class="col-span-3 text-sm font-semibold font-sans mx-2 mt-2">HDY222 - Solusi</h1>
                                <h1 class="col-span-1 font-light ml-2 mt-1 capitalize w-24" style="font-size: 10px;">keuntungan anda  </h1>
                                <div class="col-span-1 mt-1" style="margin-left: 60px;">
                                    <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); margin-top: 3px;" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64">
                                        <path d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z" fill="#ffce31"/>
                                    </svg>
                                </div>
                                <h1 class="col-span-1 text-xs ml-6 mr-2 mt-1"> 4.5</h1>
                            </div>
                            <div class="flex flex-wrap mx-6 mt-2">
                                <div class="w-full py-1 px-2 bg-green-500 rounded-full flex items-center justify-center"> 
                                    <h1 class="text-white text-sm text-center" style="margin-top: -1px;">Rp59.000</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.mobile-view {
    width: 360px;
    min-height: 100vh;
    margin-right: auto;
    margin-left: auto;
}
.cart-quantity{
  position: relative;
  align-items: center;
  left: 2px;
  bottom: 16px;
  /* background:#FF0000; */
  border-radius: 50%;
  display: flex;
  font-weight: bold;
  font-size: 10px;
  color: white;
  height: 10px;
  justify-content: center;
  padding: 0.5rem;
  width: 10px;
  cursor: pointer;
}
</style>