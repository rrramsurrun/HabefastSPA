export default class Workout {
  id: number;
  name: string;
  start: Date;
  end?: Date;

  public constructor(name: string) {
    this.id = Math.random();
    this.name = name;
    this.start = new Date();
  }

  endWorkout = () => {
    this.end = new Date();
    return true;
  };
}
