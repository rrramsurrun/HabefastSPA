import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useMasterContext } from '../store/MasterContext';
import { useEffect, useState } from 'react';
import Workout from '../classes/Workout';
import { useUpdateWorkout } from '../store/hooks/useUpdateWorkout';

export default function ActiveWorkoutView() {
  const { activeWorkout } = useMasterContext();
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);
  const [workoutSend, setWorkoutSend] = useState<Workout | null>(null);

  if (activeWorkout == null) {
    return (
      <main>
        <h1>No Active Workout Available</h1>
        <NavBar />
      </main>
    );
  }
  //Find last page
  const { state } = useLocation();
  const { lastPage } = state || {};
  const backPath = lastPage || '/';

  //Save workout
  useEffect(() => {
    if (submit) {
      if (activeWorkout.endWorkout()) {
        setWorkoutSend(activeWorkout);
      }
    }
  }, [submit]);

  useUpdateWorkout(workoutSend);

  return (
    <main>
      <button onClick={() => navigate(backPath)}>Go Back</button>
      <h1>{activeWorkout.name}</h1>
      <h2>{activeWorkout.start.toLocaleDateString()}</h2>
      <div>Workout here</div>
      <button onClick={() => setSubmit(true)}>Save Workout</button>
    </main>
  );
}
