import { useEffect, useState } from 'react';
import Workout from '../../classes/Workout';
import { useMasterContext } from '../MasterContext';
import { sendWorkout } from '../repository';
import { useNavigate } from 'react-router-dom';

export function useUpdateWorkout(workout: Workout | null) {
  const navigate = useNavigate();
  const { saveWorkout, token } = useMasterContext();
  const [newWorkout, setNewWorkout] = useState<Workout | null>(null);
  useEffect(() => {
    async function send(workout: Workout, token: string) {
      const response = (await sendWorkout(workout, token)) as Workout;
      setNewWorkout(response);
    }
    if (workout && token) {
      send(workout, token);
    }
  }, [workout, token]);

  useEffect(() => {
    if (newWorkout) {
      saveWorkout(newWorkout);
      navigate('/');
    }
  }, [newWorkout]);
}
