import { fetchFromAPI } from '../../utils/fetchApi';

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
      'https://api-football-beta.p.rapidapi.com/teams?league=61&season=2021',
    );
    dispatch(fetchTeamsSuccess(data.response));
  } catch (e) {
    dispatch(fetchTeamsFailed());
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
