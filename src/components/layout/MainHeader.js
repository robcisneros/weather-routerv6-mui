import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/weather-table"
            >
              TABLA
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/new-data-weather"
            >
              NUEVO
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
