export const catFactLoader = async () => {
  const res = await fetch('https://cat-fact.herokuapp.com/facts');
  return res.json();
};
