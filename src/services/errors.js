import { getNested } from '../utils/getNested';

export function serverError(error) {
  const response = getNested(['response', 'data', 'error', 'message'], error);

  if (response === 'The access token expired') {
    window.location.replace('http://localhost:3000/error');
  }
}
