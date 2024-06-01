export default defineNuxtRouteMiddleware((to, from) => {
    const { status } = useAuth();

    // Check if the user is authenticated
    if (status.value != 'authenticated') {
        // If not authenticated, stay at the root
        if (to.path !== '/') {
            return navigateTo('/')
        }
    } else {
        if (to.path == '/') {
            return navigateTo('/demo')
        }
    }
});
