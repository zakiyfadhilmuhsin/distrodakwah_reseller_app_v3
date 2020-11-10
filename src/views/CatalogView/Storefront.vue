<template>
    <div class="bg-gray-200">
        <div class="mobile-view bg-white">
            <!-- Top Navigation -->
            <div class="grid grid-rows-2 grid-flow-col mx-5 py-5">
                <div class="row-span-2 w-12"> 
                    <img class="mt-1" src="@/assets/logo.svg" alt="">
                </div>
                <div class="row-span-1 col-span-2 bg-white w-48"> 
                    <h1 class="capitalize text-lg font-semibold">
                        Nurul Huda
                    </h1>
                </div>
                <div class="row-span-1 col-span-2 bg-white">
                    <h1 class="capitalize text-sm">
                        reseller exclusif
                    </h1>
                </div>
                <div class="row-span-2 w-10">
                    <img class="mt-3" src="@/assets/cart2.svg" alt="">
                    <span class="cart-quantity"></span>
                </div>
                <div class="row-span-2 w-10">
                    <img class="mt-3 ml-1" src="@/assets/notif.svg" alt="">
                    <span class="cart-quantity"></span>
                </div>
            </div>
            <div class="bg-gray-100 h-2"></div>
            <!-- Pengahasilan Reseller -->
            <div class="grid grid-rows-2 grid-flow-col mx-5 py-2 items-center">
                <div class="row-span-1 bg-white">
                    <h1 class="capitalize text-lg font-bold">moslife</h1>
                </div>
                <div class="row-span-1 bg-white">
                    <h1 class="capitalize text-sm"> Pengahasilan </h1>
                </div>
                <div class="row-span-2 bg-white">
                    <h1 class="text-right font-bold">Rp. 12.750.000</h1>
                </div>
            </div>
            <!-- dompet, donasi, hadiah, dzikir -->
            <div class="bg-blue-900 h-24 mx-5 rounded-lg my-1">
                <div class="grid grid-rows-2 grid-flow-col justify-items-center py-3">
                    <div class="row-span-1 bg-white h-12 w-12 rounded-full">
                        
                    </div>
                    <div class="row-span-1">
                        <h1 class="text-white text-sm capitalize mt-1"> dompet </h1>
                    </div>
                    <div class="row-span-1 bg-white h-12 w-12 rounded-full">
                        
                    </div>
                    <div class="row-span-1">
                        <h1 class="text-white text-sm capitalize mt-1"> donasi </h1>
                    </div>
                    <div class="row-span-1 bg-white h-12 w-12 rounded-full">
                        
                    </div>
                    <div class="row-span-1">
                        <h1 class="text-white text-sm capitalize mt-1"> hadiah </h1>
                    </div>
                    <div class="row-span-1 bg-white h-12 w-12 rounded-full">
                        
                    </div>
                    <div class="row-span-1">
                        <h1 class="text-white text-sm capitalize mt-1"> dzikir </h1>
                    </div>
                </div>
            </div>
            <!-- slider -->
            <div class="bg-white h-32 my-5 mx-5">
                <img class="rounded-md h-32 w-full" src="@/assets/1.png">
            </div>
            <!-- category product -->
            <div class="grid-rows-1 mx-5">
                    <h1 class="row-span-1 text-base font-medium capitalize">produk moslife</h1>
            </div>
            <div class="mx-2 my-5">
                <div class="grid grid-cols-4 justify-items-center gap-y-3">
                    <div class="col-span-1 w-16">
                        <div class="h-12">
                            <img class="h-8 w-16 mx-auto my-2" src="@/assets/icon-allmenu.svg">
                        </div>
                            <h1 class="text-center font-hairline capitalize leading-4 font-sans" style="font-size: 12px;">semua menu</h1>
                    </div>
                    <div class="col-span-1 bg-white w-16">
                        <div class="h-12">
                            <img class="h-10 w-16 mx-auto my-2" src="@/assets/icon-fashion.svg">
                        </div>
                            <h1 class="text-center font-hairline capitalize leading-4 font-sans" style="font-size: 12px;">fasion</h1>
                    </div>
                    <div class="col-span-1 bg-white w-16">
                        <div class="h-12">
                            <img class="h-8 w-16 mx-auto my-2" src="@/assets/icon-makanan.svg">
                        </div>
                            <h1 class="text-center font-hairline capitalize leading-4 font-sans" style="font-size: 12px;">makanan minuman</h1>
                    </div>
                    <div class="col-span-1 bg-white w-16">
                        <div class="h-12">
                            <img class="h-8 w-16 mx-auto my-2" src="@/assets/icon-travel.svg">
                        </div>
                            <h1 class="text-center font-hairline capitalize leading-4 font-sans" style="font-size: 12px;">travel</h1>
                    </div>
                    <div class="col-span-1 bg-white w-16">
                        <div class="h-12">
                            <img class="h-8 w-16 mx-auto my-2" src="@/assets/icon-kosmetik.svg">
                        </div>
                            <h1 class="text-center font-hairline capitalize leading-4 font-sans" style="font-size: 12px;">kosmetik</h1>
                    </div>
                    <div class="col-span-1 bg-white w-16">
                        <div class="h-12">
                            <img class="h-8 w-16 mx-auto my-2" src="@/assets/icon-obatherbal.svg">
                        </div>
                            <h1 class="text-center font-hairline capitalize leading-4 font-sans" style="font-size: 12px;">obat herbal</h1>
                    </div>
                    <div class="col-span-1 bg-white w-16">
                        <div class="h-12">
                            <img class="h-8 w-16 mx-auto my-2" src="@/assets/icon-properti.svg">
                        </div>
                            <h1 class="text-center font-hairline capitalize leading-4 font-sans" style="font-size: 12px;">properti</h1>
                    </div>
                     <div class="col-span-1 bg-white w-16">
                        <div class="h-12">
                            <img class="h-8 w-16 mx-auto my-2" src="@/assets/icon-pulsa.svg">
                        </div>
                            <h1 class="text-center font-hairline capitalize leading-4 font-sans" style="font-size: 12px;">pulsa</h1>
                    </div>
                </div>
            </div>
            <!-- produk terlaris -->
            <div class="flex mx-5 mt-5 mb-3">
                <div class="w-1/2">
                    <h1 class="text-base font-medium capitalize">produk terlaris</h1>
                </div>
                <div class="w-1/2">
                    <h1 class="text-sm font-medium capitalize text-right text-orange-500">lihat semua</h1>
                </div>
            </div>
             <div class="grid grid-cols-2 mx-5 gap-5">
                <div class="col-span-1 bg-green-700 h-56 rounded-lg">
                    <div class="flex justify-end mx-2">
                        <div class="w-4 h-4 mt-2 bg-white rounded-full absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#626262"/>
                            </svg>
                        </div>
                    </div>
                    <div class="grid grid-cols-4">
                        <img class="col-span-4 h-40 w-40 rounded-t-lg" src="@/assets/1.jpg" alt="">
                            <h1 class="col-span-4 text-sm text-white font-semibold font-sans mx-2 mt-2">HDY222 - Solusi</h1>
                                <h1 class="col-span-1 text-xs text-white font-light ml-2 capitalize w-10">terjual :  </h1>
                                    <h1 class="col-span-1 text-xs text-white font-semibold ml-3 w-12">570 pcs</h1>
                                    <div class="col-span-1 ml-8">
                                        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); margin-top: 3px;" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64">
                                            <path d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z" fill="#ffce31"/>
                                        </svg>
                                    </div>
                                    <h1 class="col-span-1 text-xs text-white ml-3 mr-2"> 4.5</h1>
                    </div>   
                </div>
                <div class="col-span-1 bg-orange-600 h-56 rounded-lg">
                    <div class="flex justify-end mx-2">
                        <div class="w-4 h-4 mt-2 bg-white rounded-full absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#626262"/>
                            </svg>
                        </div>
                    </div>
                    <div class="grid grid-cols-4">
                        <img class="col-span-4 h-40 w-40 rounded-t-lg" src="@/assets/6.png" alt="">
                            <h1 class="col-span-4 text-sm text-white font-semibold font-sans mx-2 mt-2">HDY222 - Solusi</h1>
                                <h1 class="col-span-1 text-xs text-white font-light ml-2 capitalize w-10">terjual :  </h1>
                                    <h1 class="col-span-1 text-xs text-white font-semibold ml-3 w-12">570 pcs</h1>
                                    <div class="col-span-1 ml-8">
                                        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); margin-top: 3px;" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64">
                                            <path d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z" fill="#ffce31"/>
                                        </svg>
                                    </div>
                                    <h1 class="col-span-1 text-xs text-white ml-3 mr-2"> 4.5</h1>
                     </div>   
                </div>
            </div>
            <!-- berita    -->
            <div class="flex my-5 mx-5">
                <button class="flex-grow text-base text-white bg-blue-900 hover:bg-blue-900 hover:text-white focus:bg-blue-900 focus:text-white focus:outline-none rounded-full py-2 px-3 mr-2 capitalize" type="button">
                    penyejuk hati
                </button>
                <button class="flex-grow text-base text-gray-800 bg-white hover:bg-blue-900 hover:text-white focus:bg-blue-900 focus:text-white focus:outline-none rounded-full py-2 px-3 capitalize" type="button">
                    tips bisnis
                </button>
                <!-- <button class="shadow text-gray-800 bg-white hover:bg-blue-900 hover:text-white focus:bg-blue-900 focus:text-white focus:outline-none rounded px-2 capitalize" type="button">
                    doa - doa
                </button> -->
            </div>
            <div class="grid grid-cols-1 mb-5">
                <div class="col-span-1 h-56 bg-white mx-5 rounded-lg shadow-lg">
                    <img class="h-32 w-full rounded-t-lg" src="@/assets/1.png" >
                        <h1 class="font-semibold text-sm capitalize mx-3 mt-3">
                            kisah seorang ulama pengembala unta
                        </h1>
                        <h1 class="font-light text-xs mx-3 mt-1">
                            salat merupakan salah satu tanda iman. sesuai dengan level keimanan seorang hamba, dia akan.....
                        </h1>
                </div>
            </div>
            <div class="grid grid-cols-1 mb-5">
                <div class="col-span-1 h-56 bg-white mx-5 rounded-lg shadow-lg">
                    <img class="h-32 w-full rounded-t-lg" src="@/assets/1.png" >
                        <h1 class="font-semibold text-sm capitalize mx-3 mt-3">
                            kisah seorang ulama pengembala unta
                        </h1>
                        <h1 class="font-light text-xs mx-3 mt-1">
                            salat merupakan salah satu tanda iman. sesuai dengan level keimanan seorang hamba, dia akan.....
                        </h1>
                </div>
            </div>
            <div class="grid grid-cols-1 mb-5">
                <div class="col-span-1 h-56 bg-white mx-5 rounded-lg shadow-lg">
                    <img class="h-32 w-full rounded-t-lg" src="@/assets/1.png" >
                        <h1 class="font-semibold text-sm capitalize mx-3 mt-3">
                            kisah seorang ulama pengembala unta
                        </h1>
                        <h1 class="font-light text-xs mx-3 mt-1">
                            salat merupakan salah satu tanda iman. sesuai dengan level keimanan seorang hamba, dia akan.....
                        </h1>
                </div>
            </div>
            <div class="grid grid-cols-1 mb-5">
                <div class="col-span-1 h-56 bg-white mx-5 rounded-lg shadow-lg">
                    <img class="h-32 w-full rounded-t-lg" src="@/assets/1.png" >
                        <h1 class="font-semibold text-sm capitalize mx-3 mt-3">
                            kisah seorang ulama pengembala unta
                        </h1>
                        <h1 class="font-light text-xs mx-3 mt-1">
                            salat merupakan salah satu tanda iman. sesuai dengan level keimanan seorang hamba, dia akan.....
                        </h1>
                </div>
            </div>
            <div class="grid grid-cols-1 mb-5">
                <div class="col-span-1 h-5 bg-white mx-8 mb-10 rounded-lg cursor-pointer">
                    <h1 class="text-gray-700 text-center font-semibold capitalize border border-gray-800 rounded-md py-1">lihat semua</h1>
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
.cart-quantity{
  position: relative;
  align-items: center;
  left: 14px;
  bottom: 30px;
  background:#FF0000;
  border-radius: 50%;
  display: flex;
  font-weight: bold;
  font-size: 12px;
  color: white;
  height: 10px;
  justify-content: center;
  padding: 0.5rem;
  width: 10px;
  cursor: pointer;
}
</style>