<template>
    <div class="bg-gray-200">
        <div class="mobile-view bg-white">
            <!-- navbar -->
            <div class="flex">
                <button class="w-1/6 my-5">
                    <img class="w-6 h-6 mt-1 mx-5" src="@/assets/arrow-left.svg" alt="">
                </button>
                <div class="w-5/6 my-5">
                    <h1 class="text-base font-semibold capitalize ml-20 mt-1">
                       web replika
                    </h1>
                </div>
            </div>
            <!--  -->
            <div class="flex flex-col mx-5">
                <h1 class="text-xs ml-3" style="color: #A4A4A4;">Nama Toko</h1>
                    <div class="py-2 mt-2 mb-3 rounded-lg" style="background: #F7F7F7;">
                        <input class="text-sm text-gray-800 font-semibold px-5 w-full bg-gray-200" style="color: #343434; background: #F7F7F7;" placeholder="Shopback" type="text" name="" id="">
                    </div>
                <h1 class="text-xs ml-3" style="color: #A4A4A4;">Url/Slug</h1>
                    <div class="flex py-2 mt-2 mb-3 rounded-lg" style="background: #F7F7F7;">
                        <input class="text-sm text-gray-800 font-semibold px-5 w-full" style="color: #343434; background: #F7F7F7;"  placeholder="moslife.id/shopback" type="text" name="" id="">
                        <button class="focus:outline-none">
                            <img class="w-4 h-6 mr-3" src="@/assets/icon-copy.svg" alt="">
                        </button>
                    </div>
                <h1 class="text-xs ml-3" style="color: #A4A4A4;">No Hp</h1>
                    <div class="py-2 mt-2 mb-3 rounded-lg" style="background: #F7F7F7;">
                        <input class="text-sm text-gray-800 font-semibold px-5 w-full" style="color: #343434; background: #F7F7F7;"  placeholder="08115009876" type="text" name="" id="">
                    </div>
            </div>
            <div class="flex mt-3">
                <button class="w-1/2 ml-5 mr-3 py-2 rounded-full focus:outline-none" style="background: #5988FF;">
                    <h1 class="text-sm text-white text-center uppercase">kunjungi link</h1>
                </button>
                <button class="w-1/2 mr-5 py-2 rounded-full focus:outline-none" style="background: #181818;">
                    <h1 class="text-sm text-white text-center uppercase">kunjungi link</h1>
                </button>
            </div>
            <div class="mt-16">
                <h1 class="text-xs text-gray-500 text-center">Share Web Replika</h1>
            </div>
            <div class="flex mx-5 my-8">
                <button class="focus:outline-none">
                    <img class="mr-6" src="@/assets/gmail.svg" alt="">
                </button>
                <button class="focus:outline-none">
                    <img class="mr-6" src="@/assets/facebook.svg" alt="">
                </button>
                <button class="focus:outline-none">
                    <img class="mr-6" src="@/assets/twitter.svg" alt="">
                </button>
                <button class="focus:outline-none">
                    <img class="mr-6" src="@/assets/telegram.svg" alt="">
                </button>
                <button class="focus:outline-none">
                    <img class="" src="@/assets/whatsapp.svg" alt="">
                </button>
            </div>
            <div class="my-10 flex justify-center">
                <img class="" src="@/assets/logo-moslife.svg" alt="">
            </div>
            <br/>
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
</style>