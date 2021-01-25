<template>
    <div class="bg-gray-200">
        <DefaultLayout>
            <!-- navbar -->
            <Navbar />
            <!-- detail invoice -->
            <InfoInvoice />
            <!-- button return dan refund -->
            <div class="flex">
                <button class="w-1/2 ml-5 mr-2 mt-5 py-2 rounded-full focus:outline-none" style="background: #C4C4C4;">
                    <h1 class="text-base text-white text-center font-medium uppercase">retur</h1>
                </button>
                <button class="w-1/2 mt-5 ml-2 mr-5 py-2 rounded-full focus:outline-none" style="background: #C4C4C4;">
                    <h1 class="text-base text-white text-center font-medium uppercase">refund</h1>
                </button>
            </div>
            <Footer />
        </DefaultLayout>
    </div>
</template>

<script>
//Layout
import DefaultLayout from '@/layout/DefaultLayout.vue';
import Footer from '@/layout/Footer.vue';

//Components
import Navbar from '@/components/DetailInvoice/Navbar.vue';
import InfoInvoice from '@/components/DetailInvoice/InfoInvoice.vue';

export default {
    name: 'DetailInvoice',
    components: { 
                    DefaultLayout, 
                    Footer,
                    Navbar,
                    InfoInvoice
                }
}
</script>

<style scoped>

</style>