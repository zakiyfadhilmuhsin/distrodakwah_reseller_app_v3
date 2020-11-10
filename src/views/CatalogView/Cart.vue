<template>
    <div class="bg-gray-200">
        <div class="mobile-view bg-white">
            <!-- navbar -->
            <div class="flex">
                <button class="w-1/6 my-5">
                    <img class="w-8 h-6 mt-1 mx-5" src="@/assets/arrow-left.svg" alt="">
                </button>
                <div class="w-5/6 my-5">
                    <h1 class="text-lg font-semibold capitalize ml-20">
                        keranjang
                    </h1>
                </div>
            </div>
            <!-- detail cart -->
            <div>
                <h1 class="text-sm text-gray-900 font-semibold mx-5">
                    Pilih item :
                </h1>
            </div>
            <div v-for="(n,i) in 4" :key="i">
                <div class="grid grid-rows-2 grid-flow-col mx-5 my-5">
                    <div class="row-span-2 w-6">
                        <label class="flex justify-start items-start">
                            <div class="bg-white rounded w-4 h-4 flex border-2 border-gray-500 flex-shrink-0 justify-center items-center my-5">
                                <input type="checkbox" class="opacity-0 absolute" checked>
                                    <svg class="fill-current absolute border-2 border-orange-400 hidden m-auto w-4 h-4 text-white bg-orange-400 rounded" viewBox="0 0 20 20">
                                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                                    </svg>
                            </div>
                        </label>
                    </div>
                    <div class="row-span-2 w-16">
                        <img class="w-16 h-16" src="@/assets/6.png" style="margin-left: 3px;">
                    </div>
                    <div class="row-span-1" style="width: 150px;">
                    <h1 class="text-xs font-semibold ml-3">HDY229 - Death</h1>
                    </div>
                    <div class="row-span-1" style="width: 150px;">
                        <div class="flex">
                            <h1 class="text-gray-500 capitalize mr-1 ml-3" style="font-size: 11px;">ukuran: </h1>
                            <h1 class="text-gray-800 capitalize mr-3 font-semibold" style="font-size: 11px;">l</h1>
                            <h1 class="text-gray-500 capitalize mr-1" style="font-size: 11px;">warna:  </h1>
                            <h1 class="text-gray-800 capitalize font-semibold" style="font-size: 11px;">merah</h1>
                        </div>
                    </div>
                    <div class="row-span-1 w-20">
                        <h1 class="text-xs text-right font-semibold">Rp. 110.000</h1>
                    </div>  
                    <div class="row-span-1 w-20">
                        <div class="flex justify-end">
                            <button class="bg-white border border-gray-300 h-5 w-5 flex-item-center justify-center">
                                <svg class="w-3 h-3 mx-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="black"/>
                                </svg>
                            </button>
                            <!-- <input class="h-10 w-10 text-center justify-center px-3 mx-1 rounded"> -->
                            <h2 class="h-5 w-5 text-center text-xs justify-center font-semibold mx-1"> 1 </h2>
                            <button class="bg-white border border-gray-300 h-5 w-5">
                                <svg class="w-3 h-3 mx-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); margin-top: 1px;" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path d="M19 13H5v-2h14v2z" fill="black"/>
                                </svg>
                            </button>
                        </div>
                    </div> 
                </div>
                <div class="bg-gray-300 mx-5" style="height: 1px;"></div>
            </div>
            <!-- subtotal produk -->
            <div class="flex justify-end mx-5 mt-12">
                <h1 class="text-sm font-medium capitalize">subtotal:</h1>
            </div>
            <div class="flex">
                <label class="flex justify-start mx-5">
                    <div class="bg-white rounded w-4 h-4 flex border-2 border-gray-500 flex-shrink-0 justify-center items-center mx-auto">
                        <input type="checkbox" class="opacity-0 absolute" checked>
                            <svg class="fill-current absolute border-2 border-orange-400 hidden m-auto w-4 h-4 text-white bg-orange-400 rounded" viewBox="0 0 20 20">
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                            </svg>
                    </div>
                    <div class="select-none text-xs ml-2">Pilih Semua</div>
                </label>
                <div class="flex justify-end">
                    <h1 class="text-lg text-orange-400 font-bold" style="margin-left: 116px;"> Rp. 220.000 </h1>
                </div>
            </div>
            <div class="bg-orange-400 mx-5 my-3 py-1 rounded">
                <button class="flex w-full">
                    <h1 class="text-white text-lg ml-20 mr-8 my-auto uppercase"> bayar sekarang </h1>
                    <svg class="w-8 h-8 my-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); margin-top: 3px;" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42z" fill="white"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>

input:checked + svg {
    display: block;
}

.mobile-view {
    width: 360px;
    min-height: 100vh;
    margin-right: auto;
    margin-left: auto;
}
</style>