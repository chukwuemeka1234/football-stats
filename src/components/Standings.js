import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"

const Standings = ({ id = null }) => {
  const standings = useSelector((state) => state.standingsReducer.standings);

  const isLoading = useSelector((state) => state.standingsReducer.standings);
  const dispatch = useDispatch();

  useEffect(() => {
    !standings.length && dispatch(fetchStandingsFromAPI());
  }, [dispatch, standings.length]);

  return (
    <Card className="standings">
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
                <span >
                </span>
              </li>
            ))}
      </ul>
    </Card>
  )
}