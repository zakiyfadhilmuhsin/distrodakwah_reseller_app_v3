<template>
    <div class="bg-gray-200">
        <DefaultLayout>
                <!-- navbar -->
                <Navbar />
                <!-- Option -->
                <OptionOrder />
                <!-- info Pesanan -->
                <InfoPesanan />
            <Footer />
        </DefaultLayout>
    </div>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout.vue';
import Footer from '@/layout/Footer.vue';

//components
import Navbar from '@/components/OrderList/Navbar.vue';
import OptionOrder from '@/components/OrderList/OptionOrder.vue';
import InfoPesanan from '@/components/OrderList/InfoPesanan.vue';

export default {
    name: 'ListOrder',
    components: { 
                    DefaultLayout, 
                    Footer,
                    Navbar,
                    OptionOrder,
                    InfoPesanan 
                }
}
</script>

<style scoped>

</style>