class ExerciseTemplate {
  id: string;
  name: string;
  exerciseType: string;
  bodyPart: string;

  public constructor(
    id: string,
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
