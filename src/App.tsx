import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkoutView from './pages/WorkoutView';
import TrackingView from './pages/TrackingView';
import ExercisesView from './pages/ExercisesView';
import HistoryView from './pages/HistoryView';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <body>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HistoryView />} />
          <Route path="workout" element={<WorkoutView />} />
          <Route path="exercises" element={<ExercisesView />} />
          <Route path="tracking" element={<TrackingView />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
