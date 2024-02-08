import { useEffect, useState } from 'react';
import ExerciseTemplate from '../../classes/ExerciseTemplate';
import { useMasterContext } from '../MasterContext';
import { sendExercise } from '../repository';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../classes/ErrorMessage';

export function useUpdateExercise(
  exercise: ExerciseTemplate | null,
  action: 'ADD' | 'EDIT'
) {
  const navigate = useNavigate();
  const { addExercise, editExercise, setError, token } = useMasterContext();
  const [newExercise, setNewExercise] = useState<ExerciseTemplate | null>(null);
  useEffect(() => {
    async function send(exercise: ExerciseTemplate, token: string) {
      const response = await sendExercise(exercise, action, token);
      if (response.success) {
        const e = response.data as ExerciseTemplate;
        setNewExercise(e);
      } else {
        const e = response.data as ErrorMessage;
        setError(e);
      }
    }
    if (exercise && token) {
      send(exercise, token);
    }
  }, [exercise, token]);

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
