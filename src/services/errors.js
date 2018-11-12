import { logOut } from './spotify';

export function serverError(response) {
  if (response.response.data.error.message === 'The access token expired') {
    logOut();
    window.location.reload();
  }
}
