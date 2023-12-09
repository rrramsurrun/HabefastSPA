import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
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
