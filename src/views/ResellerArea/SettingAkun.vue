<template>
    <div class="bg-gray-200">
        <div class="mobile-view bg-white">
            <!-- navbar -->
            <div class="flex">
                <button class="w-1/6 my-5">
                    <img class="w-8 h-6 mt-1 mx-5" src="@/assets/arrow-left.svg" alt="">
                </button>
                <div class="w-5/6 my-5">
                    <h1 class="text-base font-semibold capitalize ml-20 mt-1">
                       edit akun
                    </h1>
                </div>
            </div>
            <div class="bg-gray-100 h-2"></div>
            <!--  -->
            <div class="flex justify-center">
                <div class="mt-5 bg-white border-2 border-orange-400 w-16 h-16 rounded-full">
                    <div class="flex justify-center" style="margin-top: 3px;">
                        <img class="rounded-full" style="width: 54px;" src="@/assets/image-1.svg">
                    </div>
                </div>
            </div>
            <div class="flex justify-center mt-1">
                <h1 class="text-sm text-orange-400 font-semibold">edit foto</h1>
            </div>
            <!-- edit akun -->
            <div class="flex mx-5 mt-5">
                <div class="w-1/3">
                    <h1 class="text-sm font-semibold capitalize" style="color: #B8B8B8;">nama</h1>
                </div>
                <div class="w-2/3">
                    <h1 class="text-sm text-gray-500 font-semibold capitalize" style="color: #373737;">Nurul Huda</h1>
                </div>
            </div>
            <div class="flex mx-5 my-3 divide-y-2 divide-gray-300 divide-dashed">
                <div class="w-1/3">
                    <h1 class="text-sm text-gray-500 font-semibold capitalize mt-4" style="color: #B8B8B8;">alamat</h1>
                </div>
                <div class="w-2/3">
                    <h1 class="text-sm text-gray-500 font-semibold capitalize mt-4" style="color: #373737;">jl. raden mas 17 cirebon aa aa aa aa aa a </h1>
                </div>
            </div>
            <div class="flex mx-5 my-3 divide-y-2 divide-gray-300 divide-dashed">
                <div class="w-1/3">
                    <h1 class="text-sm text-gray-500 font-semibold mt-4" style="color: #B8B8B8;">No. HP</h1>
                </div>
                <div class="w-2/3">
                    <h1 class="text-sm text-gray-500 font-semibold capitalize mt-4" style="color: #373737;">0811 5009 876</h1>
                </div>
            </div>
            <div class="flex mx-5 my-3 divide-y-2 divide-gray-300 divide-dashed">
                <div class="w-1/3">
                    <h1 class="text-sm text-gray-500 font-semibold mt-4" style="color: #B8B8B8;">Keterangan</h1>
                </div>
                <div class="w-2/3">
                    <input class="text-sm text-gray-500 font-semibold capitalize mt-4 italic" type="text" placeholder="tambah catatan">
                </div>
            </div>
            <div class="flex mx-5 my-3 divide-y-2 divide-gray-300 divide-dashed">
                <div class="w-1/3">
                    <h1 class="text-sm text-gray-500 font-semibold mt-4" style="color: #B8B8B8;">Password</h1>
                </div>
                <div class="w-2/3">
                    <input class="text-sm text-gray-500 font-semibold mt-4 " type="password" placeholder="*********">
                </div>
            </div>
            <div class="flex mx-5 my-3 divide-y-2 divide-gray-300 divide-dashed">
                <div class="w-1/3"></div>
                <div class="w-2/3"></div>
            </div>
            <div class="mt-20 flex justify-center">
                <img class="" src="@/assets/logo-moslife.svg" alt="">
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
</style>