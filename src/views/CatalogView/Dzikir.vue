<template>
    <div class="bg-gray-200">
        <DefaultLayout>
            <!-- navbar -->
            <Navbar />
            <!-- info coin -->
            <Coin />
            <!-- option dzikir  -->
            <OptionDzikir />
            <!--  -->
            <DzikirPagi />
            <Footer />
        </DefaultLayout>
    </div>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout.vue';
import Footer from '@/layout/Footer.vue';

//components
import Navbar from '@/components/Dzikir/Navbar.vue';
import Coin from '@/components/Dzikir/Coin.vue';
import OptionDzikir from '@/components/Dzikir/OptionDzikir.vue';
import DzikirPagi from '@/components/Dzikir/DzikirPagi.vue';

export default {
    name: 'Dzikir',
    components: { 
                    DefaultLayout, 
                    Footer,
                    Navbar,
                    Coin,
                    OptionDzikir,
                    DzikirPagi 
                }
}
</script>

<style scoped>

</style>