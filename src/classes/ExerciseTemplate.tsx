export default class ExerciseTemplate {
  id?: number;
  name: string;
  exerciseType: string;
  bodyPart: string;

  public constructor(
    name: string,
    exerciseType: string,
    bodyPart: string,
    id?: number
  ) {
    this.id = id;
    this.name = name;
    this.exerciseType = exerciseType;
    this.bodyPart = bodyPart;
  }
}
