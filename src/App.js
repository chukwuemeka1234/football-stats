import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Teams from './pages/teamsPage';
import StandingsPage from './pages/standingsPage';
import TeamPage from './pages/teamPage';
import './index.css';

const App = () => (
  <div>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Teams />} />
        <Route path=":teamID" element={<TeamPage />} />
        <Route path="/standings" element={<StandingsPage />} />
      </Routes>
    </main>
  </div>
);

export default App;
