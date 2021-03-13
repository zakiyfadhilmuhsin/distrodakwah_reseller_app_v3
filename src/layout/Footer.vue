<template>
  <section>
    <div class="bg-white mt-8 shadow">
        <div class="flex py-1">
            <router-link to="/">
                <button class="focus:outline-none">
                    <svg class="w-6 h-6 mt-2 ml-8" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></g></svg>
                </button>
            </router-link>
            <router-link to="/">
                <button class="focus:outline-none">
                    <img class="w-6 h-6 mt-2 ml-16" src="@/assets/icon-chat.svg" alt="">
                </button>
            </router-link>
            <router-link to="/orderlist">
                <button class="focus:outline-none">
                    <img class="w-6 h-6 mt-2 ml-16" src="@/assets/icon-transaksi.svg" alt="">
                </button>
            </router-link>
            <router-link to="/dashboard">
                <button class="focus:outline-none">
                    <img class="w-6 h-6 mt-2 ml-16" src="@/assets/icon-profile.svg" alt="">
                </button>
            </router-link>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "Footer"
};
</script>

<style></style>
