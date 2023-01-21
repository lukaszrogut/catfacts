import { CatDetailParams } from '@/interfaces';
import { LoaderFunction } from 'react-router-dom';

export const testDetailLoader = async ({ params }: any) => {
  const { id } = params;
  const res = await fetch(`https://cat-fact.herokuapp.com/facts/${id}`);
  return res.json();
};
