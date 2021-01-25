<template>
    <div>
        <div class="flex justify-center mx-5 my-5">
            <router-link to="/dzikir">
            <button class="px-5 py-2 mr-5 text-xs text-white bg-blue-900 border-2 border-blue-900 hover:bg-blue-900 hover:text-white hover:border-blue-900 focus:border-0 focus:bg-blue-900 focus:border-blue-900 focus:text-white focus:outline-blue-900 rounded py-2 capitalize" type="button">
                dzikir pagi
            </button>
            </router-link>
            <router-link to="/dzikir/petang">
            <button class="px-5 py-2 text-xs text-gray-800 bg-white border-2 border-gray-500 hover:bg-blue-900 hover:text-white hover:border-blue-900 focus:border-0 focus:bg-blue-900 focus:border-blue-900 focus:text-white focus:outline-blue-900 rounded py-2 capitalize" type="button">
                dzikir petang
            </button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OptionDzikir'
}
</script>

<style scoped>

</style>