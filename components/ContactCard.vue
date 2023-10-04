<template>
    <div id="Contact" class=" w-auto mt-32">
        <div class=" flex justify-center items-center">
            <div
                class=" text-green-500 border-2  border-green-400 bg-white h-8  w-24 justify-center items-center flex rounded-full ">
                <span class="">Contact</span>
            </div>
        </div>
        <div class=" text-4xl mt-3  md:text-center sm:text-start">
            <span class=" font-bold">Let's Discuss Your</span>
            <span class=" text-green-500"> Project</span>
            <p class=" text-sm mt-4 text-gray-500 flex justify-center">
                Let’s make something new, different and more meaningful or make thing more visual or conceptual
            </p>
        </div>
    </div>
    <div class=" grid sm:grid-cols-1 lg:grid-cols-2 ">
        <div class=" mt-7">
            <div class=" flex mt-6">
                <div class=" grid grid-cols-1 space-y-2">
                    <button class=" flex pr-5 justify-start items-center h-20 bg-white shadow-sm hover:bg-gray-100 w-auto">
                        <div class=" h-10 w-10 bg-green-500 rounded-md flex items-center justify-center mt-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 text-white flex">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>

                        <div class=" px-4 ">
                            <span class=" block  -translate-x-7 text-md justify-start text-gray-500 mt-3">Call me</span>
                            <span class=" text-sm text-black">+8801913754319</span>
                        </div>
                    </button>
                    <button
                        class=" flex justify-start items-center w-auto h-20 bg-white shadow-sm hover:bg-gray-100 mt-4 pr-3">
                        <div class=" h-10 w-10 bg-green-500 rounded-md flex items-center justify-center mt-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                            </svg>
                        </div>
                        <div class=" px-4 ">
                            <span class=" block  -translate-x-12 text-md justify-start text-gray-500 mt-2">Email me</span>
                            <span class=" text-sm text-black">asifemon1757@gmail.com</span>
                        </div>
                    </button>
                    <button class=" flex justify-start items-center w-auto h-20 bg-white shadow-sm hover:bg-gray-100 mt-">
                        <div class=" h-10 w-10 bg-green-500 rounded-md flex items-center justify-center mt-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 text-white flex">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                        <div class=" px-4 ">
                            <span class=" block  -translate-x-9 text-md justify-start text-gray-500 mt-3">Address</span>
                            <span class=" text-sm text-black">Mahespur,Jhenaidah</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div class=" mt-10 ">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div class="">
                    <input
                        class="bg-white border border-gray-200 text-black text-sm rounded-md shadow-xl  focus:border-blue-50 block w-full p-3 dark:placeholder-gray-400"
                        placeholder="Full Name" required>
                </div>
                <div>

                    <input
                        class="bg-white border border-gray-200 text-black text-sm rounded-md shadow-xl  focus:border-blue-50 block w-full p-3 dark:placeholder-gray-400"
                        placeholder="Your email" required>
                </div>
                <div>

                    <input
                        class="bg-white border border-gray-200 text-black text-sm rounded-md shadow-xl  focus:border-blue-50 block w-full p-3 dark:placeholder-gray-400"
                        placeholder="Phone number" required>
                </div>
                <div>
                    <input
                        class="bg-white border border-gray-200 text-black text-sm rounded-md shadow-xl  focus:border-blue-50 block w-full p-3 dark:placeholder-gray-400"
                        placeholder="Budget" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
                </div>
            </div>

            <div class="">
                <textarea id="message" rows="4"
                    class="block p-2.5 w-full text-sm text-black bg-white rounded-md shadow-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-50 dark:focus:border-blue-50"
                    placeholder="Message"></textarea>
            </div>
            <div class=" h-14 flex justify-end items-end mt-6">
                <div
                    class=" text-white   hover:bg-green-400  bg-green-500 h-12  w-36 justify-center items-center flex rounded-lg mt-32 ">
                    <span>Submit Message</span>
                </div>
            </div>
        </div>



    </div>
</template>