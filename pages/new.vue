<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">New Recipe</h2>
        <form @submit.prevent="handleSubmit" class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="recipe-name">
                        Recipe Name
                    </label>
                    <input v-model="recipe_name.value" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="recipe-name" type="text" placeholder="Chicken Parmesean" :class="{'border-red-500': recipe_name.error}">
                    <p class="text-red-500 text-xs italic" v-if="recipe_name.error !== ''">{{ recipe_name.error }}</p>
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="last-name">
                        Description
                    </label>
                    <input v-model="recipe_description.value" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last-name" type="text" placeholder="Description" :class="{'border-red-500': recipe_description.error}">
                    <p class="text-red-500 text-xs italic" v-if="recipe_description.error !== ''">{{ recipe_description.error }}</p>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="city">
                        City
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city" type="text" placeholder="Albuquerque">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="state">
                        State
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="state">
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="zip">
                        Zip
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="zip" type="text" placeholder="90210">
                </div>
            </div>
            <input type="submit" value="Submit" class="bg-blue-500 text-white px-4 py-2 rounded shadow-lg" />
        </form>
    </div>
</template>
<script setup>
    const supabase = useSupabaseClient()
    const supabase_user = useSupabaseUser()
    let { data: current_user, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', supabase_user.value.id)
        
    let slugify_title = (title) => title.toLowerCase().replaceAll(' ', '-')

    let recipe_name = ref({
        value: '',
        error: ''
    })
    let recipe_description = ref({
        value: '',
        error: ''
    })

    // let recipe_name_error = ref('')
    // let recipe_description_error = ref('')

    let handleSubmit = async () => {
        let allow_submit = true

        if(!current_user) {
            allow_submit = false
        }
        if(!recipe_name.value.value || recipe_name.value.value === '') {
            recipe_name.value.error = 'Please fill in a title.'
            allow_submit = false
        }
       
        if(!recipe_description.value.value || recipe_description.value.value === '') {
            recipe_description.value.error = 'Please fill in a description.'
            allow_submit = false
        }

        if(!allow_submit) return
        console.log('Submitting:', recipe_name.value)
        // const { data, error } = await supabase
        //     .from('Recipes')
        //     .insert([
        //         { 
        //             title: recipe_name.value,
        //             slug: slugify_title(recipe_name.value.value),
        //             user_id: current_user.id
        //         },
        //     ])

        console.log(data)
        console.log(error)
    }
</script>