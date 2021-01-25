<template>
    <div>
        <div class="bg-blue-900 rounded-b-3xl">
            <div class="grid grid-cols-3 mx-5 pt-4">
                <div class="col-span-1 w-12">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12z" fill="white"/>
                    </svg>
                </div>
                <div class="col-span-1 w-56 -ml-16">
                    <h1 class="text-white text-lg text-center font-semibold capitalize">
                        Pesanan
                    </h1>
                </div>
            </div>
            <!-- search -->
            <div class="flex px-5 pt-5 pb-5">
                <div class="relative flex w-full flex-wrap items-stretch mb-3 mr-3">
                    <span class="z-10 h-full font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-sm items-center justify-center w-8 pl-3 pt-3">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" fill="gray"/>
                        </svg>
                    </span>
                    <input type="text" placeholder="Cari Invoice" class="rounded-full px-3 py-2 placeholder-gray-700 text-gray-700 relative bg-white text-md shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
                </div>
                <div class="flex-grow">
                    <button class="flex items-center justify-center bg-orange-400 rounded-full w-10 h-10 focus:ouline-none">
                        <img src="@/assets/icon-menu.svg">
                </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>

</style>