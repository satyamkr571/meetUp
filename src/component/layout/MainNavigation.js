import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import FavoriteContext from "../../store/favContext";
import { useSelector } from "react-redux";

function MainNavigation() {
  const isSignedIn = useSelector((state) => state.isSignedIn);
  const context = useContext(FavoriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{context.totalFav}</span>
            </Link>
          </li>
          <li>
            <Link to="/login">{isSignedIn ? "Logout" : "Login"}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
