<template>
    <div class="bg-gray-200">
        <div class="mobile-view bg-white">
            <!-- navbar -->
            <div class="flex">
                <button class="w-1/6 my-5">
                    <img class="w-8 h-6 mt-1 mx-5" src="@/assets/arrow-left.svg" alt="">
                </button>
                <div class="w-5/6 my-5">
                    <h1 class="text-base font-semibold capitalize ml-20 mt-1">
                       penghasilan
                    </h1>
                </div>
            </div>
            <!--  -->
            <div class="grid grid-rows-2 grid-flow-col ml-5 mb-3">
                <h1 class="row-span-1 text-gray-800 text-2xl font-bold capitalize">terjual</h1>
                <h1 class="row-span-1 -mt-1 font-bold text-sm" style="color: #9C9C9C;">132 item</h1>
                <div class="row-span-1" style="margin-left: 175px;">
                    <img class="h-8" src="@/assets/logo.svg" alt="">
                </div>
                <h1 class="row-span-1 ml-40 font-bold text-sm" style="color: #8EC960;">Exclusive</h1>
            </div>
            <!--  -->
            <div class="flex bg-white border border-green-600 mx-5 py-1 rounded-md">
                <div class="w-8 h-8 ml-3 mt-1 bg-green-800 border-4 border-green-200 rounded-full">
                    <h1 class="text-white text-center font-bold" style="margin-top: 3px; font-size: 10px;">Rp</h1>
                </div>
                <div class="flex flex-col ml-3">
                    <h1 class="text-xs text-gray-500 capitalize">total penghasilan</h1>
                    <h1 class="text-base text-gray-900 font-bold capitalize" style="margin-top: -2px;">Rp. 24.700.000</h1>
                </div>
            </div>
            <!--  -->
            <div class="bg-purple-300 my-5 mx-5 rounded-md" style="background: #FFEDAD;">
                <div class="flex py-2 ">
                    <div class="w-5 h-5 rounded-full bg-orange-400 ml-5">
                        <h1 class="text-white text-center" style="margin-top: -3px;">i</h1>
                    </div>
                    <h1 class="text-xs mr-1 ml-4" style="color: orange">Tingkatkan penjualan dengan</h1>
                    <h1 class="text-xs font-bold mr-3" style="color: orange">'set goals'</h1>
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42z" fill="orange"/>
                    </svg>
                </div>
            </div>
            <!--  -->
            <div class="flex">
                <div class="w-1/2">
                    <h1 class="text-lg font-semibold capitalize ml-5">agustus 2020</h1>
                </div>
                <div class="w-1/2">
                    <img class="ml-32" src="@/assets/icon-setting.svg" alt="">
                </div>
            </div>
            <!--  -->
            <div v-for="(n,i) in 4" :key="i" class="grid grid-rows-2 grid-flow-col mt-5 h-16">
                <div class="row-span-2 w-16 h-16">
                    <img class="w-16 h-16 ml-5 bg-orange-200 rounded-md" src="@/assets/6.png">
                </div>
                <div class="row-span-1" style="width: 120px;">
                    <h1 class="text-sm font-semibold ml-3 mt-3">HDY229 - Death</h1>
                </div>
                <div class="row-span-1" style="width: 120px;">
                    <h1 class="text-xs font-semibold ml-3 mt-1" style="color: #9C9C9C;">12/08/2020</h1>
                </div>
                <div class="row-span-1 w-32 mr-1">
                    <h1 class="text-base text-right font-bold mt-2">Rp. 799.000</h1>
                </div>  
                <div class="row-span-1 w-32">
                    <div class="flex justify-end">
                        <button class="bg-orange-300 px-3 w-20 rounded-md mt-2" style="background: #D1FFC1;">
                            <h1 class="text-xs text-center capitalize" style=" color: #36B908;">sukses</h1>
                        </button>
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