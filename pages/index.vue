<template>
 
        <ProfileCard />
 
    <div class="w-full   grid md:grid-cols-3 md sm:grid-cols-1 mt-20 gap-8">
        <RatingCard v-for="x in ratings" :rating=x />
    </div>
    <div   class=" w-full grid lg:grid-cols-5 mt-40  sm:space-x-0 gap-6 sm:grid-cols-1">
        <SkillCard />
    </div>
    <WorkCard />

    <div  id="Reviews"  class=" pt-6 mt-20">
        <div
            class=" text-green-500 border-2  border-green-400 bg-white h-8  w-24 justify-center items-center flex rounded-full ">
            <span>Reviews</span>
        </div>
        <div class=" text-4xl mt-6 font-bold">
            <span class=" block">Our Customer Say</span>
            <span>Something</span>
            <span class=" text-green-500"> About Us</span>
        </div>
    </div>
    <div class=" flex w-full   mt-3 lg:justify-center lg:items-center  space-x-4">
        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 text-gray-400 hover:text-green-600 translate-x-36">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-8 h-6 text-gray-800 hover:text-green-600 translate-x-36">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
    </div>
    <div class=" grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 mt-10 gap-6">

        <ReviewCard v-for="x in reviews" :review=x />



    </div>

    <ContactCard />

    <hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700 mt-16">

    <FooterCard />
</template> 


<script setup lang="js">

var ratings = [
    {
        title: "Satisfied Clients",

        rating: 80
    },
    {
        title: "Projects completed",

        rating: 200
    },
    {
        title: "Reviews given",

        rating: 99
    }
]
var reviews = [
    {
        name: 'Amir Uddin',
        post: "UX Designer",
        image: "/image/capman.png"
    },
    {
        name: 'Salim Ahmed',
        post: "UI Designer",
        image: "/image/salim_pic.png"

    },
    {
        name: 'Guy Hawkings',
        post: "UX Designer",
        image: "/image/hawkings_pic.png"

    },
]


</script>

