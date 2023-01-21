import { ReactElement } from 'react';
import { Link, useRouteError } from 'react-router-dom';

import { ErrorData } from '@/interfaces/index';

export default function ErrorPage(): ReactElement {
  const error = useRouteError() as ErrorData;

  return (
    <div id='error-page'>
      <h1>Cat Fact Error!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/'>Go back to the list</Link>
    </div>
  );
}
