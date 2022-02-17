/* eslint-disable import/prefer-default-export */
export const fetchFromAPI = async (link) => {
  const res = await fetch(link, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
      'x-rapidapi-key': '33e3da95afmsh9549d68170396a1p10a266jsn5bb24b1a6151',
    },
  });
  const data = await res.json();
  return data;
};
