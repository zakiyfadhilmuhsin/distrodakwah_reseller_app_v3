<template>
    <div>
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
    </div>
</template>

<script>
export default {
    name: 'Pembayaran'
}
</script>

<style scoped>

</style>