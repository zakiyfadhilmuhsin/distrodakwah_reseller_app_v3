<template>
    <div>
        <div class="grid grid-cols-2 mx-5 my-5">
            <div class="col-span-1">
                <h1 class="text-gray-900 text-base font-semibold capitalize">produk </h1>
            </div>
            <button class="col-span-1 focus:outline-none"> 
                <h1 class="text-orange-400 text-right">lihat semua</h1>
            </button>
        </div>
        <div class="flex flex-wrap mx-3 my-8">
            <div v-for="(n,i) in 4" :key="i" class="w-1/2 px-3 pb-5">
                <div class="bg-white h-64 w-auto rounded-lg shadow-lg">
                    <div class="flex justify-end">
                        <div class="w-4 h-4 mr-3 bg-orange-400 mt-2 rounded-full absolute" style="box-shadow: 1px 5px 10px orange">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#626262"/>
                            </svg>
                        </div>
                    </div>
                    <div class="grid grid-cols-3">
                        <img class="col-span-3 h-40 w-40 rounded-t-lg" src="@/assets/1.jpg" alt="">
                        <h1 class="col-span-3 text-sm font-semibold font-sans mx-2 mt-2">HDY222 - Solusi</h1>
                        <h1 class="col-span-1 font-light ml-2 mt-1 capitalize w-24" style="font-size: 10px;">keuntungan anda  </h1>
                        <div class="col-span-1 mt-1" style="margin-left: 60px;">
                            <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); margin-top: 3px;" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64">
                                <path d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z" fill="#ffce31"/>
                            </svg>
                        </div>
                        <h1 class="col-span-1 text-xs ml-6 mr-2 mt-1"> 4.5</h1>
                    </div>
                    <div class="flex flex-wrap mx-6 mt-2">
                        <button class="w-full py-1 px-2 bg-green-500 rounded-full flex items-center justify-center focus:ouline-none"> 
                            <h1 class="text-white text-sm text-center" style="margin-top: -1px;">Rp59.000</h1>
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

</style>