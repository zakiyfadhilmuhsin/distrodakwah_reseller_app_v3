<template>
    <div class="bg-gray-200">
        <DefaultLayout>
            <!-- Top Navigation -->
            <Navbar />
            <!-- Pengahasilan Reseller -->
            <PenghasilanReseller />
            <!-- dompet, donasi, dzikir, hadiah -->
            <OptionD3H />
            <!-- slider -->
            <Slider />
            <!-- category product -->
            <CategoryProduct />
            <!-- Flash Sale -->
            <FlashSale />
            <!-- produk terlaris -->
            <Product />
            <!-- berita -->
            <News />
            <Footer />
        </DefaultLayout>
    </div>
</template>

<script>
// layout
import DefaultLayout from '@/layout/DefaultLayout.vue';
import Footer from '@/layout/Footer.vue';

//components
import Navbar from '@/components/storefront/Navbar.vue';
import PenghasilanReseller from '@/components/storefront/PenghasilanReseller.vue';
import OptionD3H from '@/components/storefront/OptionD3H.vue';
import Slider from '@/components/storefront/Slider.vue';
import CategoryProduct from '@/components/storefront/CategoryProduct.vue';
import Product from '@/components/storefront/Product.vue';
import News from '@/components/storefront/News.vue';
import FlashSale from '@/components/storefront/FlashSale.vue';

export default {
    name: 'Storefront',
    components: { 
                    DefaultLayout, 
                    Footer, 
                    Navbar, 
                    PenghasilanReseller,
                    OptionD3H,
                    Slider,
                    CategoryProduct,
                    Product,
                    News,
                    FlashSale 
                },
}
</script>

<style scoped>

</style>