<template>
  <div class="  md: invisible sm:invisible lg:visible fixed -end-0">
    <div class=" mt-64 h-16 ">
      <SocialButtons />
    </div>
  </div>
  <div class=" px-16 lg:px-40 ">

    <nav class="">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">

        <div @click=" gotoElement('Profile')" class="h-24 ">
          <img src="/image/signature.png" alt="signature" class="w-40" />
        </div>

        <div class="flex md:order-2">

          <button type="button" @click="download"
            class="text-black bg-white border-2 border-green-500 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:hover:bg-green-400">Downdload
            CV</button>
          <button data-collapse-toggle="navbar-sticky" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">

            <li @click="gotoElement('skills')">
              <a href="#"
                class="block py-2 pl-3 pr-4 text-white bg-green-500 rounded md:bg-transparent md:text-green-500 md:p-0 md:dark:text-green-500"
                aria-current="page">Skills</a>
            </li>
            <button @click="gotoElement('portfolio')" class="hover:text-lime-400">
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-black hover:text-violet-700 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black"
                  aria-current="page">Portfolio</a>
              </li>
            </button>
            <li @click="gotoElement('Reviews')">
              <a href="#"
                class="block py-2 pl-3 pr-4 text-white bg-black hover:text-violet-700 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black"
                aria-current="page">Reviews</a>
            </li>
            <li @click="gotoElement('Contact')">
              <a href="#"
                class="block py-2 pl-3 pr-4 text-white bg-black hover:text-violet-700 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black"
                aria-current="page">Contact</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>

    <NuxtPage />


  </div>
</template>

<script setup lang="js">
import { routerKey } from './nuxt-dist/vue-router';






function gotoElement(id) {
  const el = document.getElementById(id);


  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });

  }
}

function download() {
  navigateTo('https://firebasestorage.googleapis.com/v0/b/portfolio-f6283.appspot.com/o/Asif%20Biodata.pdf?alt=media&token=fac95b2e-2188-4256-b1fd-31abb15e5584&_gl=1*1tn2akz*_ga*MTg2NTI2NDgxNy4xNjkwMzUxNDMz*_ga_CW55HF8NVT*MTY5NjMxNTkzNy41My4xLjE2OTYzMTU5NTUuNDIuMC4w', {
    external: true,

    open: {

      target: '_blank',
      windowFeatures: {
        width: 600,
        height: 800
      }
    }
  })
}

// assigned to some element in the template

</script>
