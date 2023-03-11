export default defineNuxtRouteMiddleware((to, from) => {
    if(to.path.includes('home')) return
    const user = useSupabaseUser()
    if(user.value) return
    return navigateTo('/home')
})