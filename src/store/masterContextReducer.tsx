import ExerciseTemplate from '../classes/ExerciseTemplate';
import { masterData as masterDataType } from './MasterContext';

type LoadExercisesAction = {
  type: 'LOAD_EXERCISES';
  payload: ExerciseTemplate[];
};

type Action = LoadExercisesAction;

export default function masterReducer(state: masterDataType, action: Action) {
  if (action.type === 'LOAD_EXERCISES') {
    return { ...state, exercises: action.payload };
  }

  return state;
}
