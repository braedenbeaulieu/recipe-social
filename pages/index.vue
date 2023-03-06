<template>
    <div>
        <p>Index Page</p>
    </div>
</template>
<script setup lang="ts">
    let { data: recipes } = await useFetch('/api/recipes')
    console.log(recipes.value)
</script>