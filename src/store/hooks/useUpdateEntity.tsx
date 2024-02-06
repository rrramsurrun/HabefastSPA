import { useEffect, useState } from 'react';
import ExerciseTemplate from '../../classes/ExerciseTemplate';
import { useMasterContext } from '../MasterContext';
import { sendExercise } from '../repository';

export function useUpdateEntity(exercise: ExerciseTemplate | null) {
  console.log('useUpdateEntity');
  const { addExercise, editExercise } = useMasterContext();
  const [newExercise, setNewExercise] = useState<ExerciseTemplate | null>(null);
  useEffect(() => {
    async function send(exercise: ExerciseTemplate) {
      const response = (await sendExercise(exercise)) as ExerciseTemplate;
      setNewExercise(response);
    }
    if (exercise) {
      send(exercise);
    }
  }, [exercise]);
  useEffect(() => {
    if (newExercise) {
      addExercise(newExercise);
    }
  }, [newExercise]);
}
