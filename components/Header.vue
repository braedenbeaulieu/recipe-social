<template>
    <div class="py-2 px-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold"><NuxtLink to="/">Recipe Social</NuxtLink></h1>
        <button @click="handleLogout" v-if="user && user.role === 'authenticated'">Logout</button>
        <NuxtLink to="/login" v-else>Log in</NuxtLink>
    </div>
</template>
<script setup lang="ts">
    let supabase = useSupabaseClient()
    let user = useSupabaseUser()

    let handleLogout = async () => {
        const { error } = await supabase.auth.signOut()
        if(error) console.error(error)
    }
</script>