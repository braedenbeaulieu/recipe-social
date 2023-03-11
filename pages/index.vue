<template>
    <div>
        <h2 class="text-2xl mb-4 font-bold">Feed</h2>
        <p>Recipes: {{ recipes }}</p>
    </div>
</template>
<script setup lang="ts">
    let recipes = await $fetch('/api/recipes')
</script>