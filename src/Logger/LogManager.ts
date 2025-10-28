import { ConsoleLog } from "./LogDestination/ConsoleLog";
import { FileLog } from "./LogDestination/FileLog";
import { ILogInterface } from "./LogDestination/ILogDestination";
import { Logger } from "./Logger";

export default class LogManager {
    private static logger: Logger;

    static getLogger() {
        if(!this.logger) {
            this.logger = new LoggerBuilder()
              .addDestinations(new ConsoleLog())
              .addDestinations(new FileLog("newlog.txt"))
              .build();
        }
        return this.logger;
    }

}



class LoggerBuilder {
    private destinations: ILogInterface[] = [];

    addDestinations(dest : ILogInterface) : this {
        this.destinations.push(dest);
        return this;
    }

    build() : Logger {
        return new Logger(this.destinations)
    }
};