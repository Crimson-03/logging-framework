import { LogMessage } from "../LogMessage";

export interface ILogInterface {
    log(logMessage: LogMessage) : void;
}