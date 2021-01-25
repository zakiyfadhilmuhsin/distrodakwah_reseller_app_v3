<template>
    <div class="bg-gray-100">
        <DefaultLayout>
            <!-- Navbar -->
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
                    <div class="flex pb-1 ml-8">
                        <img class="ml-8" src="@/assets/ceklis.svg">
                    </div>
                    <div class="flex pb-5">
                        <div class="w-1/2">
                            <div class="flex justify-start text-xs text-white capitalize ml-8">pencairan dana</div>
                        </div>
                        <div class="w-1/2">
                            <div class="flex justify-end text-xs text-white capitalize mr-8">konfirmasi pembayaran</div>
                        </div>
                    </div>
                </div>
                <!-- pembayaran -->
                <div style="background-color: #FFFBF3;">
                    <div class="flex flex-col mb-4">
                        <div class="w-full ">
                            <h1 class="text-sm text-gray-900 font-semibold capitalize ml-5 mt-3">keterangan pengiriman</h1>
                        </div>
                    </div>
                    <!--  -->
                    <div class="grid grid-rows-2 grid-flow-col gap-3 mx-5">
                        <div class="row-span-1 col-span-1">
                            <h1 class="text-sm text-gray-800 capitalize">Nama Rekening</h1>
                            <h1 class="text-xs text-white capitalize py-1 px-1 rounded" style="background-color: #FF9903;">Chiera</h1>
                        </div>
                        <div class="row-span-1 col-span-1">
                            <h1 class="text-sm text-gray-800 capitalize">nomor rekening</h1>
                            <h1 class="text-xs text-white capitalize py-1 px-1 rounded" style="background-color: #FF9903;">3740936831</h1>
                        </div>
                        <div class="row-span-1 col-span-1">
                            <h1 class="text-sm text-gray-800 capitalize">Nama bank</h1>
                            <h1 class="text-xs text-white uppercase py-1 px-1 rounded" style="background-color: #FF9903;">bca</h1>
                        </div>
                        <div class="row-span-1 col-span-1">
                            <h1 class="text-sm text-gray-800 capitalize">tipe vendor</h1>
                            <h1 class="text-xs text-white capitalize py-1 px-1 rounded" style="background-color: #FF9903;">konsinyasi</h1>
                        </div>
                    </div>
                    <!--  -->
                    <div class="mt-3 h-2 w-full" style="background-color: #FFF2D9;"></div>
                    <!-- keterangan penerima -->
                    <div class="flex flex-col mx-5 mt-4">
                        <h1 class="text-xs text-gray-900 font-semibold capitalize mb-1">total pencairan dana</h1>
                        <h1 class="text-2xl text-gray-900 font-bold capitalize mb-1">Rp. 5.000.000</h1>
                    </div>
                    <div class="mt-3 h-2 w-full bg-gray-100"></div>
                    <!--  -->
                    <div class="mt-5 mx-5">
                        <button class="py-2 w-full rounded-md focus:outline-none" style="background: orange;">
                            <h1 class="text-sm text-white text-center font-semibold capitalize">konfirmasi pencairan dana</h1>
                        </button>
                    </div>
                    <!--  -->
                </div>
            <Footer />
        </DefaultLayout>
    </div>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout.vue';
import Footer from '@/layout/Footer.vue';

export default {
    name: 'KomisiPencairan',
    components: {
        DefaultLayout,
        Footer
    }
}
</script>

<style scoped>

</style>