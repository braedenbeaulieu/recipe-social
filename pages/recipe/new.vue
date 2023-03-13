<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">New Recipe</h2>
        <form @submit.prevent="insertDraftRecipe" class="w-full max-w-lg">
            <div class="-mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="recipe-name">
                        Recipe Name
                    </label>
                    <input v-model="recipe_model.name.value" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="recipe-name" type="text" placeholder="Chicken Parmesean" :class="{'border-red-500': recipe_model.name.error}">
                    <p class="text-red-500 text-xs italic" v-if="recipe_model.name.error !== ''">{{ recipe_model.name.error }}</p>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6">
                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="recipe-description">
                        Caption
                    </label>
                <textarea v-model="recipe_model.description.value" class="appearance-none block min-h-[80px] w-full max-w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="recipe-description" type="text" placeholder="Caption this new recipe posting!" :class="{'border-red-500': recipe_model.description.error}">{{ recipe_model.description.value }}</textarea>
                    <p class="text-red-500 text-xs italic" v-if="recipe_model.description.error !== ''">{{ recipe_model.description.error }}</p>
                </div>
            </div>
            <input type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" value="Create Recipe">
        </form>

        <!-- <NuxtLink to="/recipe/update/4" class="bg-blue-500 text-white px-4 py-2 rounded-md">Edit Recipe</NuxtLink> -->
    </div>
</template>
<script setup>
    let supabase = useSupabaseClient()
    let supabase_user = useSupabaseUser()
    let { data: current_user, error: current_user_error} = await supabase
        .from('users')
        .select('*')
        .eq('id', supabase_user.value.id)

    let slugify_title = (title) => title.toLowerCase().trim().replaceAll(' ', '-')
    
    let recipe_model = ref({
        name: {
            value: '',
            error: ''
        },
        description: {
            value: '',
            error: ''
        },
    })

    let insertDraftRecipe = async () => {
        const { data: recipes, error } = await supabase
            .from('Recipes')
            .insert([
                { 
                    title: recipe_model.value.name.value,
                    slug: slugify_title(recipe_model.value.name.value),
                    description: recipe_model.value.description.value,
                    user_id: current_user.id,
                    oven_temp_unit: 'F',
                    status: 'draft',
                },
            ])
            .select()

        let recipe = recipes.shift()

        if(!error && recipe.id) {
            navigateTo(`/recipe/update/${recipe.id}`)
        }
    }
</script>