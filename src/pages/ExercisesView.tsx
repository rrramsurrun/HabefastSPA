// import React from "react";
import NavBar from '../components/NavBar';
import ExerciseTemplateList from '../components/ExerciseTemplateList';
import { NavLink } from 'react-router-dom';

function ExercisesView() {
  return (
    <main>
      <div className="flexRow">
        <h1>Exercises</h1> <NavLink to="/exercise">Add New</NavLink>
      </div>

      <ExerciseTemplateList />
      <NavBar />
    </main>
  );
}

export default ExercisesView;
