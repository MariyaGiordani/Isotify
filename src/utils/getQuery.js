export function getQuery() {
  let query = window.location.search.substring(2);
  let search = query.split('=');
  return search[1];
}
