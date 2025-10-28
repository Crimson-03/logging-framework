import { LogLevels } from "./interfaces";
import { ILogInterface } from "./LogDestination/ILogDestination";
import { LogMessage } from "./LogMessage";

export class Logger {
    private logDestinations: ILogInterface[];

    constructor(logDestinations: ILogInterface[]) {
        this.logDestinations = logDestinations;
    }

    private log(level: LogLevels, message: string) {
        const logMessage = new LogMessage(level, message);
        for(const dest of this.logDestinations) {
            dest.log(logMessage);
        }
    }


    info(message: string) {
        this.log(LogLevels.INFO, message)
    }

    error(message: string) {
        this.log(LogLevels.ERROR, message);
    }

    debug(message: string) {
        this.log(LogLevels.DEBUG, message);
    }

    fatal(message: string) {
        this.log(LogLevels.FATAL, message);
    }
}