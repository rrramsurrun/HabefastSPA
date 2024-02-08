import { useState, useEffect } from 'react';
import { getExercises, getWorkouts } from '../repository';
import ExerciseTemplate from '../../classes/ExerciseTemplate';
import { useMasterContext } from '../MasterContext';
import Workout from '../../classes/Workout';

export function useFetch() {
  const { loadExercises, loadWorkouts, token } = useMasterContext();

  //Add Exercise Templates on initial render
  const [exerciseTemplates, setExerciseTemplates] =
    useState<ExerciseTemplate[]>();

  useEffect(() => {
    async function fetchExercises(token: string) {
      const data = (await getExercises(token)) as ExerciseTemplate[];
      setExerciseTemplates(data);
    }
    if (token) {
      fetchExercises(token);
    }
  }, [token]);

  useEffect(() => {
    if (exerciseTemplates) {
      loadExercises(exerciseTemplates);
    }
  }, [exerciseTemplates]);

  //Add Workouts on initial render
  const [workouts, setWorkouts] = useState<Workout[]>();

  useEffect(() => {
    async function fetchWorkouts(token: string) {
      const data = (await getWorkouts(token)) as Workout[];
      setWorkouts(data);
    }
    if (token) {
      fetchWorkouts(token);
    }
  }, [token]);

  useEffect(() => {
    if (workouts) {
      loadWorkouts(workouts);
    }
  }, [workouts]);
}
