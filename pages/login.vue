<template>
    <div>
        <h2 class="text-2xl mb-4 font-bold">Login</h2>
        <button @click="handleLogin" class="p-2 bg-orange-600 rounded text-white">Sign In with Google</button>
    </div>
</template>
<script setup lang="ts">
    let supabase = useSupabaseClient()
    let handleLogin = async () => {
        // @ts-ignore
        let { error } = supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: '/'
            }
        })
        if(error) console.error(error)
    }
</script>