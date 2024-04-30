export function useUser(){
  const roles = JSON.parse(localStorage.getItem('roles')) || [];
  const user = JSON.parse(localStorage.getItem('user'));

  const hasRole = (options) => {
    return options.filter(role => roles.includes(role)).length > 0
  }
  return {
    user,
    roles,
    hasRole
  }
}