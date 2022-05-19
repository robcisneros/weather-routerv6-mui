import { NavLink, useNavigate } from "react-router-dom";
import classes from "./MainHeader.module.css";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const MainHeader = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/");
  };

  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <header className={classes.header}>
      <nav>
        <ul>
        {!isLoggedIn && (
            <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/auth"
            >
              Login
            </NavLink>
          </li>
          )}
          {isLoggedIn && (
            <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/weather-table"
            >
              TABLA
            </NavLink>
          </li>
          )}
          {isLoggedIn && (
            <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/new-data-weather"
            >
              NUEVO
            </NavLink>
          </li>
          )}
          {isLoggedIn && (
            <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
