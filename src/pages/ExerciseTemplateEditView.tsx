// import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useMasterContext } from '../store/MasterContext';
import { useRef } from 'react';
import styles from './ExerciseTemplateEditView.module.css';
import ExerciseTemplate from '../classes/ExerciseTemplate';

export default function ExerciseTemplateEditView({
  action,
}: {
  action: 'ADD' | 'EDIT';
}) {
  const params = useParams();
  const navigate = useNavigate();
  const { exercises, addExercise, editExercise } = useMasterContext();

  //Handle exercise load
  const id = Number(params.id);
  let exercise;
  if (action === 'EDIT') {
    exercise = exercises.find((e) => e.id === id);
    if (exercise === undefined) {
      return (
        <main>
          <div>No such exercise exists</div>
        </main>
      );
    }
  }
  const changeExercise = action === 'ADD' ? addExercise : editExercise;

  const exerciseId = useRef<HTMLInputElement>(null);
  const exerciseName = useRef<HTMLInputElement>(null);
  const exercisePart = useRef<HTMLInputElement>(null);
  const exerciseType = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    //Add exercise to exercises using master context
    if (
      exerciseId.current !== null &&
      exerciseName.current !== null &&
      exercisePart.current !== null &&
      exerciseType.current !== null
    ) {
      const newExercise: ExerciseTemplate = {
        id: Number(exerciseId.current.value),
        name: exerciseName.current.value,
        bodyPart: exercisePart.current.value,
        exerciseType: exerciseType.current.value,
      };
      changeExercise(newExercise);

      // const navigate = useNavigate();
      navigate('/exercises');
    }
  }

  return (
    <main>
      <div className={styles.flexCol}>
        <label htmlFor="id">Exercise ID</label>
        <input
          id="id"
          ref={exerciseId}
          disabled={exercise !== undefined}
          defaultValue={exercise === undefined ? '' : exercise.id}
        />
        <label htmlFor="name">Exercise Name</label>
        <input
          id="name"
          ref={exerciseName}
          defaultValue={exercise === undefined ? '' : exercise.name}
        />
        <label htmlFor="part">Exercise Body Part</label>
        <input
          id="part"
          ref={exercisePart}
          defaultValue={exercise === undefined ? '' : exercise.bodyPart}
        />
        <label htmlFor="type">Exercise Type</label>
        <input
          id="type"
          ref={exerciseType}
          defaultValue={exercise === undefined ? '' : exercise.exerciseType}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </main>
  );
}
