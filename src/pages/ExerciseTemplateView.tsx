// import React from "react";
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import { useMasterContext } from '../store/MasterContext';

export default function ExerciseTemplateView() {
  const params = useParams();
  //Convert to number
  const exerciseId = Number(params.id);
  if (isNaN(exerciseId)) {
    return (
      <main>
        <div>Invalid URL</div>
      </main>
    );
  }
  const { exercises } = useMasterContext();

  const exercise = exercises.find((e) => e.id === exerciseId);

  if (exercise === undefined) {
    return (
      <main>
        <div>Loading Exercise</div>
      </main>
    );
  }
  return (
    <main>
      <h1>{exercise.name}</h1>
      <h2>{exercise.bodyPart}</h2>
      <h3>{exercise.exerciseType}</h3>
      <NavBar />
    </main>
  );
}
