import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event?.context?.params?.id
    if(!id) return {}
    const supabase = await serverSupabaseClient(event)
    let { data: recipes, error } = await supabase
        .from('Recipes')
        .select('*')
        .eq('id', id)

    let recipe = recipes?.shift()

    return {
        recipe
    }
})