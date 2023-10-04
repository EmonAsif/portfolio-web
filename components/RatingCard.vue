<template>

<div class="lg:mt-20  text-start md:text-center rounded-lg  p-2 font-bold ">
    <span class=" text-green-500 text-3xl  font-bold">{{rating.rating}}+</span>
    <p class=" text-xl mt-4 text-gray-700">{{rating.title}}</p>
</div>

</template>

<script setup lang="js">
defineProps(['rating'])
</script>

