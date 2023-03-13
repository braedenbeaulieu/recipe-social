<template>
    <div>
        <h2 class="text-2xl mb-4 font-bold">Feed</h2>
        <RecipeGrid :recipes="recipes" />
    </div>
</template>
<script setup>
    let { recipes } = await $fetch('/api/recipes')
</script>