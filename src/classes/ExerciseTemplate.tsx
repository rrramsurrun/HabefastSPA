export default class ExerciseTemplate {
  id: number;
  name: string;
  exerciseType: string;
  bodyPart: string;

  public constructor(
    id: number,
    name: string,
    exerciseType: string,
    bodyPart: string
  ) {
    this.id = id;
    this.name = name;
    this.exerciseType = exerciseType;
    this.bodyPart = bodyPart;
  }
}
