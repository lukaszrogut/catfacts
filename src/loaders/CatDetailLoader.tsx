import { CatDetailParams } from '@/interfaces';

export const catDetailLoader = async ({ params }: CatDetailParams) => {
  const { id } = params;
  const res = await fetch(`https://cat-fact.herokuapp.com/facts/${id}`);
  return res.json();
};
