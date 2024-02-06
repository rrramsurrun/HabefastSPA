// import ExerciseTemplate from '../classes/ExerciseTemplate';

import ExerciseTemplate from '../classes/ExerciseTemplate';

export async function getExercises() {
  const response = await fetch(import.meta.env.VITE_SERVER_URL + '/exercises');
  if (!response.ok) {
    console.log('getExercises failed');
    return;
  }
  const data = (await response.json()) as unknown;
  return data;
}

export async function sendExercise(exercise: ExerciseTemplate) {
  console.log('attempting post');
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(exercise),
  };
  const response = await fetch(
    import.meta.env.VITE_SERVER_URL + '/exercises',
    requestOptions
  );
  if (!response.ok) {
    console.log('addExercises failed');
    return;
  }
  const data = (await response.json()) as unknown;
  return data;
}
// export async function editExercise() {
//   const response = await fetch(import.meta.env.VITE_SERVER_URL + '/exercises');
//   if (!response.ok) {
//     console.log('getExercises failed');
//     return;
//   }
//   const data = (await response.json()) as unknown;
//   return data;
// }

export async function getWorkouts() {
  const response = await fetch(import.meta.env.VITE_SERVER_URL + '/workouts');

  if (!response.ok) {
    console.log('getWorkouts failed');
    return;
  }
  const data = (await response.json()) as unknown;
  return data;
}
