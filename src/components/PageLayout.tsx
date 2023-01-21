import { ReactElement } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function PageLayout(): ReactElement {
  return (
    <>
      <header>
        <Link to='/'>
          <h1>Cats Facts</h1>
        </Link>
      </header>
      <Outlet />
    </>
  );
}
