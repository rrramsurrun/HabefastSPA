export default class ExerciseTemplate {
  id?: string;
  name: string;
  exerciseType: string;
  bodyPart: string;

  public constructor(
    name: string,
    exerciseType: string,
    bodyPart: string,
    id?: string
  ) {
    this.id = id;
    this.name = name;
    this.exerciseType = exerciseType;
    this.bodyPart = bodyPart;
  }
}
