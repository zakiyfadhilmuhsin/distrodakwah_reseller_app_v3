<template>
    <div class="bg-gray-200">
        <DefaultLayout>
           <!-- navbar -->
            <Navbar />
            <!-- Image Product -->
            <ImgProduct />
            <!-- info produk name-->
            <InfoProduct />
            <Footer />
        </DefaultLayout>
    </div>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout.vue';
import Footer from '@/layout/Footer.vue';

//components
import Navbar from '@/components/DetailProduct/Navbar.vue';
import ImgProduct from '@/components/DetailProduct/ImgProduct.vue';
import InfoProduct from '@/components/DetailProduct/InfoProduct.vue';

export default {
    name: 'DetailProduct',
    components: { 
                    DefaultLayout, 
                    Footer,
                    Navbar,
                    ImgProduct,
                    InfoProduct 
                }
}
</script>

<style scoped>

</style>