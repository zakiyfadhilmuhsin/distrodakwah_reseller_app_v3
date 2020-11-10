<template>
    <div class="bg-gray-200">
        <div class="mobile-view bg-white">
            <!-- navbar -->
            <div class="bg-blue-900">
                <div class="grid grid-cols-3 mx-5 py-4">
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
                <div class="flex pb-4 ml-12">
                    <h1 class="text-white text-sm mr-6 font-semibold capitalize">pengiriman</h1>
                    <h1 class="text-white text-sm mr-6 font-semibold capitalize">pembayaran</h1>
                    <h1 class="text-white text-sm font-semibold capitalize">konfirmasi</h1>
                </div>
            </div>
            <!-- info alamat -->
            <div class="flex mt-3 mb-5">
                <div class="w-1/2 ">
                    <h1 class="text-sm text-gray-800 font-semibold capitalize ml-5">penerima</h1>
                </div>
                <div class="w-1/2 ">
                   <h1 class="text-sm text-right font-semibold mr-5" style="color: orange;">Sudah ada ?</h1>
                </div>
            </div>
            <div class="flex mx-5 mt-2">
                <div class="w-1/3">
                    <h1 class="text-sm font-semibold uppercase" style="color: #B8B8B8;">nama</h1>
                </div>
                <div class="w-2/3">
                    <input class="text-sm text-gray-900 font-medium border-none w-full mb-1 -mt-1 focus:outline-none" type="text">
                </div>
            </div>
            <div class="flex mx-5 my-1 divide-y-2 divide-gray-300 divide-dashed">
                <div class="w-1/3">
                    <h1 class="text-sm text-gray-500 font-semibold uppercase mt-4" style="color: #B8B8B8;">no. hp</h1>
                </div>
                <div class="w-2/3">
                    <input class="text-sm text-gray-900 font-medium border-none mt-4 focus:outline-none" type="text">
                </div>
            </div>
            <div class="flex mx-5 my-2 divide-y-2 divide-gray-300 divide-dashed">
                <div class="w-1/3">
                    <h1 class="text-sm text-gray-500 font-semibold uppercase mt-5" style="color: #B8B8B8;">alamat</h1>
                </div>
                <div class="w-2/3">
                    <input class="text-sm text-gray-900 font-medium border-none mt-4 focus:outline-none" type="text">
                </div>
            </div>
            <div class="flex mx-5 my-2 divide-y-2 divide-gray-300 divide-dashed">
                <div class="w-1/3">
                    <h1 class="text-sm text-gray-500 font-semibold uppercase mt-5" style="color: #B8B8B8;">kota/kab</h1>
                </div>
                <div class="w-2/3">
                    <input class="text-sm text-gray-900 font-medium border-none mt-4 focus:outline-none" type="text">
                </div>
            </div>
            <div class="flex mx-5 my-2 divide-y-2 divide-gray-300 divide-dashed">
                <div class="w-1/3">
                    <h1 class="text-sm text-gray-500 font-semibold uppercase mt-5" style="color: #B8B8B8;">kode pos</h1>
                </div>
                <div class="w-2/3">
                    <input class="text-sm text-gray-900 font-medium border-none mt-4 focus:outline-none" type="text">
                </div>
            </div>
            <div class="flex mx-5 my-2 divide-y-2 divide-gray-300 divide-dashed">
                <div class="w-1/3"></div>
                <div class="w-2/3"></div>
            </div>
            <div class="flex mx-5 my-5">
                <div class="w-4/5">
                    <h1 class="text-gray-600" style="font-size: 11px;">simpan untuk pembelian di masa mendatang</h1>
                </div>
                <div class="w-1/5">
                    <input type="checkbox" class="box">
                </div>
            </div>
            <div class="bg-gray-300 h-2 mb-5"></div>
            <!-- pilih pengiriman -->
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
            <!-- pembayaran -->
            <div class="bg-orange-400 mx-5 mt-5 mb-3 py-1 rounded">
                <button class="flex w-full">
                    <h1 class="text-white text-base ml-16 mr-2 my-auto uppercase"> lanjut ke pembayaran </h1>
                    <svg class="w-8 h-8 my-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); margin-top: 3px;" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42z" fill="white"/>
                    </svg>
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

input[type="checkbox"]:focus{
    -webkit-tap-highlight-color:rgba(0,0,0,0) !important;
}
input[type="checkbox"]{
    -webkit-appearance:none;
    position: relative;
    left: 28px;
    right: 0;
    top: 0;
    bottom: 0;
    cursor: pointer;
    outline: none;
}

.box{
    height: 22px;
    width: 34px;
    background-color: #e5e5e5;
    border-radius: 50px;
    transition: 0.3s;
}
.box:before{
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    background-color: white;
    border-radius: 50%;
    border: 3px solid #bdc3c7;
    left: 1px;
    top: 1px;
    transition: 0.3s;
}
.box:after{
    position: absolute;
    font-size: 45px;
    font-family: 'Montserrat',sans-serif;
    font-weight: 700;
    color: #e5e5e5;
    left: 100px;
    letter-spacing:0.5px; 
    transition: 0.3s;
}
.box:checked{
    background-color: #F2994A;
}
.box:checked:before{
    border: 3px solid #DA8D00;
    background-color:white;
    left: 14px;
}
.box:checked:after{
    color: #F2994A;
}

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