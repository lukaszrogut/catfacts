import { ReactElement } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { CatFactInterface } from '@/interfaces/index';
import CatFact from '@/components/CatFact';

export default function CatFactList(): ReactElement {
  const catFactList = useLoaderData() as CatFactInterface[];

  return (
    <div className='cats__list'>
      {catFactList?.map((data: CatFactInterface) => {
        return (
          <Link key={data._id} to={`fact/${data._id}`}>
            <CatFact {...data} />
          </Link>
        );
      })}
      {!catFactList && <p>No facts to display</p>}
    </div>
  );
}
