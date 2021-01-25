<template>
    <div class="bg-gray-100">
        <div class="mobile-view bg-blue-900">
            <div class="flex justify-center">
                <div class="w-10/12 my-32 bg-gray-200 rounded-md">
                    <div class="mt-5">
                        <h1 class="text-2xl text-center font-semibold capitalize"> login reseller </h1>
                    </div> 
                    <div class="mx-5 my-5">
                      <div class="flex pl-3 pr-1 rounded-md border border-gray-500 bg-white text-sm text-gray-900 font-semibold w-full focus:outline-none">
                        <svg class="h-6 w-6 mt-3 " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10z" fill="#626262"/></svg>
                        <input class="placeholder-gray-700 w-full py-3 px-3 focus:outline-none" type="text" name="" id="" placeholder="Masukan Email">
                      </div>
                      <div class="flex mt-2 pl-3 pr-1 rounded-md border border-gray-500 bg-white text-sm text-gray-900 font-semibold w-full focus:outline-none">
                        <svg class="h-5 w-5 mt-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 9V7a5 5 0 0 1 10 0v2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm8-2v2H7V7a3 3 0 0 1 6 0z" fill="#626262"/></g></svg>
                        <input class="placeholder-gray-700 w-full py-3 px-3 focus:outline-none" type="password" name="" id="" placeholder="Kata Sandi" >
                      </div>
                      <div class="flex justify-between">
                        <label class="my-2">
                          <input type="checkbox" class="text-pink-600"> 
                            <span class="text-sm text-gray-600 font-semibold"> 
                              Ingat Saya
                            </span>
                        </label>
                        <label class="my-2">
                          <a href="#" class="cursor-pointer">
                            <span class="py-2 text-sm text-gray-900 font-semibold">Lupa Password?</span>
                          </a>
                        </label>
                      </div>
                      <button class="flex mt-4 rounded-md bg-blue-900 text-sm text-white font-semibold w-full focus:outline-none hover:bg-gray-800">
                        <span class="w-full py-3"> Masuk </span>
                      </button>
                      <div class="bg-gray-700 mt-5" style="height: 2px;"> </div>
                      <div class="flex justify-center mt-3">
                        <span class="text-sm text-black font-bold capitalize">belum punya akun?</span>
                      </div>
                      <button class="flex mt-4 rounded-md bg-blue-900 text-sm text-white font-semibold w-full focus:outline-none hover:bg-gray-800">
                        <span class="w-full py-3"> Buat Akun </span>
                      </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'Login',
    components: {
        
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