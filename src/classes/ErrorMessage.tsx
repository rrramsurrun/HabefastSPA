export default class ErrorMessage {
  timestamp: Date;
  message: String[];

  public constructor({
    timestamp,
    message,
  }: {
    timestamp: Date;
    message: String[];
  }) {
    this.timestamp = timestamp;
    this.message = message;
  }
}
