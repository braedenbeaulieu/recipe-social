<template>
    <div class="relative before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
        <NuxtLink :to="recipe_link">
            <div class="h-64">
                <img class="rounded-lg object-cover w-full h-full" :src="props.recipe.featured_image" :alt="props.recipe.title" />
            </div>
            <div class="absolute inset-0 p-2 md:p-4 text-white flex flex-col justify-end">
                <div class="relative bg-black/30 shadow-lg p-2 rounded-md">
                    <h3 class="text-lg md:text-3xl font-bold">{{ props.recipe.title }}</h3>
                    <p class="font-sm font-light mt-3">{{ props.recipe.description }}</p>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        recipe: Recipe
    }>()

    let recipe_link = ref(`/recipes/${props.recipe.id}`)
</script>