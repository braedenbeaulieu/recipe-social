<template>
    <div v-if="!current_recipe || current_recipe === {}">
        <h2 class="text-2xl font-bold mb-4">Recipe not found.</h2>
        <NuxtLink to="/">Home</NuxtLink>
    </div>
    <div>
        <h2 class="text-2xl font-bold mb-4">Edit Recipe</h2>
        <form @submit.prevent="handleSubmit" class="w-full max-w-lg">
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
                        Description
                    </label>
                    <textarea v-model="recipe_model.description.value" class="appearance-none block min-h-[80px] w-full max-w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="recipe-description" type="text" placeholder="Description" :class="{'border-red-500': recipe_model.description.error}">{{ recipe_model.description.value }}</textarea>
                    <p class="text-red-500 text-xs italic" v-if="recipe_model.description.error !== ''">{{ recipe_model.description.error }}</p>
                </div>
                <div class="flex px-3">
                    <div class="w-1/2 pr-3 mb-6 md:mb-0">
                        <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="recipe-servings">
                            Servings
                        </label>
                        <input v-model="recipe_model.servings.value" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="recipe-servings" type="number" placeholder="Servings" min="1" max="20" :class="{'border-red-500': recipe_model.servings.error}">
                        <p class="text-red-500 text-xs italic" v-if="recipe_model.servings.error !== ''">{{ recipe_model.servings.error }}</p>
                    </div>
                    <div class="w-1/2 mb-6 md:mb-0">
                        <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="recipe-difficulty">
                            Difficulty
                        </label>
                        <div class="relative">
                            <select v-model="recipe_model.difficulty.value" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="recipe-difficulty">
                                <option>Simple</option>
                                <option>Moderate</option>
                                <option>Tough</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        <p class="text-red-500 text-xs italic" v-if="recipe_model.difficulty.error !== ''">{{ recipe_model.difficulty.error }}</p>
                    </div>
                </div>
                <div class="flex px-3">
                    <div class="w-1/2 pr-3 mb-6 md:mb-0">
                        <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="recipe-servings">
                            Prep Time (mins)
                        </label>
                        <input v-model="recipe_model.prep_time.value" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="recipe-servings" type="number" placeholder="Servings" min="1" max="360" :class="{'border-red-500': recipe_model.prep_time.error}">
                        <p class="text-red-500 text-xs italic" v-if="recipe_model.prep_time.error !== ''">{{ recipe_model.prep_time.error }}</p>
                    </div>
                    <div class="w-1/2 mb-6 md:mb-0">
                        <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="recipe-servings">
                            Cook Time (mins)
                        </label>
                        <input v-model="recipe_model.cook_time.value" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="recipe-servings" type="number" placeholder="Servings" min="1" max="360" :class="{'border-red-500': recipe_model.cook_time.error}">
                        <p class="text-red-500 text-xs italic" v-if="recipe_model.cook_time.error !== ''">{{ recipe_model.cook_time.error }}</p>
                    </div>
                </div>
                <div class="flex px-3">
                    <div class="w-1/2 mb-6 md:mb-0 pr-3">
                        <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="recipe-servings">
                            Oven Temp (optional)
                        </label>
                        <input v-model="recipe_model.oven_temp.value" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="recipe-servings" type="number" placeholder="Servings" min="1" max="1000" step="1" :class="{'border-red-500': recipe_model.oven_temp.error}">
                        <p class="text-red-500 text-xs italic" v-if="recipe_model.oven_temp.error !== ''">{{ recipe_model.oven_temp.error }}</p>
                    </div>
                    <div class="w-1/2 mb-6 md:mb-0">
                        <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="recipe-servings">
                            Oven Temp Unit
                        </label>
                        <div class="relative">
                            <select v-model="recipe_model.oven_temp_unit.value" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="recipe-difficulty">
                                <option value="C">&deg;C</option>
                                <option value="F">&deg;F</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        <p class="text-red-500 text-xs italic" v-if="recipe_model.oven_temp_unit.error !== ''">{{ recipe_model.oven_temp_unit.error }}</p>
                    </div>
                </div>
                <div class="px-3">
                    <h2 class="text-xl font-bold">Ingredients</h2>
                    <div class="flex flex-wrap relative" v-for="(ingredient, counter) in recipe_model.ingredients.value" :key="counter">
                        <div class="w-1/4 pr-3 mb-6 md:mb-0">
                            <label class="flex flex-col justify-end h-[28px] tracking-wide text-gray-700 text-xs font-bold mb-2" for="recipe-servings">
                                Quantity
                            </label>
                            <select v-model="recipe_model.ingredients.value[counter].servings" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="recipe-difficulty" required>
                                <option value=".25">1/4</option>
                                <option value=".33">1/3</option>
                                <option value=".5">1/2</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                        <div class="w-1/4 pr-3 mb-6 md:mb-0">
                            <label class="flex flex-col justify-end h-[28px] tracking-wide text-gray-700 text-xs font-bold mb-2" for="recipe-servings">
                                Unit
                            </label>
                            <select v-model="recipe_model.ingredients.value[counter].unit" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="recipe-difficulty">
                                <option value="">No Unit</option>
                                <option value="Teaspoon">Teaspoon</option>
                                <option value="Tablespoon">Tablespoon</option>
                                <option value="Fluid Ounce">Fluid Ounce</option>
                                <option value="Cup">Cup</option>
                                <option value="Millilitre">Millilitre</option>
                                <option value="Litre">Litre</option>
                                <option value="Box">Box</option>
                                <option value="Can">Can</option>
                                <option value="Package">Package</option>
                                <option value="Glass">Glass</option>
                            </select>
                        </div>
                        <div class="w-1/4 pr-3 mb-6 md:mb-0">
                            <label class="flex flex-col justify-end h-[28px] tracking-wide text-gray-700 text-xs font-bold mb-2" for="recipe-servings">
                                Name
                            </label>
                            <input v-model="recipe_model.ingredients.value[counter].name" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="recipe-servings" type="text" placeholder="Name">
                        </div>
                        <div class="w-1/4 pr-3 mb-6 md:mb-0">
                            <label class="flex flex-col justify-end h-[28px] tracking-wide text-gray-700 text-xs font-bold mb-2" for="recipe-servings">
                                Modifier (optional)
                            </label>
                            <input v-model="recipe_model.ingredients.value[counter].modifier" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="recipe-servings" type="text" placeholder="chopped">
                        </div>
                        <button v-if="counter > 0" @click.prevent="delete_ingredient(counter)" class="absolute p-2 cursor-pointer right-0 top-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                    
                    <button @click.prevent="add_ingredient" class="block mb-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg">Add Ingredient</button>
                </div>
                <div class="px-3">
                    <h2 class="text-xl font-bold">Directions</h2>
                    <div class="flex flex-wrap relative" v-for="(direction, counter) in recipe_model.directions.value" :key="counter">
                        <div class="w-full pr-3 mb-6 md:mb-0">
                            <label class="flex flex-col justify-end h-[28px] tracking-wide text-gray-700 text-xs font-bold mb-2" for="recipe-servings">
                                Direction {{ counter + 1 }}:
                            </label>
                            <textarea v-model="recipe_model.directions.value[counter]" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="recipe-servings" type="text" placeholder="Direction">{{ recipe_model.directions.value[counter] }}</textarea>
                            <button v-if="counter > 0" @click.prevent="delete_direction(counter)" class="absolute p-2 cursor-pointer right-0 top-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                <p class="text-red-500 text-xs italic mb-3" v-if="recipe_model.directions.error !== ''">{{ recipe_model.directions.error }}</p>
                    <button @click.prevent="add_direction" class="block mb-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg">Add Direction</button>
                </div>
            </div>
            <div class="w-full mb-6 md:mb-0">
                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="recipe-servings">
                    Recipe Posting Status
                </label>
                <div class="relative">
                    <select v-model="recipe_model.status.value" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="recipe-difficulty">
                        <option value="draft">Draft</option>
                        <option value="publish">Publish</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                <p class="text-red-500 text-xs italic" v-if="recipe_model.status.error !== ''">{{ recipe_model.oven_temp_unit.error }}</p>
            </div>
            <input type="submit" value="Update Recipe" class="bg-blue-500 text-white px-4 py-2 rounded shadow-lg" />
        </form>
    </div>
</template>
<script setup>
    const route = useRoute()
    const supabase = useSupabaseClient()
    const supabase_user = useSupabaseUser()
    let { data: current_user, error: current_user_error} = await supabase
        .from('users')
        .select('*')
        .eq('id', supabase_user.value.id)

    let { recipe: current_recipe } = await $fetch(`/api/recipes/${route.params.id}`)

    console.log(current_recipe)

    let add_ingredient = () => {
        recipe_model.value.ingredients.value.push({
            name: 'Chicken',
            unit: '',
            quantity: '',
            modifier: '',
        })
    }
    
    let delete_ingredient = (counter) => {
        recipe_model.value.ingredients.value.splice(counter, 1)
    }

    let add_direction = () => {
        if(recipe_model.value.directions.value[recipe_model.value.directions.value.length - 1] === '') {
            recipe_model.value.directions.error = 'Please fill in the direction before adding another.'
            return
        }
        recipe_model.value.directions.value.push('')
    }
    
    let delete_direction = (counter) => {
        recipe_model.value.directions.value.splice(counter, 1)
    }

    let destructure_recipe_model = (recipe_model) => {
        return {
            title: recipe_model.name.value,
            description: recipe_model.description.value,
            status: recipe_model.status.value,
            servings: recipe_model.servings.value,
            difficulty: recipe_model.difficulty.value,
            prep_time: recipe_model.prep_time.value,
            cook_time: recipe_model.cook_time.value,
            oven_temp: recipe_model.oven_temp.value,
            oven_temp_unit: recipe_model.oven_temp_unit.value,
            ingredients: recipe_model.ingredients.value,
            directions: recipe_model.directions.value,
            featured_image: recipe_model.featured_image.value,
        }
    }

    let recipe_model = ref({})
    if(current_recipe) {
        recipe_model.value = {
            name: {
                value: current_recipe.title,
                error: ''
            },
            description: {
                value: current_recipe.description,
                error: ''
            },
            status: {
                value: current_recipe.status,
                error: ''
            },
            featured_image: {
                value: 'https://placebear.com/640/' + Math.floor(Math.random() * (365 - 360 + 1) + 360),
                error: ''
            },
            servings: {
                value: current_recipe.servings,
                error: ''
            },
            difficulty: {
                value: current_recipe.difficulty,
                error: ''
            },
            prep_time: {
                value: current_recipe.prep_time,
                error: ''
            },
            cook_time: {
                value: current_recipe.cook_time,
                error: ''
            },
            oven_temp: {
                value: current_recipe.oven_temp,
                error: ''
            },
            oven_temp_unit: {
                value: current_recipe.oven_temp_unit,
                error: ''
            },
            ingredients: {
                value: current_recipe.ingredients ?? [],
                error: ''
            },
            directions: {
                value: current_recipe.directions ?? [],
                error: ''
            },
        }
    }

    console.log(recipe_model.value.directions)

    let handleSubmit = async () => {
        let allow_submit = true

        if(!current_user) {
            allow_submit = false
        }
        if(!recipe_model.value.name.value || recipe_model.value.name.value === '') {
            recipe_model.value.name.error = 'Please fill in a title.'
            allow_submit = false
        }
       
        if(!recipe_model.value.description.value || recipe_model.value.description.value === '') {
            recipe_model.value.description.error = 'Please fill in a description.'
            allow_submit = false
        }

        if(!allow_submit) {
            console.log('Could not submit')
            return
        }
        // console.log('Submitting:', recipe_model.value)

        let recipe_to_update = destructure_recipe_model(recipe_model.value)


        const { data, error } = await supabase
            .from('Recipes')
            .update([
                { 
                    ...recipe_to_update
                },
            ])
            .eq('id', current_recipe.id)
            .select()

        console.log(data)
        console.log(error)
    }
</script>