import { fetchFromAPI } from '../../utils/fetchApi';

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
      `https://api-football-beta.p.rapidapi.com/teams/statistics?league=61&season=2021&team=${id}`,
    );
    dispatch(fetchTeamSuccess(team.response));
  } catch (err) {
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
