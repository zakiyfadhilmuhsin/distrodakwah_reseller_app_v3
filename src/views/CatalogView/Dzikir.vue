<template>
    <div class="bg-gray-200">
        <div class="mobile-view bg-white">
            <!-- navbar -->
            <div class="bg-blue-900">
                <div class="grid grid-cols-3 mx-5 mb-5 pt-4">
                    <div class="col-span-1 mb-5 w-12">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12z" fill="white"/>
                        </svg>
                    </div>
                    <div class="col-span-1 w-56 -ml-16">
                        <h1 class="text-white text-lg text-center font-semibold capitalize">
                            Dzikir  
                        </h1>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="mt-5 rounded-md" style="background-color: #FFEAC1;">
                <img class="rounded-md" src="@/assets/Ellipse.svg" alt="">
                    <h1 class="italic text-xs -mt-6 pl-2" style="color: #CC8600;">i</h1>
                <div class="px-4 pb-3 mr-2 ml-2 -mt-1">
                    <h1 class="text-xs italic text-justify" style="color: #6A5D42;">Dengan berdzikir, selain mendapatkan pahala anda juga akan mendapatkan poin yang bisa anda tukarkan dengan voucher atau anda bisa anda donasikan.</h1>
                </div>
            </div>
            <!--  -->
             <div class="mx-5 py-2 px-1 mt-5 bg-white shadow">
                <div class="flex">
                    <div class="flex w-1/2 ml-4 mt-1">
                        <div class="w-6 h-6  bg-orange-600 border-2 border-orange-400 rounded-full">
                            <svg class="ml-1 mt-1 w-3 h-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0S128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80s192-35.8 192-80s-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8c29.5 14.3 51.2 33.5 60 57.2z" fill="gold"/></svg>
                        </div>
                        <h1 class="text-right font-semibold capitalize px-2">270 Koin</h1>
                    </div>
                    <div class="flex justify-end w-1/2 mr-4">
                        <div class="flex w-24 h-6 mt-1 bg-blue-800 rounded">
                            <div class="w-4 h-4 mt-1 ml-2 mr-2 bg-white rounded-full">
                                <h1 class="text-blue-900 text-center font-semibold capitalize" style="margin-top: -5px;">+</h1>
                            </div>
                            <h1 class="text-white text-xs font-semibold capitalize mt-1">Tarik Koin</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="h-1 bg-gray-100 mt-5"></div>
            <div class="flex mx-5 my-5">
                <button class="w-1/2 text-xs text-center text-gray-800 bg-white border-2 border-gray-500 hover:bg-blue-900 hover:text-white hover:border-blue-900 focus:border-0 focus:bg-blue-900 focus:border-blue-900 focus:text-white focus:outline-blue-900 rounded py-1 mr-4 capitalize" type="button">
                    <img class="w-8 h-8 pb-1" style="margin-left: 59px;" src="@/assets/sun.svg" alt="">
                     dzikir pagi
                </button>
                <button class="w-1/2 text-xs text-gray-800 bg-white border-2 border-gray-500 hover:bg-blue-900 hover:text-white hover:border-blue-900 focus:border-0 focus:bg-blue-900 focus:border-blue-900 focus:text-white focus:outline-blue-900 rounded py-2 capitalize" type="button">
                    <img class="w-8 h-8 pb-1" style="margin-left: 59px;" src="@/assets/moon.svg" alt="">
                    dzikir petang
                </button>
            </div>
            <!--  -->
            <div class="flex flex-col">
                <h1 class="text-sm text-gray-800 font-semibold mx-5 capitalize"> dzikir di waktu pagi </h1>
                <h1 class="text-sm text-gray-800 mx-5 mt -2"> (antara subuh hingga siang hari ketika matahari akan bergeser kebarat) </h1>
            </div>
            <div class="bg-white shadow mx-5 mt-3">
                <h1 class="text-xs text-right pt-5 px-3">اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ، لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ</h1>
                <h1 class="text-xs px-3 pb-2 italic capitalize">latin:</h1>
                <h1 class="text-xs text-right text-justify px-3 pb-1 lowercase italic text-gray-800">ALLAHU LAA ILAAHA ILLAA HUWAL HAYYUL QAYYUMM(U), LAA TA`KHUDUHUU SINATUN WA LAA NAUM(UN), LAHUU MAA FISSAMAAWAATI WA MAA FIL ARDHI, MAN DZALLADZII YASYFA'U 'INDAHUU ILLAA BI IDZNIH(I), YA'LAMU MAA BAINAA AIDIIHIIM WA MAA KHALFAHUM, WA LAA YUHIITHUUNA BI SYAI-IN MIN 'ILMIHII ILAA BIMAA SYAA-A, WA SI'A KURSIYYUHUSSAMAAWAATI WAL ARDHI, WA LAA YA-UUDUHU HIFZHUHUMAA WA HUSWAL 'ALIYYUL 'AZHIIM</h1> 
                <div class="flex justify-end mr-4">
                    <span class="text-xs italic mr-3" style="color: red;">Tukar Koin</span>
                    <input class="hidden" type="checkbox" name="" id="">
                    <svg class="h-5 w-5 italic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#626262"><path d="M14.88 4.78a3.489 3.489 0 0 0-.37-.9a3.24 3.24 0 0 0-.6-.79a3.78 3.78 0 0 0-1.21-.81a3.74 3.74 0 0 0-2.84 0a4 4 0 0 0-1.16.75l-.05.06l-.65.65l-.65-.65l-.05-.06a4 4 0 0 0-1.16-.75a3.74 3.74 0 0 0-2.84 0a3.78 3.78 0 0 0-1.21.81a3.55 3.55 0 0 0-.97 1.69a3.75 3.75 0 0 0-.12 1c0 .317.04.633.12.94a4 4 0 0 0 .36.89a3.8 3.8 0 0 0 .61.79L8 14.31l5.91-5.91c.237-.233.44-.5.6-.79A3.578 3.578 0 0 0 15 5.78a3.747 3.747 0 0 0-.12-1zm-1 1.63a2.69 2.69 0 0 1-.69 1.21l-5.21 5.2l-5.21-5.2a2.9 2.9 0 0 1-.44-.57a3 3 0 0 1-.27-.65a3.25 3.25 0 0 1-.08-.69A3.36 3.36 0 0 1 2.06 5a2.8 2.8 0 0 1 .27-.65c.12-.21.268-.4.44-.57a2.91 2.91 0 0 1 .89-.6a2.8 2.8 0 0 1 2.08 0c.33.137.628.338.88.59l1.36 1.37l1.36-1.37a2.72 2.72 0 0 1 .88-.59a2.8 2.8 0 0 1 2.08 0c.331.143.633.347.89.6c.174.165.32.357.43.57a2.69 2.69 0 0 1 .35 1.34a2.6 2.6 0 0 1-.06.72h-.03z"/></g></svg>
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
.mobile-view {
    width: 360px;
    min-height: 100vh;
    margin-right: auto;
    margin-left: auto;
}
</style>