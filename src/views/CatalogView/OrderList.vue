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
                            Pesanan
                        </h1>
                    </div>
                </div>
                <!-- search -->
                <div class="flex px-5 py-8">
                    <div class="relative flex w-full flex-wrap items-stretch mb-3 mr-3">
                        <span class="z-10 h-full font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-sm items-center justify-center w-8 pl-3 pt-3">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" fill="gray"/>
                            </svg>
                        </span>
                        <input type="text" placeholder="Cari Invoice" class="rounded-full px-3 py-2 placeholder-gray-700 text-gray-700 relative bg-white text-md shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
                    </div>
                    <div class="flex-grow">
                        <div class="flex items-center justify-center bg-orange-400 rounded-full w-10 h-10">
                            <img src="@/assets/icon-menu.svg">
                       </div>
                    </div>
                </div>
            </div>
            <!-- pembayaran -->
            <div class="flex mt-2 mb-4 mx-5 mt-5">
                <button class="flex-wrap mr-2 mx-1 py-2 px-3 text-sm bg-orange-200 text-orange-500 hover:bg-orange-400 hover:text-white focus:bg-orange-400 focus:text-white rounded-md capitalize">
                    <div class="flex">
                        <img class="mr-2 w-4 h-4 mt-1" src="@/assets/icon-1.svg"> 
                        <h1>semua</h1>
                        <span class="bg-orange-300 h-5 w-5 ml-5 rounded-full focus:bg-blue-900" style="margin-top: 2px;">
                            <h1 style="font-size: 11px; margin-top: 1px;">1</h1>
                        </span>
                    </div>     
                </button>
                <button class="flex-wrap mr-2 mx-1 py-2 px-3 text-sm bg-orange-200 text-orange-500 hover:bg-orange-400 hover:text-white focus:bg-orange-400 focus:text-white rounded-md capitalize">
                    <div class="flex">
                        <img class="mr-2 w-4 h-4 mt-1" src="@/assets/icon-2.svg"> 
                        <h1>belum bayar</h1>
                        <span class="bg-orange-300 h-5 w-5 ml-5 rounded-full focus:bg-blue-900" style="margin-top: 2px;">
                            <h1 style="font-size: 11px; margin-top: 1px;">6</h1>
                        </span>
                    </div>     
                </button>
            </div>
            <!-- info pemesanan -->
            <div v-for="(n,i) in 4" :key="i" class="bg-white shadow mx-5 rounded">
                <div class="grid grid-rows-2 grid-flow-col mt-5 mb-3">
                    <div class="row-span-2 w-16 my-3">
                        <img class="w-16 h-16 ml-1" style="margin-top: 3px;" src="@/assets/6.png">
                    </div>
                    <div class="row-span-1 my-3" style="width: 150px;">
                    <h1 class="text-sm font-semibold ml-3">HDY229 - Death</h1>
                    </div>
                    <div class="row-span-1" style="width: 120px;">
                        <div class="flex flex-col -mt-1">
                            <h1 class="text-gray-900 text-xs capitalize ml-3">total pembayaran </h1>
                            <h1 class="text-gray-900 text-sm capitalize font-bold ml-3">Rp. 245.349</h1>
                        </div>
                    </div>
                    <div class="row-span-1 w-24 my-3 mr-1">
                        <h1 class="text-xs text-right font-semibold">Lihat Detail</h1>
                    </div>  
                    <div class="row-span-1 w-24 mt-3">
                        <div class="flex justify-end">
                            <button class="bg-orange-300 px-3 py-1 rounded-full">
                                <h1 class="text-xs text-center text-orange-500" style="margin-top: -2px;">belum bayar</h1>
                            </button>
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
</style>