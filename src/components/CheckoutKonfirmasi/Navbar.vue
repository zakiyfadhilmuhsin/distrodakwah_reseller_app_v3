<template>
    <div>
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
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>

</style>