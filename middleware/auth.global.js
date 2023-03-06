export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path.includes('login')) return
    const user = useSupabaseUser()
    if(user.value) return
    return navigateTo('/login')
})