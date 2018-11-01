export function isUserLogged() {
  const access_token_storage = localStorage.getItem('access_token');
  return !!access_token_storage;
}
