import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useEffect,
} from 'react';
import ExerciseTemplate from '../classes/ExerciseTemplate';
import masterReducer from './masterContextReducer';

export type masterData = {
  exercises: ExerciseTemplate[];
};

const initialState: masterData = {
  exercises: [],
};

type masterDataContext = masterData & {
  loadExercises: (exercises: ExerciseTemplate[]) => void;
  addExercise: (exercise: ExerciseTemplate) => void;
  editExercise: (exercise: ExerciseTemplate) => void;
};

const MasterContext = createContext<masterDataContext | null>(null);

type MasterContextProviderProps = {
  children: ReactNode;
};

function MasterContextProvider({ children }: MasterContextProviderProps) {
  const [masterDataState, dispatch] = useReducer(masterReducer, initialState);
  const ctx: masterDataContext = {
    exercises: masterDataState.exercises,
    loadExercises(exercises) {
      dispatch({ type: 'LOAD_EXERCISES', payload: exercises });
    },
    addExercise(exercise) {
      dispatch({ type: 'ADD_EXERCISE', payload: exercise });
    },
    editExercise(exercise) {
      dispatch({ type: 'EDIT_EXERCISE', payload: exercise });
    },
  };

  return (
    <MasterContext.Provider value={ctx}>{children}</MasterContext.Provider>
  );
}

export function useMasterContext() {
  const masterCtx = useContext(MasterContext);
  if (masterCtx === null) {
    throw new Error('MasterContext is null!!!!!');
  }
  //Load exercises into context provider on program start
  useEffect(() => {
    setTimeout(() => {
      masterCtx.loadExercises([
        { id: 0, name: 'Bench Press', exerciseType: 'Reps', bodyPart: 'Chest' },
        {
          id: 1,
          name: 'Seated Cable Row',
          exerciseType: 'Reps',
          bodyPart: 'Back',
        },
        { id: 2, name: 'Back Squat', exerciseType: 'Reps', bodyPart: 'Legs' },
        { id: 3, name: 'Deadlift', exerciseType: 'Reps', bodyPart: 'Legs' },
      ]);
    }, 1000);
  }, []);

  return masterCtx;
}

export default MasterContextProvider;
