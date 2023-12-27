// import React from "react";
import NavBar from '../components/NavBar';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import { useMasterContext } from '../store/MasterContext';
import { useRef } from 'react';
import styles from './ExerciseTemplateEditView.module.css';
import ExerciseTemplate from '../classes/ExerciseTemplate';

export default function ExerciseTemplateEditView() {
  // const params = useParams();
  // //Convert to number
  // const exerciseId = Number(params.id);
  // if (isNaN(exerciseId)) {
  //   return (
  //     <main>
  //       <div>Invalid URL</div>
  //     </main>
  //   );
  // }
  const { addExercise } = useMasterContext();
  const navigate = useNavigate();

  // const exercise = exercises.find((e) => e.id === exerciseId);

  // if (exercise === undefined) {
  //   return (
  //     <main>
  //       <div>Loading Exercise</div>
  //     </main>
  //   );
  // }
  const exerciseName = useRef<HTMLInputElement>(null);
  const exercisePart = useRef<HTMLInputElement>(null);
  const exerciseType = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    //Add exercise to exercises using master context
    if (
      exerciseName.current !== null &&
      exercisePart.current !== null &&
      exerciseType.current !== null
    ) {
      const exercise: ExerciseTemplate = {
        id: 8,
        name: exerciseName.current.value,
        bodyPart: exercisePart.current.value,
        exerciseType: exerciseType.current.value,
      };
      addExercise(exercise);
      console.log(exercise);
      // const navigate = useNavigate();
      navigate('/exercises');
    }
  }

  return (
    <main>
      <div className={styles.flexCol}>
        <input ref={exerciseName} placeholder="Exercise Name" />
        <input ref={exercisePart} placeholder="Exercise Body Part" />
        <input ref={exerciseType} placeholder="Exercise Type" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </main>
  );
}
