<template>
    <div class="bg-blue-900 h-24 mx-5 rounded-lg my-1">
        <div class="grid grid-rows-2 grid-flow-col justify-items-center py-3">
            <div class="row-span-1 bg-white h-12 w-12 rounded-full">
                <img class="mt-3 ml-3" src="@/assets/dompet.svg" alt="">
            </div>
            <div class="row-span-1">
                <h1 class="text-white text-sm capitalize mt-1"> dompet </h1>
            </div>
            <div class="row-span-1 bg-white h-12 w-12 rounded-full">
                <img class="mt-3 ml-3" src="@/assets/Donasi.svg" alt="">
            </div>
            <div class="row-span-1">
                <h1 class="text-white text-sm capitalize mt-1"> donasi </h1>
            </div>
            <div class="row-span-1 bg-white h-12 w-12 rounded-full">
                <img class="mt-3 ml-3" src="@/assets/hadiah.svg" alt="">
            </div>
            <div class="row-span-1">
                <h1 class="text-white text-sm capitalize mt-1"> hadiah </h1>
            </div>
            <div class="row-span-1 bg-white h-12 w-12 rounded-full">
                <router-link to="/dzikir">
                    <img class="mt-3 ml-3" src="@/assets/Dzikir.svg" alt="">
                </router-link>
            </div>
            <div class="row-span-1">
                <h1 class="text-white text-sm capitalize mt-1"> dzikir </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OptionD3H'
}
</script>

<style scoped>

</style>