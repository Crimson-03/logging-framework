import { LogMessage } from "../LogMessage";
import { ILogInterface } from "./ILogDestination";

export class ConsoleLog implements ILogInterface {
    log(logMessage: LogMessage): void {
        console.log(
          `TimeStamp: ${logMessage.getTimeStamp()} ${logMessage.getLogLevel()}: ${logMessage.getLogMessage()}`
        );
    }
}