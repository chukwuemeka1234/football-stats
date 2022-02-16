const initialState = {
  teams: [],
  isLoading: false,
};

export const fetchTeams = () => ({
  type: 'FETCH_TEAMS',
});

export const fetchTeamsSuccess = (payload) => ({
  type: 'FETCH_TEAMS_SUCCESS',
  payload,
});

export const fetchTeamsFailed = () => ({
  type: 'FETCH_TEAMS_FAIL',
});

export const fetchTeamsFromAPI = () => async (dispatch) => {
    dispatch(fetchTeams());
  
    try {
      const data = await fetchFromAPI(
        'https://api-football-v1.p.rapidapi.com/v3/teams?league=39&season=2021',
      );
      console.log(data);
      dispatch(fetchTeamsSuccess(data.response));
    } catch (e) {
      dispatch(fetchTeamsFailed());
      console.error(e);
    }
  };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TEAMS':
      return { ...state, isLoading: true };
    case 'FETCH_TEAMS_SUCCESS':
      return { isLoading: false, teams: [...action.payload] };
    case 'FETCH_TEAMS_FAIL':
      return { isLoading: false, teams: [] };

    default:
      return state;
  }
};

export default reducer;