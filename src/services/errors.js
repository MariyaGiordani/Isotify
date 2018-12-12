import React from 'react';
import { Redirect } from 'react-router-dom';
import { getNested } from '../utils/getNested';

export function serverError(error) {
  const response = getNested(['response', 'data', 'error', 'message'], error);

  if (response === 'The access token expired') {
    return <Redirect to="/error" />;
  }
}
