import ExerciseTemplate from '../classes/ExerciseTemplate';
import styles from './ExerciseTemplateList.module.css';

type ExerciseTemplateListProps = {
  exercises: ExerciseTemplate[];
};

export default function ExerciseTemplateList({
  exercises,
}: ExerciseTemplateListProps) {
  return (
    <ul className={styles.ul}>
      {exercises.map((e) => (
        <li className={styles.li} key={e.id}>
          {e.name}
        </li>
      ))}
    </ul>
  );
}
