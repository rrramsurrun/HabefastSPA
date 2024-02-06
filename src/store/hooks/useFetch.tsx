import { useState, useEffect } from 'react';
import { getExercises, getWorkouts } from '../repository';
import ExerciseTemplate from '../../classes/ExerciseTemplate';
import { useMasterContext } from '../MasterContext';
import Workout from '../../classes/Workout';

export function useFetch() {
  const { loadExercises, loadWorkouts } = useMasterContext();

  //Add Exercise Templates on initial render
  const [exerciseTemplates, setExerciseTemplates] =
    useState<ExerciseTemplate[]>();

  useEffect(() => {
    async function fetchExercises() {
      const data = (await getExercises()) as ExerciseTemplate[];
      setExerciseTemplates(data);
    }
    fetchExercises();
  }, []);

  useEffect(() => {
    if (exerciseTemplates) {
      loadExercises(exerciseTemplates);
    }
  }, [exerciseTemplates]);

  //Add Workouts on initial render
  const [workouts, setWorkouts] = useState<Workout[]>();

  useEffect(() => {
    if (workouts) {
      loadWorkouts(workouts);
    }
  }, [workouts]);

  useEffect(() => {
    async function fetchWorkouts() {
      const data = (await getWorkouts()) as Workout[];
      setWorkouts(data);
    }
    fetchWorkouts();
  }, []);
}
