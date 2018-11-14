import { logOut } from './spotify';
import { getNested } from '../utils/getNested';

export function serverError(error) {
  const response = getNested(['response', 'data', 'error', 'message'], error);

  if (response === 'The access token expired') {
    logOut();
    window.location.reload();
  }
}
