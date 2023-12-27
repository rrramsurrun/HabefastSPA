// import React from "react";
import NavBar from '../components/NavBar';
import ExerciseTemplate from '../classes/ExerciseTemplate';
import ExerciseTemplateList from '../components/ExerciseTemplateList';
import { useEffect } from 'react';

function fetchExercises(): ExerciseTemplate[] {
  return [
    { id: 0, name: 'Bench Press', exerciseType: 'Reps', bodyPart: 'Chest' },
    { id: 1, name: 'Seated Cable Row', exerciseType: 'Reps', bodyPart: 'Back' },
    { id: 2, name: 'Back Squat', exerciseType: 'Reps', bodyPart: 'Legs' },
    { id: 3, name: 'Deadlift', exerciseType: 'Reps', bodyPart: 'Legs' },
  ];
}

const exercises = fetchExercises();

function ExercisesView() {
  return (
    <main>
      <h1>Exercises</h1>
      <ExerciseTemplateList exercises={exercises} />
      <NavBar />
    </main>
  );
}

export default ExercisesView;
