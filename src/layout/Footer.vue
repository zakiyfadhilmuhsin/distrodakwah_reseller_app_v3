<template>
  <section>
    <div class="bg-white mt-8 shadow">
        <div class="flex py-1">
            <router-link to="/">
                <button class="focus:outline-none">
                    <svg class="w-6 h-6 mt-2 ml-8" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></g></svg>
                </button>
            </router-link>
            <router-link to="/cart">
                <button class="focus:outline-none">
                    <svg class="w-6 h-6 mt-2 ml-16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm-8 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
                </button>
            </router-link>
            <router-link to="/listOrder">
                <button class="focus:outline-none">
                    <svg class="w-6 h-6 mt-2 ml-16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g class="icon-tabler" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><path d="M9 7h1"/><path d="M9 13h6"/><path d="M13 17h2"/></g></svg>
                </button>
            </router-link>
            <router-link to="/pesanan">
                <button class="focus:outline-none">
                    <svg class="w-6 h-6 mt-2 ml-16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M.75 7.5h9.75l.75 1.5H1.5L.75 7.5m1 3h9.75l.75 1.5H2.5l-.75-1.5m16.25 8c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46L19.5 9.5M8 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3h-4c0 1.66-1.35 3-3 3c-1.66 0-3-1.34-3-3H3v-3.5h2V15h.76c.55-.61 1.35-1 2.24-1c.89 0 1.69.39 2.24 1H15V6H3c0-1.11.89-2 2-2h12v4h3z" fill="black"/></svg>
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
