const initialState = {
  team: null,
  isLoading: false,
};

export const fetchTeam = () => ({
  type: 'FETCH_TEAM',
});

export const fetchTeamSuccess = (payload) => ({
  type: 'FETCH_TEAM_SUCCESS',
  payload,
});

export const fetchTeamFail = () => ({
  type: 'FETCH_TEAM_FAIL',
});

export const fetchTeamFromAPI = (id) => async (dispatch) => {
    dispatch(fetchTeam());
  
    try {
      const team = await fetchFromAPI(
        `https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=39&season=2021&team=${id}`,
      );
      console.log(team.response);
      dispatch(fetchTeamSuccess(team.response));
    } catch (err) {
      console.error(err);
      dispatch(fetchTeamFail());
    }
  };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TEAM':
      return { ...state, isLoading: true };
    case 'FETCH_TEAM_SUCCESS':
      return { isLoading: false, team: { ...action.payload } };
    case 'FETCH_TEAM_FAIL':
      return { isLoading: false, team: null };
    default:
      return state;
  }
};

export default reducer;