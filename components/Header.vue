<template>
    <div class="py-2 px-4 w-full flex justify-center items-center bg-white fixed translate-x-0 translate-y-0 translate-z-0 transition-transform" :class="{ 'navbar-hidden': !showNavbar }">
        <h1 class="text-2xl font-bold"><NuxtLink to="/">Recipe Social</NuxtLink></h1>
    </div>
</template>
<script setup lang="ts">
    let showNavbar = ref(true)
    let lastScrollPosition = ref(0)

    let onScroll = () => {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if(currentScrollPosition < 0) return
        if(Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) return
        showNavbar.value = currentScrollPosition < lastScrollPosition.value
        lastScrollPosition.value = currentScrollPosition
    }

    onMounted(() => {
        window.addEventListener('scroll', onScroll)
    })
    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
    })

    
</script>
<style scoped>
    .navbar-hidden {
        box-shadow: none;
        transform: translate3d(0, -100%, 0);
    }
</style>