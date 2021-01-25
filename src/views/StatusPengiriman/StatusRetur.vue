<template>
    <div class="bg-gray-100">
        <DefaultLayout>
            <!-- Navbar -->
                <div class="flex bg-blue-900">
                    <router-link to="/">
                        <button class="my-5 ml-5 focus:outline-none">
                            <svg class="w-6 h-6 " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12z" fill="white"/>
                            </svg>
                        </button>
                    </router-link>
                    <div class="w-5/6 my-5">
                        <h1 class="text-base text-white text-center capitalize ">
                        status penjualan
                        </h1>
                    </div>
                </div>
                <!--  -->
                <div class="flex flex justify-center">
                    <router-link to="/pesanan">
                        <button class="mt-12 h-1 w-full text-sm text-gray-500 text-center capitalize bg-gray-300 hover:bg-orange-400 hover:text-orange-400 focus:bg-orange-400 focus:text-orange-400 focus:outline-none" style="width: 72px;">
                            <h1 class="text-center capitalize -mt-8">pesanan</h1>
                        </button>
                    </router-link>
                    <router-link to="/dikemas">
                        <button class="mt-12 h-1 w-full text-sm text-gray-500 text-center capitalize bg-gray-300 hover:bg-orange-400 hover:text-orange-400 focus:bg-orange-400 focus:text-orange-400 focus:outline-none" style="width: 72px;">
                            <h1 class="text-center capitalize -mt-8">Dikemas</h1>
                        </button>
                    </router-link>
                    <router-link to="/dikirim">
                        <button class="mt-12 h-1 w-full text-sm text-gray-500 text-center capitalize bg-gray-300 hover:bg-orange-400 hover:text-orange-400 focus:bg-orange-400 focus:text-orange-400 focus:outline-none" style="width: 72px;">
                            <h1 class="text-center capitalize -mt-8">Dikirim</h1>
                        </button>
                    </router-link>
                    <router-link to="">
                        <button class="mt-12 h-1 w-full text-sm text-orange-400 text-center capitalize bg-orange-400 hover:bg-orange-400 hover:text-orange-400 focus:bg-orange-400 focus:text-orange-400 focus:outline-none" style="width: 72px;">
                            <h1 class="text-center capitalize -mt-8">Retur</h1>
                        </button>
                    </router-link>
                    <router-link to="/selesai">
                        <button class="mt-12 h-1 w-full text-sm text-gray-500 text-center capitalize bg-gray-300 hover:bg-orange-400 hover:text-orange-400 focus:bg-orange-400 focus:text-orange-400 focus:outline-none" style="width: 72px;">
                            <h1 class="text-center capitalize -mt-8">selesai</h1>
                        </button>
                    </router-link>
                </div>
                <div class="bg-gray-100 h-2 w-full"></div>
                <!--  -->
                <div v-for="(n,i) in 2" :key="i">
                    <div class="flex mt-3 mx-3">
                        <div class="w-1/2">
                            <h1 class="text-xs text-orange-400 font-semibold uppercase italic">Dd-InV005277</h1>
                        </div>
                        <div class="w-1/2">
                            <h1 class="text-xs text-right text-orange-400 capitalize italic">retur</h1>
                        </div>
                    </div>
                    <!--  -->
                    <div class="grid grid-rows-2 grid-flow-col mx-3 my-5">
                        <div class="row-span-2 w-16">
                            <img class="w-16 h-16" src="@/assets/1.jpg" style="margin-left: 3px;">
                        </div>
                        <div class="row-span-1" style="width: 150px;">
                            <h1 class="text-xs font-semibold ml-3">HDY229 - Death</h1>
                        </div>
                        <div class="row-span-1" style="width: 150px;">
                            <div class="flex">
                                <h1 class="text-gray-500 capitalize mr-1 ml-3 -mt-3" style="font-size: 11px;">Merah,M</h1>
                            </div>
                        </div>
                        <div class="row-span-1 w-20">
                            <div class="flex justify-end">
                                <h1 class="text-xs text-right font-semibold mr-1">10</h1>
                                <h1 class="text-xs text-right text-gray-500 font-semibold">item</h1>
                            </div>
                        </div>  
                        <div class="row-span-1 w-20">
                            <div class="flex justify-end">
                                <h1 class="text-xs text-right font-semibold mt-3">Rp. 110.000</h1>
                            </div>
                        </div> 
                    </div>
                    <!--  -->
                    <div class="grid grid-cols-1 divide-y divide-gray-500 mx-3">
                        <div></div>
                        <div class="flex py-1">
                            <div class="w-1/3">
                                <h1 class="text-xs text-gray-500">10 item</h1>
                            </div>
                            <div class="w-2/3 flex flex justify-end">
                                <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M14 2a8 8 0 0 1 3.292 15.293A8 8 0 1 1 6.706 6.707A8.003 8.003 0 0 1 14 2zm-4 6a6 6 0 1 0 0 12a6 6 0 0 0 0-12zm1 1v1h2v2H9a.5.5 0 0 0-.09.992L9 13h2a2.5 2.5 0 1 1 0 5v1H9v-1H7v-2h4a.5.5 0 0 0 .09-.992L11 15H9a2.5 2.5 0 1 1 0-5V9h2zm3-5a5.985 5.985 0 0 0-4.484 2.013a8 8 0 0 1 8.47 8.471A6 6 0 0 0 14 4z" fill="orange"/></svg>
                                <h1 class="text-sm text-gray-500 font-semibold capitalize mr-2">total pesanan: </h1>
                                <h1 class="text-sm font-semibold capitalize mr-1" style="color: orange;">Rp. 1.100.000</h1>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex">
                                <img class="w-16 h-16 mt-3 ml-2" src="@/assets/1.jpg" alt="">
                                <img class="w-16 h-16 mt-3 ml-2" src="@/assets/1.jpg" alt="">
                            </div>
                            <h1 class="text-sm text-gray-900 font-semibold capitalize ml-2 mt-2">keterangan retur</h1>
                            <h1 class="text-sm text-gray-500 ml-2">baju yang dikirim salah warna</h1>
                        </div>
                    </div>      
                    <div class="bg-gray-100 h-2 mt-4"></div>
                </div>
            <Footer />
        </DefaultLayout>
    </div>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout.vue';
import Footer from '@/layout/Footer.vue';

export default {
    name:'StatusRetur',
    components: {
        DefaultLayout,
        Footer
    }
}
</script>

<style scoped>

</style>