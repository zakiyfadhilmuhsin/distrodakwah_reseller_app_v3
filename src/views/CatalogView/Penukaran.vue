<template>
    <div class="bg-gray-200">
        <div class="mobile-view bg-white">
            <!-- navbar -->
            <div class="flex bg-gray-100">
                <button class="w-1/6 my-5">
                    <img class="w-8 h-6 mt-1 mx-5" src="@/assets/arrow-left.svg" alt="">
                </button>
                <div class="w-5/6 my-5">
                    <h1 class="text-lg capitalize ml-20">
                        Penukaran
                    </h1>
                </div>
            </div>
            <!--  -->
            <div class="flex mt-12">
                <button class="w-1/2 h-2 text-sm bg-gray-100 text-gray-400 hover:bg-orange-400 hover:text-orange-400 focus:bg-orange-400 focus:text-orange-400 focus:outline-none capitalize">
                    <h1 class="text-base text-center capitalize -mt-10">refund</h1>
                </button>
                <button class="w-1/2 h-2 text-sm bg-gray-100 text-gray-400 hover:bg-orange-400 hover:text-orange-400 focus:bg-orange-400 focus:text-orange-400 focus:outline-none capitalize">
                    <h1 class="text-base text-center capitalize -mt-10">retur</h1>
                </button>
            </div>
            <!--  -->
            <div class="flex flex-col mt-5 mx-5">
                <h1 class="text-sm text-gray-800 capitalize mb-2">alasan refund :</h1>
                <div class="flex flex-wrap">
                    <button class="mt-2 mr-4 mb-2 h-8 bg-white border border-gray-800 hover:bg-blue-900 hover:text-white focus:bg-blue-900 focus:text-white focus:outline-none capitalize" style="width: 140px;">
                        <h1 class="text-xs capitalize">Barang Telat Dikirim</h1>
                    </button>
                    <button class="mt-2 mr-3 mb-2 h-8 bg-white border border-gray-800 hover:bg-blue-900 hover:text-white focus:bg-blue-900 focus:text-white focus:outline-none capitalize" style="width: 140px;">
                        <h1 class="text-xs capitalize">Order dibatalkan</h1>
                    </button>
                    <button class="mt-2 mr-3 mb-2 h-8 bg-white border border-gray-800 hover:bg-blue-900 hover:text-white focus:bg-blue-900 focus:text-white focus:outline-none capitalize" style="width: 140px;">
                        <h1 class="text-xs capitalize">kelebihan transfer</h1>
                    </button>
                </div>
            </div>
            <!-- upload gambar -->
            <div class="flex mx-5 mb-5 mt-5 gap-3 justify-center">
                <div class="bg-gray-100 w-full h-32 rounded">
                    <div v-if="image"> 
                        <img :src="image" class="w-auto h-auto"/> 
                    </div>
                    <div class="flex justify-center my-8">
                        <input name="photo" id="upload" accept="image/*" class="mt-10 ml-6 hidden" type="file" @change="upload">
                            <label for="upload" type="button" class="cursor-pointer text-left text-gray-600 font-medium py-2 px-4 hover:bg-gray-100 focus:outline-none">
                                <svg class="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="0" y="0" width="0" height="0" stroke="none"> </rect>
                                    <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" /><circle cx="12" cy="13" r="3" />
                                </svg>						
                                Upload Gambar
                            </label> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {   
        return {
            image : null,
        }

    },
    methods:{
        upload(e) {
            console.log(e.target, "ini console.log")
            const upload = e.target.files[0]
            const file = upload
            this.image = URL.createObjectURL(file)

        }
    }
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