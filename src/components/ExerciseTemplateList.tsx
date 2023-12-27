import { useEffect } from 'react';
import ExerciseTemplate from '../classes/ExerciseTemplate';
import ExerciseTemplateView from '../pages/ExerciseTemplateView';
import { useMasterContext } from '../store/MasterContext';
import styles from './ExerciseTemplateList.module.css';
import { NavLink } from 'react-router-dom';

export default function ExerciseTemplateList() {
  const { exercises } = useMasterContext();

  return (
    <ul className={styles.ul}>
      {exercises.length !== 0 ? (
        exercises.map((e) => (
          <li className={styles.li} key={e.id} onClick={() => console.log(e)}>
            <span className={styles.name}>{e.name}</span>
            <span className={styles.bodyPart}>{e.bodyPart}</span>
          </li>
        ))
      ) : (
        <li>Loading Exercises</li>
      )}
    </ul>
  );
}
