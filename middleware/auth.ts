function isAuthenticated(){

  return false;
}
export default defineNuxtRouteMiddleware((to, from) => {
  if (isAuthenticated()) {
    return navigateTo("/");
  }
});
