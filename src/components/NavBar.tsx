import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import { useMasterContext } from '../store/MasterContext';

export default function NavBar() {
  const { activeWorkout } = useMasterContext();

  if (activeWorkout) {
    return (
      <div className={styles.nav}>
        <div className="mainpage__widebutton mainpage__widebutton--plain">
          <NavLink to="/activeworkout" state={{ lastPage: location.pathname }}>
            Return to Active Workout
          </NavLink>
        </div>
        {PageNav('')}
      </div>
    );
  }
  return PageNav(styles.nav);
}
function PageNav(PageNavStyle: string) {
  return (
    <nav className={PageNavStyle}>
      <ul>
        <li>
          <NavLink to="/">History</NavLink>
        </li>
        <li>
          <NavLink to="/workout">Workout</NavLink>
        </li>
        <li>
          <NavLink to="/exercises">Exercises</NavLink>
        </li>
        <li>
          <NavLink to="/tracking">Tracking</NavLink>
        </li>
      </ul>
    </nav>
  );
}
