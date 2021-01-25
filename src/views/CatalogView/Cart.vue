<template>
    <div class="bg-gray-100">
        <DefaultLayout>
            <!-- navbar -->
            <Navbar />
            <!-- detail cart -->
            <DetailCart />
            <Footer />
        </DefaultLayout>
    </div>
</template>

<script>
//layout
import DefaultLayout from '@/layout/DefaultLayout.vue';
import Footer from '@/layout/Footer.vue';

//components
import Navbar from '@/components/cart/Navbar.vue';
import DetailCart from '@/components/cart/DetailCart.vue';

export default {
    name: 'Cart',
    components: { 
                    DefaultLayout, 
                    Footer,
                    Navbar,
                    DetailCart 
                }
}
</script>
<style scoped>

</style>