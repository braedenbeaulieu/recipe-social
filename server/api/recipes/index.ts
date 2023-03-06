import useSupabaseClient from '@nuxtjs/supabase'
export default defineEventHandler(async (event) => {
    const supabase = await useSupabaseClient()
    let { data: recipes, error } = await supabase
        .from('Recipes')
        .select('id')

    return { 
        recipes: 'recipes'
    }
})