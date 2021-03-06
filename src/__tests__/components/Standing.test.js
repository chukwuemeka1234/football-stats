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
  type: 'FETCH_STANDINGS_SUCCESS',
  payload: [
    {
      rank: 1,
      team: {
        id: 85,
        name: 'Paris Saint Germain',
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

  it('should render the correct amount of teams', async () => {
    render(<MockedStandings />);
    store.dispatch(mockedFetchAction());
    const teams = await screen.findAllByText('Paris Saint Germain');
    expect(teams.length).toBe(1);
  });

  it('should render the correct data', async () => {
    render(<MockedStandings />);
    store.dispatch(mockedFetchAction());
    const teams = await screen.findAllByText('Paris Saint Germain');
    expect(teams[0]).toBeInTheDocument();
  });
});
