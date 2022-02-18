import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Standings from '../../components/Standings';

const MockedStandings = () => (
  <Provider store={store}>
    <Standings />
  </Provider>
);

const mockedFetchAction = () => ({
  type: 'football-stats/standings/FETCH_STANDINGS_SUCCESS',
  payload: [
    {
      rank: 1,
      team: {
        id: 85,
        name: 'Manchester City',
        logo: 'https://media.api-sports.io/football/teams/85.png',
      },
      points: 59,
      all: {
        played: 24,
        win: 18,
        draw: 5,
        lose: 1,
        goals: {
          for: 52,
          against: 19,
        },
      },
    },
  ],
});

describe('Standings component', () => {
  it('should render loading message initially', () => {
    render(<MockedStandings />);
    const message = screen.getByText('Loading...');
    expect(message).toBeInTheDocument();
  });
});