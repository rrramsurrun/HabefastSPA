import { ReactNode, createContext, useContext, useReducer } from 'react';
import ExerciseTemplate from '../classes/ExerciseTemplate';
import masterReducer from './masterContextReducer';
import Workout from '../classes/Workout';
import ErrorMessage from '../classes/ErrorMessage';

export type masterData = {
  exercises: ExerciseTemplate[];
  activeWorkout: Workout | null;
  workouts: Workout[];
  errormsg: ErrorMessage | null;
  lastPath: string;
};

const initialState: masterData = {
  exercises: [],
  activeWorkout: null,
  workouts: [],
  errormsg: null,
  lastPath: '/',
};

type masterDataContext = masterData & {
  loadExercises: (exercises: ExerciseTemplate[]) => void;
  addExercise: (exercise: ExerciseTemplate) => void;
  editExercise: (exercise: ExerciseTemplate) => void;
  loadWorkouts: (workouts: Workout[]) => void;
  startWorkout: () => void;
  saveWorkout: (workout: Workout) => void;
  setError: (errormsg: ErrorMessage) => void;
  clearError: () => void;
  updateLastPath: (lastPath: string) => void;
};

const MasterContext = createContext<masterDataContext | null>(null);

function MasterContextProvider({ children }: { children: ReactNode }) {
  const [masterDataState, dispatch] = useReducer(masterReducer, initialState);
  const ctx: masterDataContext = {
    exercises: masterDataState.exercises,
    activeWorkout: masterDataState.activeWorkout,
    workouts: masterDataState.workouts,
    errormsg: masterDataState.errormsg,
    lastPath: masterDataState.lastPath,
    loadExercises(exercises) {
      dispatch({ type: 'LOAD_EXERCISES', payload: exercises });
    },
    addExercise(exercise) {
      dispatch({ type: 'ADD_EXERCISE', payload: exercise });
    },
    editExercise(exercise) {
      dispatch({ type: 'EDIT_EXERCISE', payload: exercise });
    },
    loadWorkouts(workouts) {
      dispatch({ type: 'LOAD_WORKOUTS', payload: workouts });
    },
    startWorkout() {
      dispatch({ type: 'START_WORKOUT' });
    },
    saveWorkout(workout) {
      dispatch({ type: 'SAVE_WORKOUT', payload: workout });
    },
    setError(error) {
      dispatch({ type: 'SET_ERROR', payload: error });
    },
    clearError() {
      dispatch({ type: 'CLEAR_ERROR' });
    },
    updateLastPath(lastPath) {
      dispatch({ type: 'UPDATE_LASTPATH', payload: lastPath });
    },
  };

  return (
    <MasterContext.Provider value={ctx}>{children}</MasterContext.Provider>
  );
}

export function useMasterContext() {
  const masterCtx = useContext(MasterContext);
  //Will never be null, required by Typescript
  if (masterCtx === null) {
    throw new Error('MasterContext is null!!!!!');
  }
  return masterCtx;
}

export default MasterContextProvider;
