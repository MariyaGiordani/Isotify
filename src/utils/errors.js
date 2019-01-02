import React from 'react';
import { getNested } from '../utils/getNested';
import { ErrorHandler } from '../components/Error/errorHandler';

export function serverError(error) {
  const response = getNested(['response', 'data', 'error', 'message'], error);

  if (response === 'The access token expired') {
    return (
      <ErrorHandler
        title={'Sorry, your session has expired.'}
        subtitle={'Please press the button to refresh the page.'}
      />
    );
  } else {
    return (
      <ErrorHandler
        title={'Sorry, something went wrong.'}
        subtitle={'Please press the button to refresh the page.'}
      />
    );
  }
}
