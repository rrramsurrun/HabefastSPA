import { useEffect, useState } from 'react';
import ExerciseTemplate from '../../classes/ExerciseTemplate';
import { useMasterContext } from '../MasterContext';
import { sendExercise } from '../repository';
import { useNavigate } from 'react-router-dom';

export function useUpdateEntity(
  exercise: ExerciseTemplate | null,
  action: 'ADD' | 'EDIT'
) {
  const navigate = useNavigate();
  const { addExercise, editExercise } = useMasterContext();
  const [newExercise, setNewExercise] = useState<ExerciseTemplate | null>(null);
  useEffect(() => {
    async function send(exercise: ExerciseTemplate) {
      const response = (await sendExercise(
        exercise,
        action
      )) as ExerciseTemplate;
      setNewExercise(response);
    }
    if (exercise) {
      send(exercise);
    }
  }, [exercise]);
  useEffect(() => {
    if (newExercise) {
      if (action === 'ADD') {
        addExercise(newExercise);
      }
      if (action === 'EDIT') {
        editExercise(newExercise);
      }
      navigate('/exercises');
    }
  }, [newExercise]);
}
