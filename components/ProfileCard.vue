<template>
    <div id="Profile" class=" grid     sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl: grid-cols-5 gap-24  md:gap-12">
        <div class="  col-span-3">
            <div class=" h-8 w-24 bg-white border-2 border-green-400  rounded-md mt-20 flex justify-center items-center  ">
                <p>Welcome</p>
            </div>
            <div class=" mt-3 ">
                <span class=" text-5xl font-bold">
                    <a href="/"> I am a</a>
                    <a href="#" class=" text-green-500"> Creative</a>
                </span>
                <span class=" block text-5xl font-bold">
                    <a href="/" class=" text-green-500">Web</a>
                    <a href="#"> Developer</a>
                </span>
            </div>
    
                <p class=" mt-6 text-sm text-gray-600 ">
                    Hello, I'm Asif Iqbal, a seasoned web developer with a proven track record of 5 years in the industry. I specialize in crafting elegant and efficient web solutions that blend form and function seamlessly. My expertise encompasses a wide range of technologies, from front-end frameworks like React and Vue.js to back-end systems like Node.js and Ruby on Rails
                </p>
            
            <div class="  flex items-center gap-12 mt-8">
                <button @click="gotoElement('Contact')">
                    <div class=" h-10 w-28 bg-green-600 rounded-lg text-white flex justify-center items-center hover:bg-green-400">
                       Contact Me
                    </div>
                </button>
                <span class=" ">
                    <button class=" bg-white hover:bg-green-100 h-12 w-40 flex justify-center items-center rounded-lg ">
                        <div @click="gotoElement('portfolio')" class=" flex items-center">
                            <a href="#" class="text-lg"> View Portfolio</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                                stroke="currentColor" class="w-5 h-5 text-green-600 translate-x-1">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </div>
                    </button>
                </span>
            </div>
        </div>
     <div class=" col-span-2 w-full  bg lg:mt-16 md:mt-0 sm:mt-0 md:p-24 md:pl-8 md:flex justify-center">

        <div class="w-full  relative z-0  text-right   aspect-square bg-green-600">

     <div class="w-full aspect-square  absolute  border-4  -inset-x-6 inset-y-6  border-black   ">
        
        <img src="/image/profile_pic.png" class=" absolute  z-0 w-full -inset-y-5  " alt="">
     

     </div>

     </div>
          
     </div>

         
    </div>
</template>
<script setup>

function gotoElement(id) {
  const el = document.getElementById(id);


  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });

  }
}
</script>