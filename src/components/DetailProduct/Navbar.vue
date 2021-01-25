<template>
    <div>
        <div class="bg-blue-900 shadow-lg">
            <div class="grid grid-cols-3 mx-3 pt-3 pb-1">
                <div class="col-span-1 w-12">
                    <img class="w-6 h-6 mt-1 mx-5" src="@/assets/arrow-left-white.svg" alt="">
                </div>
                <div class="col-span-1 w-56 -ml-12">
                    <h1 class="text-white text-lg text-center font-semibold capitalize" style="margin-top: 1px;">
                        hodie
                    </h1>
                </div>
                <div class="col-span-1" style="margin-left: 83px;">
                    <img class="w-5 h-5 mt-1" src="@/assets/icon-cart2.svg" alt="">
                    <span class="cart-quantity">0</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.cart-quantity{
  position: relative;
  align-items: center;
  left: 2px;
  bottom: 16px;
  /* background:#FF0000; */
  border-radius: 50%;
  display: flex;
  font-weight: bold;
  font-size: 10px;
  color: white;
  height: 10px;
  justify-content: center;
  padding: 0.5rem;
  width: 10px;
  cursor: pointer;
}
</style>