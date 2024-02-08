// import ExerciseTemplate from '../classes/ExerciseTemplate';

import ExerciseTemplate from '../classes/ExerciseTemplate';
import Workout from '../classes/Workout';

export async function getExercises(token: string) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: token },
  };
  const response = await fetch(
    import.meta.env.VITE_SERVER_URL + '/exercises',
    requestOptions
  );

  if (!response.ok) {
    console.log('getExercises failed');
    return;
  }
  const data = (await response.json()) as unknown;
  return data;
}

export async function sendExercise(
  exercise: ExerciseTemplate,
  action: 'ADD' | 'EDIT',
  token: string
) {
  const requestOptions = {
    method: action === 'ADD' ? 'POST' : 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: token },
    body: JSON.stringify(exercise),
  };
  const response = await fetch(
    import.meta.env.VITE_SERVER_URL + '/exercises',
    requestOptions
  );
  const data = (await response.json()) as unknown;

  if (response.ok) {
    return { data: data, success: true };
  }

  return { data: data, success: false };
}
export async function sendWorkout(workout: Workout, token: string) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: token },
    body: JSON.stringify(workout),
  };
  const response = await fetch(
    import.meta.env.VITE_SERVER_URL + '/workouts',
    requestOptions
  );
  if (!response.ok) {
    console.log('addWorkout failed');
    return;
  }
  const data = (await response.json()) as unknown;
  return data;
}

export async function getWorkouts(token: string) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: token },
  };
  const response = await fetch(
    import.meta.env.VITE_SERVER_URL + '/workouts',
    requestOptions
  );

  if (!response.ok) {
    console.log('getWorkouts failed');
    return;
  }
  const data = (await response.json()) as unknown;
  return data;
}
export async function authenticate(credentials: {
  username: string;
  password: string;
}) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'localhost:8080',
      'Access-Control-Allow-Credentials': 'true',
    },
    body: JSON.stringify(credentials),
  };
  const response = await fetch(
    import.meta.env.VITE_SERVER_URL + '/authenticate',
    requestOptions
  );

  if (!response.ok) {
    console.log('Authorisation failed');
    return '';
  }
  const data = (await response.json()) as { Authorization: string };
  return data.Authorization;
}
