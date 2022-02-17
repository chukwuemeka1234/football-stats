import { NavLink } from 'react-router-dom';
import { FaCog, FaMicrophone } from 'react-icons/fa';

const Header = () => (
  <header className="header ">
    <div className="container">
      <nav className="header__nav">
        <ul className="header-title">
          <h2>Football</h2>
        </ul>
        <ul className="header__links">
          <li className="header__link">
            <NavLink to="/">Teams</NavLink>
          </li>
          <li className="header__link">
            <NavLink to="/standings">Standings</NavLink>
          </li>
        </ul>
        <ul className="nav-icons">
          <li className="icon-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
              href="/"
            >
              <FaMicrophone className="text-lg leading-lg text-black opacity-75" />
            </a>
          </li>
          <li>
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
              href="/"
            >
              <FaCog className="fab fa-pinterest text-lg leading-lg text-black opacity-75" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
