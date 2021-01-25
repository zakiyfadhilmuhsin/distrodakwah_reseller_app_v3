<template>
    <div>
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
</template>

<script>
export default {
    name: 'InfoPesanan'
}
</script>

<style scoped>

</style>