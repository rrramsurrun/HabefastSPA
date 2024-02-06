import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import WorkoutView from './pages/WorkoutView';
import TrackingView from './pages/TrackingView';
import ExercisesView from './pages/ExercisesView';
import HistoryView from './pages/HistoryView';
import PageNotFound from './pages/PageNotFound';
import ExerciseTemplateView from './overlays/ExerciseTemplateView';
import MasterContextProvider from './store/MasterContext';
import ExerciseTemplateEditView from './overlays/ExerciseTemplateEditView';
import ActiveWorkoutView from './overlays/ActiveWorkoutView';
import AppLayout from './pages/AppLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<HistoryView />} />
      <Route path="workout" element={<WorkoutView />} />
      <Route path="exercises" element={<ExercisesView />} />
      <Route path="tracking" element={<TrackingView />} />
      <Route path="exercise/:id" element={<ExerciseTemplateView />} />
      <Route
        path="exerciseedit"
        element={<ExerciseTemplateEditView action="ADD" />}
      />
      <Route
        path="exerciseedit/:id"
        element={<ExerciseTemplateEditView action="EDIT" />}
      />
      <Route path="activeworkout" element={<ActiveWorkoutView />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return (
    <MasterContextProvider>
      <RouterProvider router={router} />
    </MasterContextProvider>
  );
}

export default App;
