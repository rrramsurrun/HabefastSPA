import ExerciseTemplate from '../classes/ExerciseTemplate';
import Workout from '../classes/Workout';
import { masterData as masterDataType } from './MasterContext';

type LoadExercisesAction = {
  type: 'LOAD_EXERCISES';
  payload: ExerciseTemplate[];
};

type AddExerciseAction = {
  type: 'ADD_EXERCISE';
  payload: ExerciseTemplate;
};

type EditExerciseAction = {
  type: 'EDIT_EXERCISE';
  payload: ExerciseTemplate;
};

type LoadWorkoutAction = {
  type: 'LOAD_WORKOUTS';
  payload: Workout[];
};

type StartWorkoutAction = {
  type: 'START_WORKOUT';
};

type SaveWorkoutAction = {
  type: 'SAVE_WORKOUT';
  payload: Workout;
};

type Action =
  | LoadExercisesAction
  | AddExerciseAction
  | EditExerciseAction
  | LoadWorkoutAction
  | StartWorkoutAction
  | SaveWorkoutAction;

export default function masterReducer(state: masterDataType, action: Action) {
  if (action.type === 'LOAD_EXERCISES') {
    //For development purposes
    if (state.exercises.length !== 0) {
      return { ...state };
    }
    return { ...state, exercises: action.payload };
  }
  if (action.type === 'ADD_EXERCISE') {
    //Conditional used to account for Strict mode
    if (
      state.exercises.filter((e) => e.id === action.payload.id).length === 0
    ) {
      state.exercises.push(action.payload);
    }
    return { ...state };
  }
  if (action.type === 'EDIT_EXERCISE') {
    const newExercises = state.exercises.filter(
      (e) => e.id !== action.payload.id
    );
    newExercises.push(action.payload);
    return { ...state, exercises: newExercises };
  }
  if (action.type === 'LOAD_WORKOUTS') {
    return { ...state, workouts: action.payload };
  }
  if (action.type === 'START_WORKOUT') {
    const activeWorkout = new Workout('Workout');
    return { ...state, activeWorkout };
  }
  if (action.type === 'SAVE_WORKOUT') {
    state.workouts.push(action.payload);
    state.activeWorkout = null;
    return { ...state };
  }

  return state;
}
