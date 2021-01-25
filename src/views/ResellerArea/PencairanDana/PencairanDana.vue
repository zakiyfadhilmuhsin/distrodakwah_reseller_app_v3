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
                <!-- Saldo Akumulasi -->
                <div class="bg-blue-900">
                    <div class="flex flex-col">
                        <h1 class="text-white text-xs text-center">saldo akumulasi</h1>
                        <h1 class="text-white text-4xl text-center font-bold">Rp. 10.000.000</h1>
                        <div class="grid grid-cols-2 divide-x divide-gray-400 pt-3 pb-6">
                            <div>
                                <h1 class="text-xs text-white text-center capitalize">saldo konsinyasi</h1>
                                <h1 class="text-lg text-white text-center font-semibold capitalize">Rp. 7.000.000</h1>
                            </div>
                            <div>
                                <h1 class="text-xs text-white text-center capitalize">saldo dropship</h1>
                                <h1 class="text-lg text-white text-center font-semibold capitalize">Rp. 3.000.000</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div class="flex flex-col px-5 pt-5">
                    <h1 class="text-sm text-gray-800 font-semibold capitalize">Total Pencairan</h1>
                    <div class="bg-gray-200 rounded-md w-full px-3 py-1 mt-1">
                        <h1 class="text-sm text-gray-800 font-semibold">Rp. 0</h1>
                    </div>
                    <h1 class="text-sm text-gray-800 font-semibold capitalize mt-3">sisa akumulasi saldo</h1>
                    <div class="bg-gray-200 rounded-md w-full px-3 py-1 mt-1">
                    <h1 class="text-sm text-gray-800 font-semibold">Rp. 10.000.000</h1>
                    </div>
                </div>
                <!--  -->
                <div class="bg-white shadow p-1 mt-3 mx-5 rounded">
                    <div class="bg-white border-dashed border-2 border-gray-700 rounded">
                        <div class="flex flex-col">
                            <h1 class="text-xs text-center pt-1">sisa saldo detail</h1>
                            <div class="grid grid-cols-2 divide-x divide-gray-400 pt-2 pb-1">
                                <div>
                                    <h1 class="text-xs text-center capitalize">saldo konsinyasi</h1>
                                    <h1 class="text-base text-center font-semibold capitalize">Rp. 7.000.000</h1>
                                </div>
                                <div>
                                    <h1 class="text-xs text-center capitalize">saldo dropship</h1>
                                    <h1 class="text-base text-center font-semibold capitalize">Rp. 3.000.000</h1>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <!--  -->
                <div class="mt-5 mx-5">
                    <router-link to="/ajukanPencairan">
                    <button class="py-1 w-full rounded-md focus:outline-none" style="background: orange;">
                        <h1 class="text-sm text-white text-center font-semibold capitalize">ajukan pencairan dana</h1>
                    </button>
                    </router-link>
                </div>
                <div class="h-1 bg-gray-300 mt-5"></div>
                <!--  -->
                <table class="table-fixed mt-5 mx-5">
                    <thead>
                        <tr>
                        <th class="border text-xs text-gray-500 font-normal capitalize px-2 py-2">tanggal pengajuan</th>
                        <th class="border text-xs text-gray-500 font-normal capitalize px-2 py-2">total pencairan dana</th>
                        <th class="border text-xs text-gray-500 font-normal capitalize px-2 py-2">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td class="border text-xs text-gray-900 font-bold capitalize px-2 py-2">27-11-2020</td>
                        <td class="border text-xs text-gray-900 font-bold capitalize px-2 py-2">Rp. 5.000.000</td>
                        <td class="border text-xs text-gray-900 font-bold capitalize px-2 py-2">
                            <div class="rounded-full" style="background: #D1FFC1;;">
                                <h1 class="text-xs text-center px-2" style="color: #33B800;">selesai</h1>
                            </div>
                        </td>
                        </tr>
                        <!-- <tr>
                        <td class="border px-4 py-2"></td>
                        <td class="border px-4 py-2">Adam</td>
                        <td class="border px-4 py-2">112</td>
                        </tr>
                        <tr>
                        <td class="border px-4 py-2"></td>
                        <td class="border px-4 py-2">Chris</td>
                        <td class="border px-4 py-2">1,280</td>
                        </tr> -->
                    </tbody>
                </table>
            <Footer />
        </DefaultLayout>
    </div>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout.vue';
import Footer from '@/layout/Footer.vue';

export default {
    name: 'PencairanDana',
    components: {
        DefaultLayout,
        Footer
    }
}
</script>

<style scoped>

</style>