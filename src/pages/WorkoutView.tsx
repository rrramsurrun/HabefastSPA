import React from 'react';
import NavBar from '../components/NavBar';
import { useMasterContext } from '../store/MasterContext';

function WorkoutView() {
  const { startWorkout } = useMasterContext();
  return (
    <main>
      <h1>WorkoutView</h1>
      <button
        className="mainpage__widebutton mainpage__widebutton--blue"
        onClick={startWorkout}
      >
        Start New Workout
      </button>
      <NavBar />
    </main>
  );
}

export default WorkoutView;
