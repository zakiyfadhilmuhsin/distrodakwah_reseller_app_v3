<template>
    <div>
        <div class="mt-3 h-1 w-full bg-gray-100"></div>
        <!-- info Pembayaran -->
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
        <div class="mt-3 h-1 w-full bg-gray-100"></div>
        <!-- total pembayaran -->
        <div class="flex my-5 mx-5">
            <div class="w-1/2">
                <h1 class="text-base text-gray-900 font-bold capitalize">total pembayaran</h1>
            </div>
            <div class="w-1/2 justify-end">
                <h1 class="text-base text-gray-900 text-right font-bold capitalize">Rp. 245.349</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InfoPembayaran'
}
</script>

<style scoped>

</style>