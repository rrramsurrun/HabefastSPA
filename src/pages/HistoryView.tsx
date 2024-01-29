import NavBar from '../components/NavBar';
import { useMasterContext } from '../store/MasterContext';

function HistoryView() {
  const { workouts } = useMasterContext();
  return (
    <main>
      <h1>HistoryView</h1>
      {workouts.map((workout) => (
        <div>
          <div>{workout.name}</div>
          <div>{workout.start.toString()}</div>
        </div>
      ))}
      <NavBar />
    </main>
  );
}

export default HistoryView;
