<template>
    <div>
        <!-- kode unik -->
        <div class="flex">
            <label class="flex justify-start items-start ml-5 mr-4  ">
                <div class="bg-white rounded w-4 h-4 flex border-2 border-gray-500 flex-shrink-0 justify-center items-center mt-5 mb-3">
                    <input type="checkbox" class="opacity-0 absolute" checked>
                        <svg class="fill-current absolute border-2 border-orange-400 hidden m-auto w-4 h-4 text-white bg-orange-400 rounded" viewBox="0 0 20 20">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                        </svg>
                </div>
            </label>
            <div class="mt-4">
                <h1 class="text-base text-gray-900 font-semibold">Gunakan Kode Unik</h1>
            </div>
        </div>
        <div class="flex mx-5">
            <h1 class="text-xs text-gray-600">Gunakan Kode Unik ini 349 saat anda melakukan transfer, contoh nominal yang anda transfer jadi Rp. 245.349 </h1>
        </div>
        <div class="my-4" style="background-color: #FFEAC1;">
            <img src="@/assets/Ellipse.svg" alt="">
            <h1 class="italic text-xs -mt-6 pl-2" style="color: #CC8600;">i</h1>
            <div class="px-4 pb-3 mb-3 mr-3">
                <h1 class="text-xs italic" style="color: #6A5D42;">Kode unik ini untuk otomatis konfirmasi pembayaran Anda. Dan akan di kembalikan ke Dompet Anda</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'KodeUnik'
}
</script>

<style scoped>
input:checked + svg {
    display: block;
}
</style>