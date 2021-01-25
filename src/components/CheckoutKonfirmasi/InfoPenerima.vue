<template>
    <div>
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
            <div class="mt-3 h-1 w-full" style="background-color: #FFF2D9;"></div>
        </div>
        <!-- keterangan penerima -->
        <div class="flex flex-col mx-5 mt-4">
            <h1 class="text-xs text-gray-900 font-semibold capitalize mb-1">keterangan penerima</h1>
            <h1 class="text-lg text-gray-900 font-bold capitalize mb-1">Maullana Ishak</h1>
            <h1 class="text-sm text-orange-400 font-semibold capitalize mb-3">Jalan Martadinata No. 301 Cirebon 45652</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InfoPenerima'
}
</script>

<style scoped>
input:checked + svg {
    display: block;
}
</style>