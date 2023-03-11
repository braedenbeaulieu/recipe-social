<template>
    <!-- <div class="w-full flex justify-center items-center h-[80px] "> -->
        <div class="flex h-[48px] w-[300px] justify-center items-center gap-6 border border-[#bcc8d155] py-2 px-4 rounded-3xl shadow-md bg-white fixed bottom-4 left-0 right-0 mx-auto">
            <NuxtLink to="/" class="flex justify-center items-center w-[45px] h-[45px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                </svg>
            </NuxtLink>
            <NuxtLink to="/search" class="flex justify-center items-center w-[45px] h-[45px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </NuxtLink>
            <NuxtLink to="/new" class="flex justify-center items-center w-[45px] h-[45px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg>
            </NuxtLink>
            <NuxtLink to="/profile" class="flex justify-center items-center w-[45px] h-[45px] ">
                <div class="w-[30px] h-[30px]">
                    <img class="rounded-full h-full w-full object-cover" src="https://baconmockup.com/640/360" alt="Person">
                </div>
            </NuxtLink>
        </div>
    <!-- </div> -->
</template>
<script setup lang="ts">
    // todo: get user profile picture
</script>