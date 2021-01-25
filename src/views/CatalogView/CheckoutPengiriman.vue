<template>
    <div class="bg-gray-200">
        <DefaultLayout>
            <!-- navbar -->
            <Navbar />
            <!-- info alamat -->
            <AlamatPenerima />
            <!-- pilih pengiriman -->
            <OptionPengiriman />
            <!-- pembayaran -->
            <div class="bg-orange-400 mx-5 mt-5 mb-3 py-1 rounded">
                <button class="flex w-full">
                    <h1 class="text-white text-base ml-16 mr-2 my-auto uppercase"> lanjut ke pembayaran </h1>
                    <svg class="w-8 h-8 my-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); margin-top: 3px;" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42z" fill="white"/>
                    </svg>
                </button>
            </div>
            <Footer />
        </DefaultLayout>
    </div>
</template>

<script>
//layout
import DefaultLayout from '@/layout/DefaultLayout.vue';
import Footer from '@/layout/Footer.vue';

//components
import Navbar from '@/components/CheckoutPengiriman/Navbar.vue';
import AlamatPenerima from '@/components/CheckoutPengiriman/AlamatPenerima.vue';
import OptionPengiriman from '@/components/CheckoutPengiriman/OptionPengiriman.vue';

export default {
    name: 'Checkout',
    components: { 
                    DefaultLayout, 
                    Footer,
                    Navbar,
                    AlamatPenerima,
                    OptionPengiriman
                }
}
</script>

<style scoped>

</style>