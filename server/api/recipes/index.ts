import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event)
    let { data: recipes, error } = await supabase
        .from('Recipes')
        .select()


    return {
        recipes
    }
})