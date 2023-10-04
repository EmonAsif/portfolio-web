<template>
        <div id="portfolio" class=" grid lg:grid-cols-5 sm:grid-cols-1  mt-14 sm:gap-32 md:gap-32">
    <div class=" col-span-2 w-full max-h-72 mt-12">
      
        <button type="button"
            class="text-black bg-white border-2 border-green-500 focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:hover:bg-green-400">Portfolio</button>
        
        <div class=" text-4xl mt-6 font-bold">
            <span class=" block">My Creative Works</span>
            <span>Latest</span>
            <span class=" text-green-500"> Project?</span>
        </div>
        <p class=" text-sm mt-4 text-gray-600">
            I have selected and mentioned here some of my latest projects to share with you.
        </p>
        <button class=" h-8 w-24 bg-green-500 hover:bg-green-300 rounded-lg mt-6">
            <span class=" text-white">Show More</span>
        </button>
    </div>

    <div class="mt-8 col-span-3 flex  w-full space-x-6  overflow-x-scroll ">

            <img class="w-48 lg:w-72" src="/image/mobile.png" alt="mobile">
            <img  class="w-48 lg:w-72" src="/image/chair.png" alt="chair">
            <img  class="w-48 lg:w-72" src="/image/healthyfood.png" alt="healthyfood">
          
            <img  class="w-48 lg:w-72" src="/image/mobile.png" alt="mobile">
            <img  class="w-48 lg:w-72" src="/image/chair.png" alt="chair">

    </div>
    </div>
    
</template>