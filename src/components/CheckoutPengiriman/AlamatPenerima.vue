<template>
    <div>
        <div class="flex mt-3 mb-5">
            <div class="w-1/2 ">
                <h1 class="text-sm text-gray-800 font-semibold capitalize ml-5">penerima</h1>
            </div>
            <div class="w-1/2 ">
            <h1 class="text-sm text-right font-semibold mr-5" style="color: orange;">Sudah ada ?</h1>
            </div>
        </div>
        <div class="flex mx-5 mt-2">
            <div class="w-1/3">
                <h1 class="text-sm font-semibold uppercase" style="color: #B8B8B8;">nama</h1>
            </div>
            <div class="w-2/3">
                <input class="text-sm text-gray-900 font-medium border-none w-full mb-1 -mt-1 focus:outline-none" type="text">
            </div>
        </div>
        <div class="flex mx-5 my-1 divide-y-2 divide-gray-300 divide-dashed">
            <div class="w-1/3">
                <h1 class="text-sm text-gray-500 font-semibold uppercase mt-4" style="color: #B8B8B8;">no. hp</h1>
            </div>
            <div class="w-2/3">
                <input class="text-sm text-gray-900 font-medium border-none mt-4 focus:outline-none" type="text">
            </div>
        </div>
        <div class="flex mx-5 my-2 divide-y-2 divide-gray-300 divide-dashed">
            <div class="w-1/3">
                <h1 class="text-sm text-gray-500 font-semibold uppercase mt-5" style="color: #B8B8B8;">alamat</h1>
            </div>
            <div class="w-2/3">
                <input class="text-sm text-gray-900 font-medium border-none mt-4 focus:outline-none" type="text">
            </div>
        </div>
        <div class="flex mx-5 my-2 divide-y-2 divide-gray-300 divide-dashed">
            <div class="w-1/3">
                <h1 class="text-sm text-gray-500 font-semibold uppercase mt-5" style="color: #B8B8B8;">kota/kab</h1>
            </div>
            <div class="w-2/3">
                <input class="text-sm text-gray-900 font-medium border-none mt-4 focus:outline-none" type="text">
            </div>
        </div>
        <div class="flex mx-5 my-2 divide-y-2 divide-gray-300 divide-dashed">
            <div class="w-1/3">
                <h1 class="text-sm text-gray-500 font-semibold uppercase mt-5" style="color: #B8B8B8;">kode pos</h1>
            </div>
            <div class="w-2/3">
                <input class="text-sm text-gray-900 font-medium border-none mt-4 focus:outline-none" type="text">
            </div>
        </div>
        <div class="flex mx-5 my-2 divide-y-2 divide-gray-300 divide-dashed">
            <div class="w-1/3"></div>
            <div class="w-2/3"></div>
        </div>
        <div class="flex mx-5 my-5">
            <div class="w-4/5">
                <h1 class="text-gray-600" style="font-size: 11px;">simpan untuk pembelian di masa mendatang</h1>
            </div>
            <div class="w-1/5">
                <input type="checkbox" class="box">
            </div>
        </div>
        <div class="bg-gray-300 h-2 mb-5"></div>
    </div>
</template>

<script>
export default {
    name: 'AlamatPenerima'
}
</script>

<style scoped>
input[type="checkbox"]:focus{
    -webkit-tap-highlight-color:rgba(0,0,0,0) !important;
}
input[type="checkbox"]{
    -webkit-appearance:none;
    position: relative;
    left: 28px;
    right: 0;
    top: 0;
    bottom: 0;
    cursor: pointer;
    outline: none;
}

.box{
    height: 22px;
    width: 34px;
    background-color: #e5e5e5;
    border-radius: 50px;
    transition: 0.3s;
}
.box:before{
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    background-color: white;
    border-radius: 50%;
    border: 3px solid #bdc3c7;
    left: 1px;
    top: 1px;
    transition: 0.3s;
}
.box:after{
    position: absolute;
    font-size: 45px;
    font-family: 'Montserrat',sans-serif;
    font-weight: 700;
    color: #e5e5e5;
    left: 100px;
    letter-spacing:0.5px; 
    transition: 0.3s;
}
.box:checked{
    background-color: #F2994A;
}
.box:checked:before{
    border: 3px solid #DA8D00;
    background-color:white;
    left: 14px;
}
.box:checked:after{
    color: #F2994A;
}
</style>