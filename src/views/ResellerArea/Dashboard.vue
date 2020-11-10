<template>
    <div class="bg-gray-200">
        <div class="mobile-view bg-white">
            <!-- navbar -->
            <div class="grid grid-cols-3 mx-4 pt-4">
                <button class="col-span-1 w-12">
                    <img class="w-8 h-6 mt-1 mx-3" src="@/assets/arrow-left.svg" alt="">
                </button>
                <div class="col-span-1 w-56" style="margin-left: -55px;">
                    <h1 class="text-gray-800 text-lg text-center font-semibold capitalize">
                        akun
                    </h1>
                    </div>
                <div class="col-span-1" style="margin-left: 83px;">
                    <img class="mt-1" src="@/assets/logo.svg" alt="">
                </div>
            </div>
            <!-- info reseller -->
            <div class="flex flex-col">
                <div class="flex justify-center">
                    <div class="mt-8 bg-white border-2 border-orange-400 w-20 h-20 rounded-full">
                        <div class="flex justify-center" style="margin-top: 3px;">
                            <img class="rounded-full" style="width: 70px;" src="@/assets/image-1.svg">
                        </div>
                    </div>
                </div>
                <div class="flex justify-center mt-4">
                    <h1 class="text-gray-800 font-bold capitalize px-4">nurul huda</h1>
                    <button>
                        <img src="@/assets/icon-edit.svg" alt="">
                    </button>
                </div>
                <div class="flex justify-center">
                    <h1 class="text-gray-900 font-light capitalize">exclusive reseller</h1>
                </div>
            </div>
            <div class="grid grid-rows-2 grid-flow-col mt-3 mb-6 mx-10 divide-x divide-gray-400 divide-dashed">
                <div class="row-span-2">
                    <h1 class="text-base text-gray-500 capitalize text-right mr-5"> pencapaian </h1>
                    <div class="flex text-center mr-3 w-6">
                        <h1 class="text-base text-gray-500 font-semibold capitalize  ml-12 mr-2 text-right">23%</h1>
                        <img class="w-3 h-3" style="margin-top: 7px;" src="@/assets/arrow-top.svg" alt="">
                        <h1 class="text-xs text-green-500 capitalize mt-1">10%</h1>
                    </div>
                </div>
                <div class="row-span-2 pl-5">
                    <h1 class="text-base text-gray-500 capitalize"> Total Sales </h1>
                    <h1 class="text-base text-gray-500 font-semibold capitalize">197 item</h1>
                </div>
            </div>
            <div class="bg-gray-100 h-2"></div>
            <!--  -->
            <div class="divide-y divide-gray-400 my-4">
                <div class="flex ml-5 mb-4">
                    <img class="mr-5 mt-3 w-6" src="@/assets/icon-katalog.svg" alt="">
                    <h1 class="mr-10 mt-3 w-56 capitalize text-gray-800 font-semibold">download katalog</h1>
                    <img class="mt-3" src="@/assets/arrow.svg" alt="">
                </div>
                <div class="flex ml-16 mb-3">
                    <img class="mr-5 mt-3 w-6" style="margin-left: -43px;" src="@/assets/icon-kursus.svg" alt="">
                    <h1 class="mr-10 mt-3 w-56 capitalize text-gray-800 font-semibold">Kursus Bisnis Online</h1>
                    <img class="mt-3" src="@/assets/arrow.svg" alt="">
                </div>
                <div class="flex ml-16 mb-3">
                    <img class="mr-5 mt-3 w-6" style="margin-left: -43px;" src="@/assets/icon-webreplika.svg" alt="">
                    <h1 class="mr-10 mt-3 w-56 capitalize text-gray-800 font-semibold">web replika</h1>
                    <img class="mt-3" src="@/assets/arrow.svg" alt="">
                </div>
                <div class="flex ml-16 mb-3">
                    <img class="mr-5 mt-3 w-6" style="margin-left: -43px;" src="@/assets/icon-setgoals.svg" alt="">
                    <h1 class="mr-20 mt-3 capitalize text-gray-800 font-semibold">set goals</h1>
                    <h1 class="bg-blue-400 px-2 mr-6 mt-3 rounded-md text-sm text-white font-semibold italic">new feature</h1>
                    <img class="mt-3" src="@/assets/arrow.svg" alt="">
                </div>
                <div class="flex ml-16 mb-3">
                    <img class="mr-5 mt-3 w-6" style="margin-left: -43px;" src="@/assets/icon-voucher.svg" alt="">
                    <h1 class="mr-8 mt-3 capitalize text-gray-800 font-semibold">voucher promo</h1>
                    <h1 class="bg-yellow-400 px-2 mr-6 mt-3 rounded-md text-sm font-semibold italic">coming soon</h1>
                    <img class="mt-3" src="@/assets/arrow.svg" alt="">
                </div>
                <div class="flex ml-16 mb-3">
                    <img class="mr-5 mt-3 w-6   " style="margin-left: -43px;" src="@/assets/icon-bantuan.svg" alt="">
                    <h1 class="mr-10 mt-3 w-56 capitalize text-gray-800 font-semibold">bantuan</h1>
                    <img class="mt-3" src="@/assets/arrow.svg" alt="">
                </div>
                <div class="flex ml-16 mb-4"></div>
            </div>
            <div class="mx-5 mt-8">
                <button class="bg-white border py-2 w-full rounded-full font-bold" style="border-color: red; color: red;">
                    keluar
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
</style>