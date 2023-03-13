<template>
	<div class="grid grid-cols-2 md:grid-cols-3 gap-3">
		<RecipeGridItem v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"></RecipeGridItem>
	</div>
</template>
<script setup lang="ts">
    const props = defineProps<{
        recipes: Recipe[]
    }>()
</script>