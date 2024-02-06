// import React from "react";
import { useParams } from 'react-router-dom';
import { useMasterContext } from '../store/MasterContext';
import { useEffect, useRef, useState } from 'react';
import styles from './ExerciseTemplateEditView.module.css';
import ExerciseTemplate from '../classes/ExerciseTemplate';
import { useUpdateEntity } from '../store/hooks/useUpdateEntity';

export default function ExerciseTemplateEditView({
  action,
}: {
  action: 'ADD' | 'EDIT';
}) {
  const params = useParams();
  const { exercises } = useMasterContext();
  const [newExercise, setnewExercise] = useState<ExerciseTemplate | null>(null);

  //If newExercise is null, this has no effect
  useUpdateEntity(newExercise, action);

  //Handle exercise load
  const id = Number(params.id);
  let exercise: ExerciseTemplate | undefined;
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
      const newExercise: ExerciseTemplate = {
        name: exerciseName.current.value,
        bodyPart: exercisePart.current.value,
        exerciseType: exerciseType.current.value,
        id: exercise !== undefined ? exercise.id : undefined,
      };
      setnewExercise(newExercise);
    }
  }

  return (
    <main>
      <div className={styles.flexCol}>
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
