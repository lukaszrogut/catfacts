import { ReactElement } from 'react';

import { CatFactInterface } from '@/interfaces/index';

export default function CatFact({ text }: CatFactInterface): ReactElement {
  return (
    <div className='catfact'>
      <p>{text}</p>
    </div>
  );
}
