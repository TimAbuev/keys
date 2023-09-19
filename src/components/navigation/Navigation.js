import { NavLink } from "react-router-dom";
import './Navigation.css';

function Navigation() {


  return (
    <nav className="navigation">
      <NavLink
        to='/'
        className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}
      >
        Главная
      </NavLink>
      <NavLink
        to='/tasks'
        className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}
      >
        задания
      </NavLink>
    </nav>
  );
}

export default Navigation;