import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import { fetchStandingsFromAPI } from '../redux/standings/standings';

const Standings = ({ className = '', id = null }) => {
  const standings = useSelector((state) => state.standingsReducer.standings);

  const isLoading = useSelector((state) => state.standingsReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    /* eslint-disable no-unused-expressions */
    !standings.length && dispatch(fetchStandingsFromAPI());
  }, [dispatch, standings.length]);

  return (
    <Card className={`standings ${className}`}>
      <ul className="standings-teams">
        {isLoading
          ? 'Loading...'
          : standings
            && standings.map((team) => (
              <li key={uuidv4()} className="standings-team">
                <span className="standing-team-rank">{team.rank}</span>
                <img
                  className="standings-team-logo"
                  alt={`${team.team.name} logo`}
                  src={team.team.logo}
                />
                <span
                  className={`standing-team-name ${
                    id === team.team.id
                      ? 'standings-team-name-highlighted'
                      : ''
                  }`}
                >
                  {team.team.name}
                </span>
                <span className="standings-team-points">
                  {team.points}
                  {' '}
                  Pts
                </span>
                <span className="standings-team-played">
                  {team.all.played}
                  {' '}
                  MP
                </span>
                <span className="standings-team-wins">
                  {team.all.win}
                  {' '}
                  W
                </span>
                <span className="standings-team-loses">
                  {team.all.lose}
                  {' '}
                  L
                </span>
              </li>
            ))}
      </ul>
    </Card>
  );
};

Standings.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
};

Standings.defaultProps = {
  className: '',
  id: null,
};

export default Standings;
