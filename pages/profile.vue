<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Profile</h2>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md" @click="handleLogout">Logout</button>
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