// import React from "react";
import NavBar from '../components/NavBar';
import ExerciseTemplateList from '../components/ExerciseTemplateList';

function ExercisesView() {
  return (
    <main>
      <h1>Exercises</h1>
      <ExerciseTemplateList />
      <NavBar />
    </main>
  );
}

export default ExercisesView;
