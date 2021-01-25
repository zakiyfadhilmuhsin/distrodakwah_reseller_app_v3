<template>
    <div>
        <div class="flex mt-2 mb-4 mx-5 mt-5">
            <button class="flex-wrap mr-2 mx-1 py-2 px-3 text-sm bg-orange-400 text-white hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white rounded-md capitalize">
                <div class="flex">
                    <img class="mr-2 w-4 h-4 mt-1" src="@/assets/icon-1.svg"> 
                    <h1>semua</h1>
                    <span class="bg-blue-900 h-5 w-5 ml-5 rounded-full focus:bg-blue-900" style="margin-top: 2px;">
                        <h1 style="font-size: 11px; margin-top: 1px;">1</h1>
                    </span>
                </div>     
            </button>
            <button class="flex-wrap mr-2 mx-1 py-2 px-3 text-sm bg-orange-200 text-orange-500 hover:bg-orange-400 hover:text-white focus:bg-orange-400 focus:text-white rounded-md capitalize">
                <div class="flex">
                    <img class="mr-2 w-4 h-4 mt-1" src="@/assets/icon-2.svg"> 
                    <h1>belum bayar</h1>
                    <span class="bg-orange-300 h-5 w-5 ml-5 rounded-full focus:bg-blue-900" style="margin-top: 2px;">
                        <h1 style="font-size: 11px; margin-top: 1px;">6</h1>
                    </span>
                </div>     
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OptionOrder'
}
</script>

<style scoped>

</style>