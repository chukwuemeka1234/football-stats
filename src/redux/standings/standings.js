const initialState = {
  standings: [],
  isLoading: false,
};

export const fetchStandings = () => ({
  type: 'FETCH_STANDINGS',
});

export const fetchStandingsSuccess = (payload) => ({
  type: 'FETCH_STANDINGS_SUCCESS',
  payload,
});

export const fetchStandingsFail = () => ({
  type: 'FETCH_STANDINGS_FAIL',
});

export const fetchStandingsFromAPI = () => async (dispatch) => {
    dispatch(fetchStandings());
  
    try {
      const standings = await fetchFromAPI(
        'https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=39',
      );
      console.log(standings);
      dispatch(
        fetchStandingsSuccess([standings.response][0][0].league.standings[0]),
      );
    } catch (err) {
      console.error(err);
      dispatch(fetchStandingsFail());
    }
  };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_STANDINGS':
      return { ...state, isLoading: true };
    case 'FETCH_STANDINGS_SUCCESS':
      return { isLoading: false, standings: [...action.payload] };
    case 'FETCH_STANDINGS_FAIL':
      return { isLoading: false, standings: [] };
    default:
      return state;
    }
};

export default reducer;