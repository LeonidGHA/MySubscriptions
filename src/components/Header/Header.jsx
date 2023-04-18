import { NavLink } from "react-router-dom";
import css from "./Header.module.scss";

const activeNav = ({ isActive }) => {
  return isActive
    ? `${css.navigation_link} ${css.active}`
    : css.navigation_link;
};

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <nav>
          <ul className={css.nav_list}>
            <li className={css.navigation_item}>
              <NavLink className={activeNav} to="/">
                Home
              </NavLink>
            </li>
            <li className={css.navigation_item}>
              <NavLink className={activeNav} to="/Tweets">
                Tweets
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
