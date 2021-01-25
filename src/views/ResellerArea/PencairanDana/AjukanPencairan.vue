<template>
    <div class="bg-gray-100">
        <DefaultLayout>
            <!-- navbar -->
                <div class="bg-blue-900">
                    <div class="flex mx-5 pt-4 pb-6">
                        <div class="ml-3">
                            <img class="w-6 h-6 mt-1" src="@/assets/arrow-left-white.svg" alt="">
                        </div>
                        <div class="ml-16">
                            <h1 class="text-white text-lg text-center font-semibold capitalize" style="margin-top: 1px;">
                                Pencairan Dana
                            </h1>
                        </div>
                    </div>    
                </div>
                <!--  -->
                <div class="bg-blue-900">
                    <div class="flex pb-5">
                        <div class="w-1/2">
                            <div class="flex justify-start text-xs text-white capitalize ml-8">pencairan dana</div>
                        </div>
                        <div class="w-1/2">
                            <div class="flex justify-end text-xs text-white capitalize mr-8">konfirmasi pembayaran</div>
                        </div>
                    </div>
                </div>
                <div class="my-4" style="background-color: #FFEAC1;">
                    <img src="@/assets/Ellipse.svg" alt="">
                    <h1 class="italic text-xs -mt-6 pl-2" style="color: #CC8600;">i</h1>
                    <div class="px-5 pb-3 mb-3">
                        <h1 class="text-xs italic" style="color: #6A5D42;">Pencairan Dana dapat di proses setiap Hari Senin & Kamis Input Dana yang akan di Cairkan sebelum Pukul 15.00 WIB</h1>
                    </div>
                </div>
                <!--  -->
                <div class="flex flex-col mb-4">
                    <div class="w-full ">
                        <h1 class="text-sm text-gray-900 font-semibold capitalize ml-5 mt-2">pilih bank :</h1>
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
                <div class="mt-5 h-2 w-full bg-gray-100"></div>
                <!--  -->
                <div class="mx-5 mt-5 divide-y divide-gray-400">
                    <div class="mb-2">
                        <h1 class="text-xs font-semibold uppercase mb-2" style="color: #B8B8B8;">nama bank :</h1>
                        <h1 class="text-xs text-gray-500 font-semibold uppercase" style="color: #373737;">BCA</h1>
                    </div>
                    <div class="mb-2">
                        <h1 class="text-xs text-gray-500 font-semibold uppercase mt-2" style="color: #B8B8B8;">nama rekening</h1>
                        <input class="text-xs text-gray-500 font-semibold w-full mt-2 focus:outline-none" style="color: #373737;" type="text" name="" id="" placeholder="nama">
                    </div>
                    <div class="mb-2">
                        <h1 class="text-xs text-gray-500 font-semibold uppercase mt-2" style="color: #B8B8B8;">nomor rekening</h1>
                        <input class="text-xs text-gray-500 font-semibold w-full mt-2 focus:outline-none" style="color: #373737;" type="text" name="" id="" placeholder="nomor">
                    </div>
                    <div class="mb-2">
                        <h1 class="text-xs text-gray-500 font-semibold uppercase mt-5" style="color: #B8B8B8;">tipe vendor</h1>
                        <select class="w-full mt-2 text-xs" style="margin-left: -4px;">
                            <option class="text-xs" >Konsinyasi</option>
                            <option>Dropship</option>
                        </select>
                    </div>
                    <div class="">
                        <h1 class="text-xs text-gray-500 font-semibold uppercase mt-4" style="color: #B8B8B8;">total dana yang ingin dicairkan</h1>
                        <div class="flex mb-2">
                            <h1 class="text-xs font-semibold mt-2">Rp.</h1>
                            <input class="text-xs font-semibold w-full mt-2 pl-2 focus:outline-none" type="text" name="" id="">
                        </div>
                    </div>
                    <div></div>
                </div>
                <!--  -->
                <div class="my-8">
                    <div class="bg-blue-900 py-1 px-1 rounded">
                        <h1 class="text-sm text-white text-center font-medium border-dashed border-2 py-2 px-1 border-white rounded capitalize">total pencairan dana: Rp. 5.000.000</h1>
                    </div>
                </div>
                <div class="bg-gray-100 h-2"></div>
                <!--  -->
                <div class="mt-5 mx-5">
                    <button class="py-2 w-full rounded-md focus:outline-none" style="background: orange;">
                        <h1 class="text-sm text-white text-center font-semibold capitalize">ajukan pencairan dana</h1>
                    </button>
                </div>
                <!--  -->
            <Footer />
        </DefaultLayout>
    </div>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout.vue';
import Footer from '@/layout/Footer.vue';

export default {
    name: 'AjukanPencairan',
    components: {
        DefaultLayout,
        Footer
    }
}
</script>

<style scoped>

</style>