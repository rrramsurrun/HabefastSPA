import { useMasterContext } from '../store/MasterContext';
import styles from './ExerciseTemplateList.module.css';
import { NavLink } from 'react-router-dom';

export default function ExerciseTemplateList() {
  const { exercises } = useMasterContext();

  return (
    <ul className={styles.ul}>
      {exercises.length !== 0 ? (
        exercises.map((e) => (
          <li className={styles.li} key={e.id}>
            <NavLink className={styles.nav} to={`/exercise/${e.id}`}>
              <span className={styles.name}>{e.id}</span>
              <span className={styles.name}>{e.name}</span>
              <span className={styles.bodyPart}>{e.bodyPart}</span>
            </NavLink>
          </li>
        ))
      ) : (
        <li>Loading Exercises</li>
      )}
    </ul>
  );
}
