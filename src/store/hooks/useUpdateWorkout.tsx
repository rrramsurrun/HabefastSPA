import { useEffect, useState } from 'react';
import Workout from '../../classes/Workout';
import { useMasterContext } from '../MasterContext';
import { sendWorkout } from '../repository';
import { useNavigate } from 'react-router-dom';

export function useUpdateWorkout(workout: Workout | null) {
  const navigate = useNavigate();
  const { saveWorkout } = useMasterContext();
  const [newWorkout, setNewWorkout] = useState<Workout | null>(null);
  useEffect(() => {
    async function send(workout: Workout) {
      const response = (await sendWorkout(workout)) as Workout;
      setNewWorkout(response);
    }
    if (workout) {
      send(workout);
    }
  }, [workout]);

  useEffect(() => {
    if (newWorkout) {
      saveWorkout(newWorkout);
      navigate('/');
    }
  }, [newWorkout]);
}
