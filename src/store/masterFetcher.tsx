// import ExerciseTemplate from '../classes/ExerciseTemplate';

export async function getExercises() {
  const response = await fetch(import.meta.env.VITE_SERVER_URL + '/exercises');

  if (!response.ok) {
    console.log('getExercises failed');
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
