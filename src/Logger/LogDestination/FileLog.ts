import { LogMessage } from './../LogMessage';
import * as fs from "fs";
import * as path from "path";

export class FileLog {
    private writefs!: fs.WriteStream;

    constructor(fileName: string) {
        const dir = path.dirname(fileName);

        if(!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {recursive: true});
        }

        this.writefs = fs.createWriteStream(fileName, { flags: "a" });
    }

    log(logMessage: LogMessage): void {
        const log = `TimeStamp: ${logMessage.getTimeStamp()} ${logMessage.getLogLevel()}: ${logMessage.getLogMessage()}`;
        this.writefs.write(log + '\n');
    }

}