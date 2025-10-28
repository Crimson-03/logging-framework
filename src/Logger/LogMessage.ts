import { LogLevels } from "./interfaces";

export class LogMessage {
  private logLevel: LogLevels;
  private message: string;
  private timestamp: Date;

  constructor(logLevel: LogLevels, message: string) {
    this.logLevel = logLevel;
    this.message = message;
    this.timestamp = new Date();
  }

  getTimeStamp() : Date {
    return this.timestamp;
  }

  getLogLevel() : string {
    return this.logLevel;
  }

  getLogMessage() : string {
    return this.message;
  }
}
