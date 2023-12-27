import ExerciseTemplate from '../classes/ExerciseTemplate';
import { masterData as masterDataType } from './MasterContext';

type LoadExercisesAction = {
  type: 'LOAD_EXERCISES';
  payload: ExerciseTemplate[];
};

type AddExerciseAction = {
  type: 'ADD_EXERCISE';
  payload: ExerciseTemplate;
};

type Action = LoadExercisesAction | AddExerciseAction;

export default function masterReducer(state: masterDataType, action: Action) {
  if (action.type === 'LOAD_EXERCISES') {
    //For development purposes
    if (state.exercises.length !== 0) {
      return { ...state };
    }
    return { ...state, exercises: action.payload };
  }
  if (action.type === 'ADD_EXERCISE') {
    state.exercises.push(action.payload);
    return { ...state };
  }

  return state;
}
