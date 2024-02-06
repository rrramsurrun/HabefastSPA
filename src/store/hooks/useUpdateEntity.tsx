import { useEffect, useState } from 'react';
import ExerciseTemplate from '../../classes/ExerciseTemplate';
import { useMasterContext } from '../MasterContext';
import { sendExercise } from '../repository';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../classes/ErrorMessage';

export function useUpdateEntity(
  exercise: ExerciseTemplate | null,
  action: 'ADD' | 'EDIT'
) {
  const navigate = useNavigate();
  const { addExercise, editExercise, setError } = useMasterContext();
  const [newExercise, setNewExercise] = useState<ExerciseTemplate | null>(null);
  useEffect(() => {
    async function send(exercise: ExerciseTemplate) {
      const response = await sendExercise(exercise, action);
      if (response.success) {
        const e = response.data as ExerciseTemplate;
        setNewExercise(e);
      } else {
        const e = response.data as ErrorMessage;
        setError(e);
      }
    }
    if (exercise) {
      send(exercise);
    }
  }, [exercise]);
  useEffect(() => {
    if (newExercise) {
      if (action === 'ADD') {
        addExercise(newExercise);
        navigate('/exercises');
      }
      if (action === 'EDIT') {
        editExercise(newExercise);
        navigate('/exercises');
      }
    }
  }, [newExercise]);
}
