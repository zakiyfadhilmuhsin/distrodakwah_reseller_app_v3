<template>
    <div class="bg-gray-100">
        <DefaultLayout>
            <!-- navbar -->
            <Navbar />
            <!-- kategori product -->
            <CategoryProduct />
            <!-- product populer -->
            <Product />
            <Footer />  
        </DefaultLayout>
    </div>
</template>

<script>
// layout
import DefaultLayout from '@/layout/DefaultLayout.vue';
import Footer from '@/layout/Footer.vue';

//components
import Navbar from '@/components/allproduct/Navbar.vue';
import CategoryProduct from '@/components/allproduct/CategoryProduct.vue';
import Product from '@/components/allproduct/Product.vue';

export default {
    name: 'AllProduct',
    components: { 
                    DefaultLayout, 
                    Footer,
                    Navbar,
                    CategoryProduct,
                    Product
                }
}
</script>

<style scoped>

</style>