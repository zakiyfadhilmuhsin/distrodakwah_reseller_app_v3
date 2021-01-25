<template>
    <div>
        <div class="grid grid-cols-4 mt-5 mx-3 gap-1 justify-items-center">
            <!-- tambahin subdepartemen -->
            <button v-for="(n,i) in 4" :key="i" class="col-span-1 bg-orange-300 px-5 py-2 text-xs text-gray-500 rounded-md hover:bg-orange-400 hover:text-white focus:bg-orange-400 focus:text-white capitalize" type="button">
                <div class="grid grid-cols-1 justify-items-center">
                    <img class="mb-1" style="width: 30px;" src="@/assets/image-2.svg">
                        kurta
                </div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>