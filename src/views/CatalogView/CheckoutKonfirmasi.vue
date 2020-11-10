<template>
    <div class="bg-gray-200">
        <div class="mobile-view bg-white">
            <!-- navbar -->
            <div class="bg-blue-900">
                <div class="grid grid-cols-3 mx-5 pt-4 pb-6">
                    <div class="col-span-1 w-12">
                        <img class="w-6 h-6 mt-1" src="@/assets/arrow-left-white.svg" alt="">
                    </div>
                    <div class="col-span-1 w-56 -ml-16">
                        <h1 class="text-white text-lg text-center font-semibold capitalize" style="margin-top: 1px;">
                            checkout
                        </h1>
                    </div>
                    <div class="col-span-1 ml-3">
                        <h1 class="text-white text-base text-center font-semibold capitalize" style="margin-top: 2px;">Rp. 245.000</h1>
                    </div>
                </div>
                <div class="flex pb-1 ml-12">
                    <img class="ml-8" src="@/assets/icon-ceklis.svg">
                    <img class="ml-20" src="@/assets/icon-ceklis.svg">
                </div>
                <div class="flex pb-4 ml-12">
                    <h1 class="text-white text-sm font-semibold mr-6">pengiriman</h1>
                    <h1 class="text-white text-sm font-semibold mr-6">pembayaran</h1>
                    <h1 class="text-white text-sm font-semibold">konfirmasi</h1>
                </div>
            </div>
            <!-- pembayaran -->
            <div style="background-color: #FFFBF3;">
                <div class="flex flex-col mb-4">
                    <div class="w-full ">
                        <h1 class="text-sm text-gray-900 font-semibold capitalize ml-5 mt-3">keterangan pengiriman</h1>
                    </div>
                </div>
                <div class="flex">
                    <div class="w-1/2 mx-5">
                       <h1 class="text-sm text-gray-800 capitalize">nama</h1>
                    </div>
                    <div class="w-1/2">
                        <h1 class="text-sm text-gray-800 capitalize">No. HP</h1>
                    </div>
                </div>
                <div class="flex my-1">
                    <div class="w-1/2 rounded mx-5 py-1" style="background-color: #FF9903;">
                        <h1 class="text-xs text-white capitalize mx-3">nurul huda</h1>
                    </div>
                    <div class="w-1/2 rounded ml-5 mr-5 py-1" style="background-color: #FF9903;">
                        <h1 class="text-xs text-white capitalize mx-3">0812 1617 1920</h1>
                    </div>
                </div>
                <!-- checkbox dropshiper -->
                <div class="flex">
                    <label class="flex justify-start items-start ml-5 mr-3  ">
                        <div class="bg-white rounded w-3 h-3 flex border-2 border-gray-500 flex-shrink-0 justify-center items-center mt-2 mb-3">
                            <input type="checkbox" class="opacity-0 absolute" checked>
                                <svg class="fill-current absolute border-2 border-orange-400 hidden m-auto w-3 h-3 text-white bg-orange-400 rounded" viewBox="0 0 20 20">
                                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                                </svg>
                        </div>
                    </label>
                    <div class="mt-1">
                        <h1 class="text-xs text-gray-500 font-semibold">Kirim sebagai dropshiper</h1>
                    </div>
                </div>
                <div class="mt-3 h-2 w-full" style="background-color: #FFF2D9;"></div>
            </div>
                <!-- keterangan penerima -->
                <div class="flex flex-col mx-5 mt-4">
                    <h1 class="text-xs text-gray-900 font-semibold capitalize mb-1">keterangan penerima</h1>
                    <h1 class="text-lg text-gray-900 font-bold capitalize mb-1">Maullana Ishak</h1>
                    <h1 class="text-sm text-orange-400 font-semibold capitalize mb-3">Jalan Martadinata No. 301 Cirebon 45652</h1>
                </div>
                <div class="mt-3 h-2 w-full bg-gray-300"></div>
                <!-- rincian order -->
                <div class="flex mt-3 mb-5">
                    <div class="w-1/2 ">
                        <h1 class="text-sm text-gray-800 font-semibold capitalize ml-5">rincian order</h1>
                    </div>
                    <div class="w-1/2">
                        <h1 class="text-sm text-right font-semibold mr-5" style="color: orange;">Total: 2 item</h1>
                    </div>
                </div>
                <div class="grid grid-rows-2 grid-flow-col mx-5 my-5">
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
                            <h1 class="text-gray-800 font-semibold capitalize mr-1" style="font-size: 11px;">1</h1>
                            <h1 class="text-gray-500 capitalize mr-1" style="font-size: 11px;">item</h1>
                        </div>
                    </div>
                </div>
                <div class="mt-3 h-2 w-full bg-gray-300"></div>
                <!-- total pembayaran -->
                <div class="flex my-5 mx-5">
                    <div class="w-1/2">
                        <h1 class="text-base text-gray-900 font-bold capitalize">total pembayaran</h1>
                    </div>
                    <div class="w-1/2 justify-end">
                        <h1 class="text-base text-gray-900 text-right font-bold capitalize">Rp. 245.349</h1>
                    </div>
                </div>
                <!-- pembayaran -->
                <div class="bg-orange-400 mx-5 mt-5 mb-3 py-1 rounded">
                    <button class="flex w-full">
                        <h1 class="text-white text-base ml-16 mr-2 my-auto uppercase"> lanjut ke konfirmasi </h1>
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
.mobile-view {
    width: 360px;
    min-height: 100vh;
    margin-right: auto;
    margin-left: auto;
}
input:checked + svg {
    display: block;
}
</style>