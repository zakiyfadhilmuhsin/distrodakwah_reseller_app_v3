<template>
    <div>
        <div class="flex mx-5">
            <h1 class="text-sm text-gray-900 font-semibold">Pilih Pengiriman dari</h1>
        </div>
        <div class="flex my-5 mx-5">
            <button class="text-xs text-gray-600 bg-gray-400 hover:bg-orange-400 hover:text-white focus:bg-orange-400 focus:text-white focus:outline-none rounded h-8 mr-4 capitalize" style="width: 110px;" type="button">
                gudang pusat
            </button>
            <button class="text-xs text-gray-600 bg-gray-400 hover:bg-orange-400 hover:text-white focus:bg-orange-400 focus:text-white focus:outline-none rounded h-8 capitalize" style="width: 110px;" type="button">
                gudang terdekat
            </button>
        </div>
        <!-- pilih ekspedisi -->
        <div class="flex mx-5 my-5">
            <h1 class="text-sm text-gray-900 font-semibold">Pilih Ekspedisi</h1>
        </div> 
        <div class="flex ml-5 gap-3">
            <button class="flex-grow bg-white border-white border-2 rounded focus:bg-white focus:border-orange-400 focus:outline-none">
                <img class="w-20 h-10 mb-3 " src="@/assets/LogoJne.svg">
            </button>
            <button class="flex-grow bg-white border-white border-2 rounded focus:bg-white focus:border-orange-400 focus:outline-none">
                <img class="w-20 h-10 mb-3" src="@/assets/LogoPos.svg">
            </button>
            <button class="flex-grow bg-white border-white border-2 rounded focus:bg-white focus:border-orange-400 focus:outline-none">
                <img class="w-20 h-10 mb-3" src="@/assets/J&T.svg">
            </button>
            <button class="flex-grow bg-white border-white border-2 rounded focus:bg-white focus:border-orange-400 focus:outline-none">
                <img class="w-20 h-10 mb-3" src="@/assets/LogoTiki.svg">
            </button>
        </div>
        <div class="flex ml-5 mb-5">
            <button class="text-center text-xs text-gray-600 uppercase mx-auto">jne</button>
            <button class="text-center text-xs text-gray-600 uppercase mx-auto">pos</button>
            <button class="text-center text-xs text-gray-600 uppercase mx-auto">j&t</button>
            <button class="text-center text-xs text-gray-600 uppercase mx-auto">tiki</button>
        </div>
        <div v-for="(n,i) in 3" :key="i" style="background-color: #DFFFD7;">
        <div  class="grid grid-rows-2 grid-flow-col">
            <div class="row-span-1 ml-5 mt-2">
                <h1 class="text-lg font-medium" style="color: #393939;">J&T Exprees EZ</h1>
            </div>
            <div class="row-span-1 ml-5">
                <h1 class="text-xs" style="color: #393939;">Estimasi 2-3 hari</h1>
            </div>
            <div class="row-span-2 my-auto">
                <h1 class="text-right" style="color: #303030;">Rp. 15.000</h1>
            </div>
            <div class="row-span-2 my-auto ml-5">
                <input id="radio1" type="radio" name="radio" class="hidden" checked />
                    <label for="radio1" class="flex items-center cursor-pointer">
                        <span class="w-4 h-4 inline-block mr-1 rounded-full border-2 border-orange-400"></span>
                </label>
            </div>
        </div>
        <div class="bg-gray-400 mx-5 -mt-2" style="height: 1px;"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OptionPenerima'
}
</script>

<style scoped>
input[type="radio"] + label span {
    transition: background .2s,
      transform .2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span{
  transform: scale(1.2);
} 

input[type="radio"]:checked + label span {
  background-color: #f6ad55; 
  box-shadow: 0px 0px 0px 1px white inset;
}

input[type="radio"]:checked + label{
   color: #3490DC; 
}
</style>