const fetchFromApi = async (link) => {
  const res = await fetch(link, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    },
  });
  const data = await res.json();
  return data;
}