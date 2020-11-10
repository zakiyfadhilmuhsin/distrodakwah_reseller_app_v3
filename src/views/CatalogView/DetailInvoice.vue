<template>
    <div class="bg-gray-200">
        <div class="mobile-view bg-gray-100">
            <!-- navbar -->
            <div class="flex">
                <button class="w-1/6 my-5">
                    <img class="w-8 h-6 mt-1 mx-5" src="@/assets/arrow-left.svg" alt="">
                </button>
                <div class="w-5/6 my-5">
                    <h1 class="text-lg font-semibold capitalize ml-20">
                        Detail Invoice
                    </h1>
                </div>
            </div>
            <!-- detail invoice -->
            <div class="bg-white shadow rounded-xl mx-5 my-5">
                <div class="divide-y divide-gray-400 divide-dashed">
                    <div class="flex text-center py-2 mx-5 my-3">
                        <h1 class="w-1/2 mt-3 text-sm text-left text-gray-800 font-medium">HDY229 - Death</h1>
                        <h1 class="w-1/2 mt-3 text-sm text-right" style="color:  #FF4444;">#INV0020145</h1>
                    </div>
                    <div class="text-center py-2 mx-5"></div>
                </div>
                <div class="flex mx-5 mt-2">
                    <h1 class="w-1/2 text-sm text-left text-gray-500 font-semibold capitalize">pengiriman</h1>
                    <h1 class="w-1/2 text-sm text-right text-gray-500 font-semibold capitalize">Penerima</h1>
                </div>
                <div class="flex mx-5 mb-1">
                    <h1 class="w-1/2 text-base text-left text-gray-800 font-semibold capitalize">nurul huda</h1>
                    <h1 class="w-1/2 text-base text-right text-gray-800 font-semibold capitalize">Dendra Hasnim</h1>
                </div>
                <div class="flex mx-5 mb-1">
                    <h1 class="w-1/2 text-left text-gray-700 font-medium capitalize" style="font-size: 12px;">081216171920</h1>
                    <h1 class="w-1/2 text-right text-gray-700 font-medium capitalize" style="font-size: 12px;">087893450999</h1>
                </div>
                <div class="flex mx-5 mb-1">
                    <h1 class="w-1/2 text-left text-gray-700 font-medium capitalize" style="font-size: 11px;">gudang pusat</h1>
                    <h1 class="w-1/2 text-right text-gray-700 font-medium capitalize" style="font-size: 11px;">Jl. Angkasa Raya 12 No.230 Ciherang Majalaya</h1>
                </div>
                <table class="mx-5 my-3 rounded-lg">
                    <thead>
                        <tr>
                            <th class="border border-gray-400 w-24 py-2 text-gray-500 text-xs">Qty</th>
                            <th class="border border-gray-400 w-24 py-2 text-gray-500 text-xs">Harga</th>
                            <th class="border border-gray-400 w-24 py-2 text-gray-500 text-xs">Status</th>
                        </tr>
                        <tr>
                            <th class="border border-gray-400 w-24 py-2 text-gray-800 text-xs">1</th>
                            <th class="border border-gray-400 w-24 py-2 text-gray-800 text-xs">Rp. 245.000</th>
                            <th class="border border-gray-400 w-24 py-2 text-xs font-normal" style="color: #D65504;">Belum Bayar</th>
                        </tr>
                    </thead>
                </table>
                <div class="flex">
                    <div class="star-rating ml-3 gap-1">
                        <input type="radio" id="5-stars" name="rating" value="5"/>
                            <label for="5-stars" class="star">&#9733;</label>
                        <input type="radio" id="4-stars" name="rating" value="4"/>
                            <label for="4-stars" class="star">&#9733;</label>
                        <input type="radio" id="3-stars" name="rating" value="3"/>
                            <label for="3-stars" class="star">&#9733;</label>
                        <input type="radio" id="2-stars" name="rating" value="2"/>
                            <label for="2-stars" class="star">&#9733;</label>
                        <input type="radio" id="1-star" name="rating" value="1"/>
                            <label for="1-star" class="star">&#9733;</label>
                    </div>
                    <h1 class="text-sm text-gray-800 ml-4 mt-5"> Beri nilai yuk produknya..</h1>
                </div>
            </div>
            <!-- button return dan refund -->
            <div class="flex">
                <button class="w-1/2 ml-5 mr-2 mt-5 py-2 rounded-full" style="background: #C4C4C4;">
                    <h1 class="text-base text-white text-center font-medium uppercase">retur</h1>
                </button>
                <button class="w-1/2 mt-5 ml-2 mr-5 py-2 rounded-full" style="background: #C4C4C4;">
                    <h1 class="text-base text-white text-center font-medium uppercase">refund</h1>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.mobile-view {
    width: 360px;
    min-height: 100vh;
    margin-right: auto;
    margin-left: auto;
}

.star-rating {
  display:flex;
  flex-direction: row-reverse;
  font-size:40px;
  justify-content:space-around;
  padding:5px;
  text-align:center;
  width:5em;
  /* margin-top: -10px; */
  margin-bottom: 30px;
}

.star-rating input {
  display:none;
}

.star-rating label {
  color:#ccc;
  cursor:pointer;
}

.star-rating :checked ~ label {
  color:#fc0;
}

.star-rating label:hover,
.star-rating label:hover ~ label {
  color:#fc0;
}
</style>