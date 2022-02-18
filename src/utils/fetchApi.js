/* eslint-disable import/prefer-default-export */
export const fetchFromAPI = async (link) => {
  const res = await fetch(link, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
      'x-rapidapi-key': 'ea12a92529msha666c780d99f22cp1afdbajsnbf6c1dfc0b3a',
    },
  });
  const data = await res.json();
  return data;
};
