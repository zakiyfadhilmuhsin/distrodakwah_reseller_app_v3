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
                       edit akun
                    </h1>
                </div>
            </div>
            <!-- target resseler -->
            <div class="flex flex-col mx-5 my-3">
                <h1 class="text-sm text-gray-800 font-medium capitalize">tentukan target</h1>
                <div class="flex">
                    <h1 class="text-xl text-gray-800 font-bold capitalize mr-3">Rp. 32.000.000</h1>
                    <button>
                        <img class="w-4" src="@/assets/icon-edit.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="flex mx-5">
                <div class="w-1/2 mr-5 rounded-md">
                    <img class="" src="@/assets/1.svg" alt="">
                    <div class="flex mx-3">
                        <h1 class="text-xs text-white mr-1 capitalize" style="margin-top: -135px;">Pencapaian</h1>
                        <h1 class="text-xs text-white font-bold capitalize" style="margin-top: -135px;">Bulan Lalu</h1>
                    </div>
                    <h1 class="text-xs text-white font-light mx-3 capitalize" style="margin-top: -104px;">total profit</h1>
                    <h1 class="text-base text-white font-bold mx-3 -mt-1 capitalize">Rp. 24.000.000</h1>
                    <h1 class="text-xs text-white font-light mx-3 mt-2 capitalize">total terjual</h1>
                    <h1 class="text-base text-white font-bold mx-3 mb-5 -mt-1 capitalize">810 item</h1>
                    
                </div>
                <div class="w-1/2 rounded-md">
                    <img class="" src="@/assets/2.svg" alt="">
                    <h1 class="text-xs text-white mx-3 capitalize" style="margin-top: -135px;">target pencapaian</h1>
                    <h1 class="text-xs text-white font-light mx-3 mt-3 capitalize">total profit</h1>
                    <h1 class="text-base text-white font-bold mx-3 -mt-1 capitalize">Rp. 24.000.000</h1>
                    <h1 class="text-xs text-white font-light mx-3 mt-2 capitalize">total terjual</h1>
                    <div class="flex">
                        <h1 class="text-base text-white font-bold ml-3 mr-2 mb-5 -mt-1 capitalize">810 item</h1>
                        <img class="w-3 h-3 mr-1 mt-1" src="@/assets/arrow-top2.svg" alt="">
                        <h1 class="text-xs text-green-700 font-bold capitalize mb-5 px-1 rounded" style="background: #B2FE8E;">10%</h1>
                    </div>
                </div>
            </div>
            <!-- riwayat pencapaian -->
            <div class="my-5 mx-5">
                <h1 class="text-gray-800 text-lg font-bold capitalize">riwayat pencapaian</h1>
            </div>
            <div class="mx-5 my-5 rounded-md py-1" style="background: #34812D;">
                <div class="grid grid-rows-2 grid-flow-col">
                    <div class="row-span-1 col-span-2 w-40" style="width: 180px;">
                        <h1 class="text-white text-lg font-semibold capitalize pl-3">saat ini</h1>
                    </div>
                    <div class="row-span-1 col-span-2" style="width: 180px;">
                        <div class="flex">
                            <h1 class="w-2/5 text-xs text-white pl-3">830 item</h1>
                            <h1 class="w-3/5 text-xs text-white">Rp. 26.300.000</h1>
                        </div>
                    </div>
                    <div class="row-span-2" style="width: 130px;">
                        <div class="flex mt-1">
                            <h1 class="text-xs text-gray-800 font-bold capitalize px-2 my-4 mr-1 rounded bg-white -ml-4"> september </h1>
                            <img class="w-3 h-3 my-5 mr-1" src="@/assets/arrow-top2.svg" alt="">
                            <h1 class="text-xs text-green-700 font-bold capitalize px-1 my-4 rounded" style="background: #B2FE8E;">10%</h1>
                        </div>
                    </div>
                </div> 
            </div>
            <!--  -->
            <div v-for="(n,i) in 4" :key="i" class="mx-5 my-4 rounded-md py-1 bg-white shadow">
                <div class="grid grid-rows-2 grid-flow-col">
                    <div class="row-span-1 col-span-2 w-40" style="width: 180px;">
                        <h1 class="text-gray-800 text-lg font-semibold capitalize pl-3">pencapaian</h1>
                    </div>
                    <div class="row-span-1 col-span-2" style="width: 180px;">
                        <div class="flex">
                            <h1 class="w-2/5 text-xs text-gray-800 font-semibold pl-3">830 item</h1>
                            <h1 class="w-3/5 text-xs text-gray-800 font-semibold">Rp. 26.300.000</h1>
                        </div>
                    </div>
                    <div class="row-span-2" style="width: 130px;">
                        <div class="flex mt-1">
                            <h1 class="text-xs font-bold capitalize px-2 my-4 mr-1 rounded -ml-4" style="background: #FFF3E7; color: #F98C14;"> september </h1>
                            <img class="w-3 h-3 my-5 mr-1" src="@/assets/arrow-top2.svg" alt="">
                            <h1 class="text-xs text-green-700 font-bold capitalize px-1 my-4 rounded" style="background: #B2FE8E;">10%</h1>
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