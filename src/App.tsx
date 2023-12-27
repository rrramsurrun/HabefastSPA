import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkoutView from './pages/WorkoutView';
import TrackingView from './pages/TrackingView';
import ExercisesView from './pages/ExercisesView';
import HistoryView from './pages/HistoryView';
import PageNotFound from './pages/PageNotFound';
import ExerciseTemplateView from './pages/ExerciseTemplateView';
import MasterContextProvider from './store/MasterContext';
import ExerciseTemplateEditView from './pages/ExerciseTemplateEditView';

function App() {
  return (
    <MasterContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HistoryView />} />
          <Route path="workout" element={<WorkoutView />} />
          <Route path="exercises" element={<ExercisesView />} />
          <Route path="tracking" element={<TrackingView />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="exercise/:id" element={<ExerciseTemplateView />} />
          <Route path="exercise" element={<ExerciseTemplateEditView />} />
        </Routes>
      </BrowserRouter>
    </MasterContextProvider>
  );
}

export default App;
