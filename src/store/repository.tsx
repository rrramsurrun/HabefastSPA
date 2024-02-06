// import ExerciseTemplate from '../classes/ExerciseTemplate';

import ExerciseTemplate from '../classes/ExerciseTemplate';
import Workout from '../classes/Workout';

export async function getExercises() {
  const response = await fetch(import.meta.env.VITE_SERVER_URL + '/exercises');
  if (!response.ok) {
    console.log('getExercises failed');
    return;
  }
  const data = (await response.json()) as unknown;
  return data;
}

export async function sendExercise(
  exercise: ExerciseTemplate,
  action: 'ADD' | 'EDIT'
) {
  console.log('attempting post');
  const requestOptions = {
    method: action === 'ADD' ? 'POST' : 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(exercise),
  };
  const response = await fetch(
    import.meta.env.VITE_SERVER_URL + '/exercises',
    requestOptions
  );
  if (!response.ok) {
    console.log(`${action}Exercises failed`);
    return;
  }
  const data = (await response.json()) as unknown;
  return data;
}
export async function sendWorkout(workout: Workout) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(workout),
  };
  const response = await fetch(
    import.meta.env.VITE_SERVER_URL + '/workouts',
    requestOptions
  );

  console.log(response);
  if (!response.ok) {
    console.log('addWorkout failed');
    return;
  }
  const data = (await response.json()) as unknown;
  return data;
}

export async function getWorkouts() {
  const response = await fetch(import.meta.env.VITE_SERVER_URL + '/workouts');

  if (!response.ok) {
    console.log('getWorkouts failed');
    return;
  }
  const data = (await response.json()) as unknown;
  return data;
}
