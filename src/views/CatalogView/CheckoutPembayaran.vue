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
                    <img class="mx-6" src="@/assets/icon-ceklis.svg">
                </div>
                <div class="flex pb-4 ml-12">
                    <h1 class="text-white text-sm mr-6">pengiriman</h1>
                    <h1 class="text-white text-sm mr-6">pembayaran</h1>
                    <h1 class="text-white text-sm ">konfirmasi</h1>
                </div>
            </div>
            <!-- pembayaran -->
            <div style="background-color: #FFFBF3;">
                <div class="flex flex-col mb-4">
                    <div class="w-full ">
                        <h1 class="text-sm text-gray-900 font-semibold capitalize ml-5 mt-3">cara pembayaran</h1>
                    </div>
                    <div class="w-full ">
                        <h1 class="text-sm text-gray-600 font-semibold capitalize ml-5 mt-2">pilih bank :</h1>
                    </div>
                </div>
                <div class="flex ml-5 gap-4">
                    <button class="flex-wrap w-40 h-12 border-gray-200 border-2 rounded focus:border-orange-400 focus:outline-none">
                        <img class="w-20 h-10 mx-auto mb-3 " src="@/assets/logo-mandiri.svg">
                    </button>
                    <button class="flex-wrap w-40 h-12 border-gray-200 border-2 rounded focus:border-orange-400 focus:outline-none">
                        <img class="w-20 h-10 mx-auto mb-3" src="@/assets/logo-bca.svg">
                    </button>
                    <button class="flex-wrap w-40 h-12 border-gray-200 border-2 rounded focus:border-orange-400 focus:outline-none">
                        <img class="w-20 h-10 mx-auto mb-3" src="@/assets/logo-bri.svg">
                    </button>
                </div>
                <div class="mt-5 h-2 w-full" style="background-color: #FFF2D9;"></div>
            </div>
            <!-- detail bank -->
            <div class="flex mx-5 mt-5">
                <div class="w-1/3">
                    <h1 class="text-sm font-semibold uppercase" style="color: #B8B8B8;">nama bank</h1>
                </div>
                <div class="w-2/3">
                    <h1 class="text-sm text-gray-500 font-semibold uppercase" style="color: #373737;">BCA</h1>
                </div>
            </div>
            <div class="flex mx-5 my-3 divide-y-2 divide-gray-300">
                <div class="w-1/3">
                    <h1 class="text-sm text-gray-500 font-semibold uppercase mt-4" style="color: #B8B8B8;">rekening</h1>
                </div>
                <div class="w-2/3">
                    <h1 class="text-sm text-gray-500 font-semibold uppercase mt-4" style="color: #373737;">100 2001 9876</h1>
                </div>
            </div>
            <div class="flex mx-5 my-3 divide-y-2 divide-gray-300">
                <div class="w-1/3">
                    <h1 class="text-sm text-gray-500 font-semibold uppercase mt-5" style="color: #B8B8B8;">alamat</h1>
                </div>
                <div class="w-2/3">
                   <h1 class="text-sm text-gray-500 font-semibold uppercase mt-4" style="color: #373737;">PT. MOSLIFE INDONESIA </h1>
                </div>
            </div>
            <div class="flex mx-5 my-3 divide-y-2 divide-gray-300">
                <div class="w-1/3"></div>
                <div class="w-2/3"></div>
            </div>
            <div class="mt-8 h-2 w-full" style="background-color: #FFE0CD;"></div>
            <!-- total pembayaran -->
            <div class="py-2 px-1" style="background-color: #FFA36C;">
                <div class="flex rounded border-dashed border-2 py-3 px-1 border-white">
                    <div class="w-1/2 ">
                        <h1 class="text-white text-lg font-semibold capitalize px-2">total pembayaran</h1>
                    </div>
                    <div class="w-1/2">
                        <h1 class="text-white text-xl text-right font-semibold capitalize px-2">Rp. 245.000</h1>
                    </div>
                </div>
            </div>
            <!-- kode unik -->
            <div class="flex">
                <label class="flex justify-start items-start ml-5 mr-4  ">
                    <div class="bg-white rounded w-4 h-4 flex border-2 border-gray-500 flex-shrink-0 justify-center items-center mt-5 mb-3">
                        <input type="checkbox" class="opacity-0 absolute" checked>
                            <svg class="fill-current absolute border-2 border-orange-400 hidden m-auto w-4 h-4 text-white bg-orange-400 rounded" viewBox="0 0 20 20">
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                            </svg>
                    </div>
                </label>
                <div class="mt-4">
                    <h1 class="text-base text-gray-900 font-semibold">Gunakan Kode Unik</h1>
                </div>
            </div>
            <div class="flex mx-5">
                <h1 class="text-xs text-gray-600">Gunakan Kode Unik ini 349 saat anda melakukan transfer, contoh nominal yang anda transfer jadi Rp. 245.349 </h1>
            </div>
            <div class="my-4" style="background-color: #FFEAC1;">
                <img src="@/assets/Ellipse.svg" alt="">
                <h1 class="italic text-xs -mt-6 pl-2" style="color: #CC8600;">i</h1>
                <div class="px-4 pb-3 mb-3 mr-3">
                    <h1 class="text-xs italic" style="color: #6A5D42;">Kode unik ini untuk otomatis konfirmasi pembayaran Anda. Dan akan di kembalikan ke Dompet Anda</h1>
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